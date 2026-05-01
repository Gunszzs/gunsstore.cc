const PRODUCT_PAGE_KEY_OPTIONS = [
  { id: "1d", label: "Day Key", price: 10 },
  { id: "1w", label: "Week Key", price: 25 },
  { id: "1m", label: "Month Key", price: 50 },
];
const PRODUCT_PAGE_LIFETIME = { id: "life", label: "Lifetime Key", multiplier: 18 };

// Keep feature sections visible instead of collapsed dropdowns.
document.querySelectorAll(".bo7-details").forEach((detailsEl) => {
  detailsEl.setAttribute("open", "");
});

const PRODUCT_PAGE_PRODUCT_KEY_PRICE_OVERRIDES = {
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
  "apex-ranked-kit": { "1d": 5, "1w": 10, "1m": 25, life: 50 },
  "torix-temp-spoofer": { "3d": 10, "1w": 15, "1m": 30, life: 80 },
  "apex-legend-pack": { "perm-1x": 20, "perm-life": 40 },
};
const PRODUCT_PAGE_CUSTOM_KEY_OPTIONS = {
  "pubg-survivor-kit": [
    { id: "net-basic-1", label: "Basic Monthly Plan #1", price: 25 },
    { id: "net-basic-2", label: "Basic Monthly Plan #2", price: 40 },
    { id: "net-vip-1", label: "VIP Monthly Plan #1", price: 50 },
    { id: "net-vip-2", label: "VIP Monthly Plan #2", price: 85 },
    { id: "net-ultimate-1", label: "Ultimate Monthly Plan #1", price: 120 },
    { id: "net-ultimate-2", label: "Ultimate Monthly Plan #2", price: 140 },
    { id: "net-raw-1", label: "Ultimate Raw Monthly Plan #1", price: 200 },
    { id: "net-raw-2", label: "Ultimate Raw Monthly Plan #2", price: 300 },
    { id: "net-reseller", label: "Become A Reseller", price: 1000 },
  ],
  "eafc-ut-pack": [
    { id: "net-basic-1", label: "Basic Monthly Plan #1", price: 25 },
    { id: "net-basic-2", label: "Basic Monthly Plan #2", price: 40 },
    { id: "net-vip-1", label: "VIP Monthly Plan #1", price: 50 },
    { id: "net-vip-2", label: "VIP Monthly Plan #2", price: 85 },
    { id: "net-ultimate-1", label: "Ultimate Monthly Plan #1", price: 120 },
    { id: "net-ultimate-2", label: "Ultimate Monthly Plan #2", price: 140 },
    { id: "net-raw-1", label: "Ultimate Raw Monthly Plan #1", price: 200 },
    { id: "net-raw-2", label: "Ultimate Raw Monthly Plan #2", price: 300 },
    { id: "net-reseller", label: "Become A Reseller", price: 1000 },
  ],
  "pubg-sniper-pack": [
    { id: "addon-60s", label: "60 Seconds Key", price: 25 },
    { id: "addon-1conc", label: "1+ Conc Key", price: 25 },
    { id: "addon-up-basic-vip", label: "Upgrade Basic To VIP Key", price: 20 },
    { id: "addon-up-vip-ultimate", label: "Upgrade VIP To Ultimate Key", price: 50 },
    { id: "addon-all-access", label: "All Access (Includes UltimateRaws) Key", price: 125 },
    { id: "addon-homeholder", label: "Homeholder Access Key", price: 50 },
    { id: "addon-max-time", label: "Max Time Add On (1000 Seconds)", price: 200 },
    { id: "addon-life-current", label: "Lifetime Add On To Current Plan Key", price: 125 },
  ],
  "eafc-club-boost": [
    { id: "addon-60s", label: "60 Seconds Key", price: 25 },
    { id: "addon-1conc", label: "1+ Conc Key", price: 25 },
    { id: "addon-up-basic-vip", label: "Upgrade Basic To VIP Key", price: 20 },
    { id: "addon-up-vip-ultimate", label: "Upgrade VIP To Ultimate Key", price: 50 },
    { id: "addon-all-access", label: "All Access (Includes UltimateRaws) Key", price: 125 },
    { id: "addon-homeholder", label: "Homeholder Access Key", price: 50 },
    { id: "addon-max-time", label: "Max Time Add On (1000 Seconds)", price: 200 },
    { id: "addon-life-current", label: "Lifetime Add On To Current Plan Key", price: 125 },
  ],
  "apex-legend-pack": [
    { id: "perm-1x", label: "One Time Use Spoofer Key", price: 20 },
    { id: "perm-life", label: "Lifetime Perm Spoofer Key", price: 40 },
  ],
};
const PRODUCT_PAGE_PRODUCT_NAMES = {
  "rl-champion-pack": "RL Switch Rocket League",
  "rl-mechanics-bundle": "MW2 Switch | Call Of Duty",
  "mw2-lootstealer": "MW2 Lootstealer",
  "fivem-switch": "Fivem Switch",
  "apex-ranked-kit": "Temporary Spoofer",
  "apex-legend-pack": "Perm Spoofer",
  "torix-temp-spoofer": "Torix: Temp Spoofer",
  "cod-warzone-set": "Call Of Duty Thunex BO7 External Cheat + Spoofer",
  "cod-mp-kit": "BO7 Unlock All",
  "cod-bo6-zeroaim": "Call Of Duty BO6 External",
  "cod-bo6-ua": "BO6 Unlock All",
  "pubg-survivor-kit": "Insanesec Net",
  "pubg-sniper-pack": "Insanesec Net Add Ons",
  "val-shield": "Shield: Valorant External Cheat",
  "val-trigger-bot": "Valorant Trigger Bot",
  "arc-operator-kit": "Valorant Unlock All",
  "eafc-ut-pack": "InsanesecAPI",
  "eafc-club-boost": "Insanesec API Add ons",
  "fn-battle-bundle": "Torix: Fortnite Private Cheat",
  "fn-creator-pack": "Arcane: Fortnite Cheat",
  "fn-ignite": "Ignite: Fortnite Cheat",
};

