const CHECKOUT_CART_KEY = "insanesec_cart_v1";

const CHECKOUT_PRODUCTS = {
  "cod-warzone-set": { name: "Call Of Duty Thunex BO7 External Cheat + Spoofer", basePrice: 49 },
  "pubg-survivor-kit": { name: "Insanesec Net", basePrice: 33 },
  "pubg-sniper-pack": { name: "Insanesec Net Add Ons", basePrice: 27 },
  "eafc-ut-pack": { name: "InsanesecAPI", basePrice: 25 },
  "eafc-club-boost": { name: "Insanesec API Add ons", basePrice: 25 },
};

const CHECKOUT_DURATIONS = {
  "1d": { label: "1 day", multiplier: 1 },
  "3d": { label: "3 days", multiplier: 2.2 },
  "1w": { label: "1 week", multiplier: 3.8 },
  "1m": { label: "1 month", multiplier: 8.5 },
  life: { label: "lifetime", multiplier: 18 },
  "net-basic-1": { label: "Basic Monthly Plan #1", multiplier: 1 },
  "net-basic-2": { label: "Basic Monthly Plan #2", multiplier: 1 },
  "net-vip-1": { label: "VIP Monthly Plan #1", multiplier: 1 },
  "net-vip-2": { label: "VIP Monthly Plan #2", multiplier: 1 },
  "net-ultimate-1": { label: "Ultimate Monthly Plan #1", multiplier: 1 },
  "net-ultimate-2": { label: "Ultimate Monthly Plan #2", multiplier: 1 },
  "net-raw-1": { label: "Ultimate Raw Monthly Plan #1", multiplier: 1 },
  "net-raw-2": { label: "Ultimate Raw Monthly Plan #2", multiplier: 1 },
  "net-reseller": { label: "Become A Reseller", multiplier: 1 },
  "addon-60s": { label: "60 Seconds Key", multiplier: 1 },
  "addon-1conc": { label: "1+ Conc Key", multiplier: 1 },
  "addon-up-basic-vip": { label: "Upgrade Basic To VIP Key", multiplier: 1 },
  "addon-up-vip-ultimate": { label: "Upgrade VIP To Ultimate Key", multiplier: 1 },
  "addon-all-access": { label: "All Access (Includes UltimateRaws) Key", multiplier: 1 },
  "addon-homeholder": { label: "Homeholder Access Key", multiplier: 1 },
  "addon-max-time": { label: "Max Time Add On (1000 Seconds)", multiplier: 1 },
  "addon-life-current": { label: "Lifetime Add On To Current Plan Key", multiplier: 1 },
  "perm-1x": { label: "One Time Use Spoofer Key", multiplier: 1 },
  "perm-life": { label: "Lifetime Perm Spoofer Key", multiplier: 1 },
};
const CHECKOUT_FIXED_KEY_PRICES = {
  "1d": 10,
  "1w": 25,
  "1m": 50,
};
const CHECKOUT_PRODUCT_KEY_PRICE_OVERRIDES = {
  "pubg-survivor-kit": {
    "net-basic-1": 25,
    "net-basic-2": 40,
    "net-vip-1": 50,
    "net-vip-2": 85,
    "net-ultimate-1": 120,
    "net-ultimate-2": 140,
    "net-raw-1": 200,
    "net-raw-2": 300,
    "net-reseller": 1000,
  },
  "eafc-ut-pack": {
    "net-basic-1": 25,
    "net-basic-2": 40,
    "net-vip-1": 50,
    "net-vip-2": 85,
    "net-ultimate-1": 120,
    "net-ultimate-2": 140,
    "net-raw-1": 200,
    "net-raw-2": 300,
    "net-reseller": 1000,
  },
  "pubg-sniper-pack": {
    "addon-60s": 25,
    "addon-1conc": 25,
    "addon-up-basic-vip": 20,
    "addon-up-vip-ultimate": 50,
    "addon-all-access": 125,
    "addon-homeholder": 50,
    "addon-max-time": 200,
    "addon-life-current": 125,
  },
  "eafc-club-boost": {
    "addon-60s": 25,
    "addon-1conc": 25,
    "addon-up-basic-vip": 20,
    "addon-up-vip-ultimate": 50,
    "addon-all-access": 125,
    "addon-homeholder": 50,
    "addon-max-time": 200,
    "addon-life-current": 125,
  },
};

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");
const checkoutPayFieldset = document.getElementById("checkoutPayFieldset");
const checkoutPayError = document.getElementById("checkoutPayError");

