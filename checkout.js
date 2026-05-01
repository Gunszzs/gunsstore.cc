const CHECKOUT_CART_KEY = "insanesec_cart_v1";

const CHECKOUT_PRODUCTS = {
  "rl-champion-pack": { name: "RL Switch Rocket League", basePrice: 39 },
  "rl-mechanics-bundle": { name: "MW2 Switch | Call Of Duty", basePrice: 24 },
  "mw2-lootstealer": { name: "MW2 Lootstealer", basePrice: 24 },
  "fivem-switch": { name: "Fivem Switch", basePrice: 24 },
  "apex-ranked-kit": { name: "Temporary Spoofer", basePrice: 5 },
  "apex-legend-pack": { name: "Perm Spoofer", basePrice: 20 },
  "torix-temp-spoofer": { name: "Torix: Temp Spoofer", basePrice: 10 },
  "cod-warzone-set": { name: "Call Of Duty Thunex BO7 External Cheat + Spoofer", basePrice: 49 },
  "cod-mp-kit": { name: "BO7 Unlock All", basePrice: 31 },
  "cod-bo6-zeroaim": { name: "Call Of Duty BO6 External", basePrice: 49 },
  "cod-bo6-ua": { name: "BO6 Unlock All", basePrice: 31 },
  "pubg-survivor-kit": { name: "Insanesec Net", basePrice: 33 },
  "pubg-sniper-pack": { name: "Insanesec Net Add Ons", basePrice: 27 },
  "val-shield": { name: "Shield: Valorant External Cheat", basePrice: 10 },
  "val-trigger-bot": { name: "Valorant Trigger Bot", basePrice: 7 },
  "arc-operator-kit": { name: "Valorant Unlock All", basePrice: 10 },
  "eafc-ut-pack": { name: "InsanesecAPI", basePrice: 25 },
  "eafc-club-boost": { name: "Insanesec API Add ons", basePrice: 25 },
  "fn-battle-bundle": { name: "Torix: Fortnite Private Cheat", basePrice: 34 },
  "fn-creator-pack": { name: "Arcane: Fortnite Cheat", basePrice: 10 },
  "fn-ignite": { name: "Ignite: Fortnite Cheat", basePrice: 15 },
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
  "rl-champion-pack": { "1d": 5, "3d": 10, "1w": 15, "1m": 25, life: 125 },
  "rl-mechanics-bundle": { "1w": 25, "1m": 50, life: 200 },
  "mw2-lootstealer": { "1m": 125, life: 250 },
  "fivem-switch": { "1w": 25, "1m": 50, life: 200 },
  "cod-mp-kit": { "1d": 5, "1w": 10, "1m": 20, life: 40 },
  "cod-bo6-zeroaim": { "1d": 8, "1w": 20, "1m": 40 },
  "cod-bo6-ua": { "1d": 5, "1w": 10, "1m": 20, life: 40 },
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
  "fn-battle-bundle": { "1d": 5, "1w": 15, "1m": 30, life: 80 },
  "fn-creator-pack": { "1d": 10, "1w": 30, "1m": 50 },
  "fn-ignite": { "1d": 15, "3d": 20, "1w": 35, "1m": 60, life: 350 },
  "val-shield": { "3d": 10, "1w": 20, "1m": 35 },
  "val-trigger-bot": { "1d": 7, "1w": 15, "1m": 25 },
  "arc-operator-kit": { "3d": 10, "1w": 15, "1m": 30, life: 50 },
  "apex-legend-pack": { "perm-1x": 20, "perm-life": 40 },
  "apex-ranked-kit": { "1d": 5, "1w": 10, "1m": 25, life: 50 },
  "torix-temp-spoofer": { "3d": 10, "1w": 15, "1m": 30, life: 80 },
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