const PRODUCT_PAGE_CART_STORAGE_KEY = "insanesec_cart_v1";

function productPageFormatMoney(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(n);
}

function productPageCartKey(productId, keyDurationId) {
  return `${productId}::${keyDurationId}`;
}

function readProductPageCart() {
  try {
    const raw = localStorage.getItem(PRODUCT_PAGE_CART_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_) {
    return {};
  }
}

function writeProductPageCart(cartObj) {
  try {
    localStorage.setItem(PRODUCT_PAGE_CART_STORAGE_KEY, JSON.stringify(cartObj));
  } catch (_) {
    // Ignore storage write failures.
  }
}

function addProductPageCartItem(productId, keyDurationId, qty = 1) {
  const cartObj = readProductPageCart();
  const key = productPageCartKey(productId, keyDurationId);
  const current = Number(cartObj[key] || 0);
  cartObj[key] = current + qty;
  writeProductPageCart(cartObj);
  updateProductPageCartNav();
  renderSideCart();
  openSideCart();
}

function setProductPageCartToSingleItem(productId, keyDurationId, qty = 1) {
  const key = productPageCartKey(productId, keyDurationId);
  const nextQty = Number(qty) || 1;
  writeProductPageCart({ [key]: nextQty });
  updateProductPageCartNav();
  renderSideCart();
}

function cartCountFromObj(cartObj) {
  let total = 0;
  Object.values(cartObj).forEach((qtyRaw) => {
    const qty = Number(qtyRaw) || 0;
    total += qty > 0 ? qty : 0;
  });
  return total;
}

function updateProductPageCartNav() {
  const cartObj = readProductPageCart();
  const count = cartCountFromObj(cartObj);
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.textContent.trim().startsWith("Cart")) {
      link.setAttribute("href", "checkout.html");
      link.textContent = `Cart ${count}`;
    }
  });
}