function setCheckoutPayError(message) {
  if (!checkoutPayError) return;
  if (message) {
    checkoutPayError.textContent = message;
    checkoutPayError.hidden = false;
  } else {
    checkoutPayError.textContent = "";
    checkoutPayError.hidden = true;
  }
}

function syncCheckoutPaymentSelection() {
  document.querySelectorAll(".checkout-pay-option").forEach((label) => {
    const input = label.querySelector('input[name="checkoutPayment"]');
    label.classList.toggle("checkout-pay-option--selected", Boolean(input?.checked));
  });
}

function checkoutMoney(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(n);
}

function parseCheckoutCart() {
  try {
    const raw = localStorage.getItem(CHECKOUT_CART_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_) {
    return {};
  }
}

function writeCheckoutCart(cartObj) {
  try {
    localStorage.setItem(CHECKOUT_CART_KEY, JSON.stringify(cartObj));
  } catch (_) {
    // Ignore storage write failures.
  }
}

function removeCheckoutItem(cartKey) {
  const cartObj = parseCheckoutCart();
  if (!Object.hasOwn(cartObj, cartKey)) return;
  delete cartObj[cartKey];
  writeCheckoutCart(cartObj);
  renderCheckout();
}

function renderCheckout() {
  const cartObj = parseCheckoutCart();
  const entries = Object.entries(cartObj);

  if (entries.length === 0) {
    checkoutItems.innerHTML = `
      <div class="checkout-empty">
        <p>Your cart is empty.</p>
        <a class="btn btn-outline" href="index.html#shop">Back to Shop</a>
      </div>
    `;
    checkoutTotal.textContent = checkoutMoney(0);
    if (checkoutPayFieldset) checkoutPayFieldset.disabled = true;
    setCheckoutPayError("");
    return;
  }

  if (checkoutPayFieldset) checkoutPayFieldset.disabled = false;
  setCheckoutPayError("");

  let total = 0;
  checkoutItems.innerHTML = "";

  entries.forEach(([cartKey, qtyRaw]) => {
    const qty = Number(qtyRaw) || 0;
    const [productId, keyDurationId] = String(cartKey).split("::");
    const product = CHECKOUT_PRODUCTS[productId];
    const duration = CHECKOUT_DURATIONS[keyDurationId] || CHECKOUT_DURATIONS["1d"];
    if (!product || qty <= 0) return;

    const productOverrides = CHECKOUT_PRODUCT_KEY_PRICE_OVERRIDES[productId];
    const hasProductOverride = Object.hasOwn(productOverrides || {}, keyDurationId);
    const unit = hasProductOverride
      ? productOverrides[keyDurationId]
      : Object.hasOwn(CHECKOUT_FIXED_KEY_PRICES, keyDurationId)
        ? CHECKOUT_FIXED_KEY_PRICES[keyDurationId]
        : product.basePrice * duration.multiplier;
    const lineTotal = unit * qty;
    total += lineTotal;

    const row = document.createElement("article");
    row.className = "checkout-item";
    row.innerHTML = `
      <div class="checkout-item-main">
        <h3>${product.name}</h3>
        <p>${duration.label} • Qty ${qty}</p>
        <button type="button" class="remove-line" data-id="${cartKey}">Remove</button>
      </div>
      <strong>${checkoutMoney(lineTotal)}</strong>
    `;
    checkoutItems.appendChild(row);
  });

  checkoutItems.querySelectorAll(".remove-line").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cartKey = btn.dataset.id;
      if (!cartKey) return;
      removeCheckoutItem(cartKey);
    });
  });

  checkoutTotal.textContent = checkoutMoney(total);
  syncCheckoutPaymentSelection();
}

document.querySelectorAll('input[name="checkoutPayment"]').forEach((input) => {
  input.addEventListener("change", syncCheckoutPaymentSelection);
});

function wireCheckoutAddressCopy() {
  document.querySelectorAll(".checkout-pay-copy").forEach((el) => {
    if (el.dataset.wired) return;
    el.dataset.wired = "1";

    const runCopy = async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      const text = el.getAttribute("data-copy");
      if (!text) return;
      const defaultLabel = "Copy";
      try {
        await navigator.clipboard.writeText(text);
        el.textContent = "Copied";
        el.classList.add("is-copied");
        setTimeout(() => {
          el.textContent = defaultLabel;
          el.classList.remove("is-copied");
        }, 1800);
      } catch (_) {
        el.textContent = "Select text";
        setTimeout(() => {
          el.textContent = defaultLabel;
        }, 2000);
      }
    };

    el.addEventListener("click", runCopy);
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") runCopy(ev);
    });
  });
}

wireCheckoutAddressCopy();
renderCheckout();