function keyLabelFromId(keyId) {
  if (keyId === "1d") return "Day Key";
  if (keyId === "3d") return "3 Day Key";
  if (keyId === "1w") return "Week Key";
  if (keyId === "1m") return "Month Key";
  if (keyId === "life") return "Lifetime Key";
  if (keyId === "net-basic-1") return "Basic Monthly Plan #1";
  if (keyId === "net-basic-2") return "Basic Monthly Plan #2";
  if (keyId === "net-vip-1") return "VIP Monthly Plan #1";
  if (keyId === "net-vip-2") return "VIP Monthly Plan #2";
  if (keyId === "net-ultimate-1") return "Ultimate Monthly Plan #1";
  if (keyId === "net-ultimate-2") return "Ultimate Monthly Plan #2";
  if (keyId === "net-raw-1") return "Ultimate Raw Monthly Plan #1";
  if (keyId === "net-raw-2") return "Ultimate Raw Monthly Plan #2";
  if (keyId === "net-reseller") return "Become A Reseller";
  if (keyId === "addon-60s") return "60 Seconds Key";
  if (keyId === "addon-1conc") return "1+ Conc Key";
  if (keyId === "addon-up-basic-vip") return "Upgrade Basic To VIP Key";
  if (keyId === "addon-up-vip-ultimate") return "Upgrade VIP To Ultimate Key";
  if (keyId === "addon-all-access") return "All Access (Includes UltimateRaws) Key";
  if (keyId === "addon-homeholder") return "Homeholder Access Key";
  if (keyId === "addon-max-time") return "Max Time Add On (1000 Seconds)";
  if (keyId === "addon-life-current") return "Lifetime Add On To Current Plan Key";
  if (keyId === "perm-1x") return "One Time Use Spoofer Key";
  if (keyId === "perm-life") return "Lifetime Perm Spoofer Key";
  return "Key";
}

function keyPriceFromProduct(productId, keyId) {
  const productOverrides = PRODUCT_PAGE_PRODUCT_KEY_PRICE_OVERRIDES[productId];
  if (Object.hasOwn(productOverrides || {}, keyId)) return productOverrides[keyId];
  if (keyId === "1d") return 10;
  if (keyId === "3d") return 22;
  if (keyId === "1w") return 25;
  if (keyId === "1m") return 50;
  if (keyId === "life") return 40;
  return 0;
}

function ensureSideCartMarkup() {
  let cartPanel = document.querySelector(".product-side-cart");
  if (cartPanel) return cartPanel;

  const wrapper = document.createElement("aside");
  wrapper.className = "cart-panel product-side-cart";
  wrapper.hidden = true;
  wrapper.setAttribute("aria-label", "Shopping cart");
  wrapper.innerHTML = `
    <div class="cart-panel-inner">
      <header class="cart-header">
        <h2>Your cart</h2>
        <button type="button" class="cart-close product-side-cart-close" aria-label="Close cart">×</button>
      </header>
      <ul class="cart-list product-side-cart-list"></ul>
      <div class="cart-footer">
        <div class="cart-total-row">
          <span>Total</span>
          <strong class="product-side-cart-total">${productPageFormatMoney(0)}</strong>
        </div>
        <button type="button" class="btn btn-primary btn-block product-side-cart-checkout">Checkout</button>
      </div>
    </div>
    <div class="cart-scrim product-side-cart-scrim"></div>
  `;
  document.body.appendChild(wrapper);

  wrapper.querySelector(".product-side-cart-close")?.addEventListener("click", closeSideCart);
  wrapper.querySelector(".product-side-cart-scrim")?.addEventListener("click", closeSideCart);
  wrapper.querySelector(".product-side-cart-checkout")?.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  return wrapper;
}

function openSideCart() {
  const cartPanel = ensureSideCartMarkup();
  cartPanel.hidden = false;
  requestAnimationFrame(() => {
    cartPanel.classList.add("is-open");
  });
}

function closeSideCart() {
  const cartPanel = ensureSideCartMarkup();
  cartPanel.classList.remove("is-open");
  const onEnd = () => {
    cartPanel.hidden = true;
    cartPanel.removeEventListener("transitionend", onEnd);
  };
  cartPanel.addEventListener("transitionend", onEnd);
}

function setSideCartQty(cartKey, qty) {
  const cartObj = readProductPageCart();
  if (qty <= 0) delete cartObj[cartKey];
  else cartObj[cartKey] = qty;
  writeProductPageCart(cartObj);
  updateProductPageCartNav();
  renderSideCart();
}

function renderSideCart() {
  const panel = ensureSideCartMarkup();
  const listEl = panel.querySelector(".product-side-cart-list");
  const totalEl = panel.querySelector(".product-side-cart-total");
  if (!listEl || !totalEl) return;

  const cartObj = readProductPageCart();
  const entries = Object.entries(cartObj);
  let total = 0;
  listEl.innerHTML = "";

  if (entries.length === 0) {
    listEl.innerHTML = "";
    totalEl.textContent = productPageFormatMoney(0);
    panel.classList.add("cart-panel--empty");
    return;
  }

  entries.forEach(([cartKey, qtyRaw]) => {
    const qty = Number(qtyRaw) || 0;
    if (qty <= 0) return;
    const [productId, keyDurationId] = String(cartKey).split("::");
    const unit = keyPriceFromProduct(productId, keyDurationId);
    const lineTotal = unit * qty;
    total += lineTotal;
    const name = PRODUCT_PAGE_PRODUCT_NAMES[productId] || productId;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <span class="cart-item-name">${name}</span>
      <span>${productPageFormatMoney(lineTotal)}</span>
      <div class="cart-item-meta">
        <span>${keyLabelFromId(keyDurationId)}</span>
        <button type="button" class="qty-btn" data-act="minus" data-id="${cartKey}" aria-label="Decrease">−</button>
        <span>Qty ${qty}</span>
        <button type="button" class="qty-btn" data-act="plus" data-id="${cartKey}" aria-label="Increase">+</button>
        <button type="button" class="remove-line" data-id="${cartKey}">Remove</button>
      </div>
    `;
    listEl.appendChild(li);
  });

  listEl.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.id;
      if (!key) return;
      const cartObjCurrent = readProductPageCart();
      const currentQty = Number(cartObjCurrent[key] || 0);
      if (btn.dataset.act === "plus") setSideCartQty(key, currentQty + 1);
      else setSideCartQty(key, currentQty - 1);
    });
  });
  listEl.querySelectorAll(".remove-line").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.id;
      if (!key) return;
      setSideCartQty(key, 0);
    });
  });

  totalEl.textContent = productPageFormatMoney(total);
  panel.classList.toggle("cart-panel--empty", !listEl.querySelector(".cart-item"));
}

function wireSellAuthCard(card) {
  const productId = card.dataset.productId;
  const basePrice = Number(card.dataset.basePrice);
  const ctaLabel = card.dataset.ctaLabel || "Add to cart";
  const ctaHref = card.dataset.ctaHref || "";
  const showBuyNow = card.dataset.showBuyNow !== "false";
  const includeLifetime = card.dataset.includeLifetime === "true";
  const hideDay = card.dataset.hideDay === "true";
  const hideWeek = card.dataset.hideWeek === "true";
  const dayPriceOverride = Number(card.dataset.dayPrice);
  const weekPriceOverride = Number(card.dataset.weekPrice);
  const monthPriceOverride = Number(card.dataset.monthPrice);
  const lifetimePriceOverride = Number(card.dataset.lifetimePrice);
  const threeDayPriceOverride = Number(card.dataset.threeDayPrice);
  const productBody = card.querySelector(".product-body");
  const priceEl = productBody?.querySelector(".product-price");
  if (!productId || !Number.isFinite(basePrice) || !productBody) return;
  if (productBody.querySelector(".product-key-options")) return;

  const wrap = document.createElement("div");
  wrap.className = "product-key-options";

  let selectedDurationId = PRODUCT_PAGE_KEY_OPTIONS[0].id;

  let options = PRODUCT_PAGE_CUSTOM_KEY_OPTIONS[productId];
  if (!Array.isArray(options) || options.length === 0) {
    const optionsBase = PRODUCT_PAGE_KEY_OPTIONS.map((opt) => {
      if (opt.id === "1d" && Number.isFinite(dayPriceOverride)) return { ...opt, price: dayPriceOverride };
      if (opt.id === "1w" && Number.isFinite(weekPriceOverride)) return { ...opt, price: weekPriceOverride };
      if (opt.id === "1m" && Number.isFinite(monthPriceOverride)) return { ...opt, price: monthPriceOverride };
      return opt;
    });
    const optionsBaseFiltered = optionsBase.filter((opt) => {
      if (hideDay && opt.id === "1d") return false;
      if (hideWeek && opt.id === "1w") return false;
      return true;
    });

    options = optionsBaseFiltered;
    if (Number.isFinite(threeDayPriceOverride)) {
      const dayOption = optionsBaseFiltered.find((opt) => opt.id === "1d");
      options = [
        ...(dayOption ? [dayOption] : []),
        { id: "3d", label: "3 Day Key", price: threeDayPriceOverride },
        ...optionsBaseFiltered.filter((opt) => opt.id !== "1d"),
      ];
    }

    options = includeLifetime
      ? [
          ...options,
          {
            id: PRODUCT_PAGE_LIFETIME.id,
            label: PRODUCT_PAGE_LIFETIME.label,
            price: Number.isFinite(lifetimePriceOverride) ? lifetimePriceOverride : basePrice * PRODUCT_PAGE_LIFETIME.multiplier,
          },
        ]
      : options;
  }
  const pageKeyOverrides = PRODUCT_PAGE_PRODUCT_KEY_PRICE_OVERRIDES[productId];
  if (pageKeyOverrides && typeof pageKeyOverrides === "object" && Array.isArray(options)) {
    options = options.map((opt) =>
      Object.hasOwn(pageKeyOverrides, opt.id) ? { ...opt, price: pageKeyOverrides[opt.id] } : opt
    );
  }
  if (options.length > 0) {
    selectedDurationId = options[0].id;
  }

  const optionButtons = options.map((opt, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `product-key-option${idx === 0 ? " is-active" : ""}`;
    button.innerHTML = `<span>${opt.label}</span><strong>${productPageFormatMoney(opt.price)}</strong>`;
    button.addEventListener("click", () => {
      selectedDurationId = opt.id;
      optionButtons.forEach((b) => b.classList.remove("is-active"));
      button.classList.add("is-active");
      if (priceEl) {
        priceEl.innerHTML = `${productPageFormatMoney(opt.price)} <span class="product-price-suffix">selected</span>`;
      }
    });
    return button;
  });

  optionButtons.forEach((btn) => wrap.appendChild(btn));

  if (priceEl) {
    const firstPrice = options[0]?.price;
    if (typeof firstPrice === "number") {
      priceEl.innerHTML = `${productPageFormatMoney(firstPrice)} <span class="product-price-suffix">selected</span>`;
    }
  }

  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.className = "btn btn-outline btn-block";
  addBtn.textContent = ctaLabel;
  addBtn.addEventListener("click", () => {
    if (ctaHref) {
      window.location.href = ctaHref;
      return;
    }
    addProductPageCartItem(productId, selectedDurationId, 1);
    const original = addBtn.textContent;
    addBtn.textContent = "Added to cart";
    setTimeout(() => {
      addBtn.textContent = original;
    }, 1200);
  });

  productBody.appendChild(wrap);

  if (showBuyNow) {
    const actionRow = document.createElement("div");
    actionRow.className = "product-card-actions";
    actionRow.appendChild(addBtn);

    const buyNowBtn = document.createElement("button");
    buyNowBtn.type = "button";
    buyNowBtn.className = "btn btn-outline btn-block";
    buyNowBtn.textContent = "Buy Now";
    buyNowBtn.addEventListener("click", () => {
      // Buy Now should check out only the selected product.
      setProductPageCartToSingleItem(productId, selectedDurationId, 1);
      window.location.href = "checkout.html";
    });
    actionRow.appendChild(buyNowBtn);
    productBody.appendChild(actionRow);
  } else {
    productBody.appendChild(addBtn);
  }
}

function wireBo7PricingPanel() {
  const panel = document.querySelector(".bo7-pricing[data-product-id]");
  if (!panel) return;

  const productId = panel.dataset.productId;
  const optionButtons = Array.from(panel.querySelectorAll(".bo7-price-option[data-duration-id]"));
  const buyBtn = panel.querySelector("[data-buy-now]");
  if (!productId || optionButtons.length === 0 || !buyBtn) return;

  let selectedDurationId = optionButtons.find((btn) => btn.classList.contains("is-active"))?.dataset.durationId || optionButtons[0].dataset.durationId;

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedDurationId = btn.dataset.durationId;
      optionButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  buyBtn.addEventListener("click", () => {
    addProductPageCartItem(productId, selectedDurationId, 1);
    const original = buyBtn.textContent;
    buyBtn.textContent = "Added to cart";
    setTimeout(() => {
      buyBtn.textContent = original;
    }, 1200);
  });
}

document.querySelectorAll(".product-card[data-product-id][data-base-price]").forEach(wireSellAuthCard);
wireBo7PricingPanel();
updateProductPageCartNav();
renderSideCart();
