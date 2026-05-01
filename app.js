/**
 * Community links & video embeds — edit these values for your channels.
 * - YouTube: only the video id (the part after v= in the watch URL).
 * - TikTok: the long numeric video id used in embed URLs (from Share → Copy link).
 * - TikTok profile: optional `tiktokProfile` block renders a profile strip above embeds.
 * - YouTube channel: optional `youtubeChannel` renders a channel strip; add video ids for embeds below it.
 */
const COMMUNITY = {
  discordInviteUrl: "https://discord.gg/insanesec",
  telegramUrl: "https://t.me/insanesecot",
  youtubeChannel: {
    channelUrl: "https://www.youtube.com/@Gunszzzs",
    handle: "@Gunszzzs",
    displayName: "Guns",
    tagline: "Insanesec clips, gameplay, and shop callouts.",
    stats: { subscribers: 1030, videos: 34 },
  },
  tiktokProfile: {
    profileUrl: "https://www.tiktok.com/@gunszzs",
    handle: "@gunszzs",
    displayName: "Guns",
    tagline: "Owner Of Insanesec",
    storeUrl: "https://gunsstore.cc/",
    storeLabel: "gunsstore.cc",
    stats: { following: 34, followers: 4145, likes: 391 },
  },
  youtubeVideoIds: [
    // "jNQXAC9IVRw",
  ],
  tiktokVideoIds: [
    // "7300000000000000000",
  ],
};

const CATEGORIES = [
  {
    id: "call-of-duty",
    name: "Call of Duty",
    blurb: "Call Of Duty BO7, BO6, MWIII, MWII and Unlock Alls",
    icon: "🏹",
    page: "callofduty.html",
  },
  {
    id: "rocket-league",
    name: "Insanesec Switchs",
    blurb: "Switchs for games like Rocket League, MW2, Fivem, Fortnite, PubG, Apex, Master Switch Access & More",
    icon: "💻",
    page: "insanesecswitchs.html",
  },
  {
    id: "pubg",
    name: "Insanesec Net",
    blurb: "Insanesec Net Has Multiple Methods To Slam Everything",
    icon: "🧑‍💻",
    page: "Insanesecnet.html",
  },
  {
    id: "valorant",
    name: "Valorant",
    blurb: "",
    icon: "𝕍",
    page: "valorant.html",
  },
  {
    id: "eafc-2026",
    name: "Insanesec API",
    blurb: "API keys, methods, and integration access.",
    icon: "{}",
    page: "insanesecplans.html",
  },
  {
    id: "fortnite",
    name: "Fortnite",
    blurb: "Fortnite Cheats, Arcane, ignite & Torix Private Cheat",
    icon: "🎮",
    page: "fortnite.html",
  },
  {
    id: "apex-legends",
    name: "Temp Spoofer & Perm Spoofer",
    blurb: "Temporary and permanent HWID spoofers, serial clean passes, and ban-safety tooling.",
    icon: "⟲",
    page: "spoofers.html",
  },
];

const PRODUCTS = [
  {
    id: "rl-champion-pack",
    categoryId: "rocket-league",
    name: "RL Switch Rocket League",
    price: 39,
    desc: "Insanesec Best Lag Switch In Comm",
    icon: "⚽",
  },
  {
    id: "rl-mechanics-bundle",
    categoryId: "rocket-league",
    name: "MW2 Switch | Call Of Duty",
    price: 24,
    desc: "MW2 Crash Switch",
    icon: "➤",
  },
  {
    id: "mw2-lootstealer",
    categoryId: "rocket-league",
    name: "MW2 Lootstealer",
    price: 24,
    desc: "MW2 Lootstealer",
    icon: "✹",
  },
  {
    id: "fivem-switch",
    categoryId: "rocket-league",
    name: "Fivem Switch",
    price: 24,
    desc: "Fivem Switch",
    icon: "◆",
  },
  {
    id: "apex-ranked-kit",
    categoryId: "apex-legends",
    name: "Temporary Spoofer",
    price: 5,
    desc: "Session-based HWID and serial spoofing for quick clean boots and safer queues.",
    icon: "⟲",
  },
  {
    id: "apex-legend-pack",
    categoryId: "apex-legends",
    name: "Perm Spoofer",
    price: 20,
    desc: "Persistent HWID and serial spoofing that survives reboots until you choose to restore.",
    icon: "∞",
  },
  {
    id: "torix-temp-spoofer",
    categoryId: "apex-legends",
    name: "Torix: Temp Spoofer",
    price: 10,
    desc: "Torix temporary spoof flow for quick session resets and clean relaunches.",
    icon: "⟲",
  },
  {
    id: "cod-warzone-set",
    categoryId: "call-of-duty",
    name: "Call Of Duty Thunex BO7 External Cheat + Spoofer",
    price: 49,
    desc: "",
    icon: "✹",
  },
  {
    id: "cod-mp-kit",
    categoryId: "call-of-duty",
    name: "BO7 Unlock All",
    price: 31,
    desc: "Small-map class presets and movement-first objective routes.",
    icon: "✦",
  },
  {
    id: "pubg-survivor-kit",
    categoryId: "pubg",
    name: "Insanesec Net",
    price: 33,
    desc: "Loot path sheets, squad role cards, and late-circle strategy notes.",
    icon: "◎",
  },
  {
    id: "pubg-sniper-pack",
    categoryId: "pubg",
    name: "Insanesec Net Add Ons",
    price: 27,
    desc: "Long-range setup guide, terrain callouts, and scope pairing chart.",
    icon: "◌",
  },
  {
    id: "val-shield",
    categoryId: "valorant",
    name: "Shield: Valorant External Cheat",
    price: 10,
    desc: "",
    icon: "◉",
  },
  {
    id: "arc-operator-kit",
    categoryId: "valorant",
    name: "Valorant Unlock All",
    price: 10,
    desc: "",
    icon: "◍",
  },
  {
    id: "val-trigger-bot",
    categoryId: "valorant",
    name: "Valorant Trigger Bot",
    price: 7,
    desc: "",
    icon: "⌖",
  },
  {
    id: "eafc-ut-pack",
    categoryId: "eafc-2026",
    name: "InsanesecAPI",
    price: 25,
    desc: "API keys, methods, and integration access.",
    icon: "{}",
  },
  {
    id: "eafc-club-boost",
    categoryId: "eafc-2026",
    name: "Insanesec API Add ons",
    price: 25,
    desc: "Optional modules, extended quotas, and premium API capabilities.",
    icon: "[]",
  },
  {
    id: "fn-battle-bundle",
    categoryId: "fortnite",
    name: "Torix: Fortnite Private Cheat",
    price: 34,
    desc: "",
    icon: "★",
  },
  {
    id: "fn-creator-pack",
    categoryId: "fortnite",
    name: "Arcane: Fortnite Cheat",
    price: 10,
    desc: "",
    icon: "✪",
  },
  {
    id: "fn-ignite",
    categoryId: "fortnite",
    name: "Ignite: Fortnite Cheat",
    price: 15,
    desc: "",
    icon: "✦",
  },
];

const KEY_DURATIONS = [
  { id: "1d", label: "1 day", multiplier: 1 },
  { id: "3d", label: "3 days", multiplier: 2.2 },
  { id: "1w", label: "1 week", multiplier: 3.8 },
  { id: "1m", label: "1 month", multiplier: 8.5 },
  { id: "life", label: "lifetime", multiplier: 18 },
  { id: "net-basic-1", label: "Basic Monthly Plan #1", multiplier: 1 },
  { id: "net-basic-2", label: "Basic Monthly Plan #2", multiplier: 1 },
  { id: "net-vip-1", label: "VIP Monthly Plan #1", multiplier: 1 },
  { id: "net-vip-2", label: "VIP Monthly Plan #2", multiplier: 1 },
  { id: "net-ultimate-1", label: "Ultimate Monthly Plan #1", multiplier: 1 },
  { id: "net-ultimate-2", label: "Ultimate Monthly Plan #2", multiplier: 1 },
  { id: "net-raw-1", label: "Ultimate Raw Monthly Plan #1", multiplier: 1 },
  { id: "net-raw-2", label: "Ultimate Raw Monthly Plan #2", multiplier: 1 },
  { id: "net-reseller", label: "Become A Reseller", multiplier: 1 },
  { id: "addon-60s", label: "60 Seconds Key", multiplier: 1 },
  { id: "addon-1conc", label: "1+ Conc Key", multiplier: 1 },
  { id: "addon-up-basic-vip", label: "Upgrade Basic To VIP Key", multiplier: 1 },
  { id: "addon-up-vip-ultimate", label: "Upgrade VIP To Ultimate Key", multiplier: 1 },
  { id: "addon-all-access", label: "All Access (Includes UltimateRaws) Key", multiplier: 1 },
  { id: "addon-homeholder", label: "Homeholder Access Key", multiplier: 1 },
  { id: "addon-max-time", label: "Max Time Add On (1000 Seconds)", multiplier: 1 },
  { id: "addon-life-current", label: "Lifetime Add On To Current Plan Key", multiplier: 1 },
  { id: "perm-1x", label: "One Time Use Spoofer Key", multiplier: 1 },
  { id: "perm-life", label: "Lifetime Perm Spoofer Key", multiplier: 1 },
];
const FIXED_KEY_PRICES = {
  "1d": 10,
  "1w": 25,
  "1m": 50,
};
const PRODUCT_KEY_PRICE_OVERRIDES = {
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

const CART_STORAGE_KEY = "insanesec_cart_v1";
const cart = new Map();

const productGrid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const shopToolbar = document.getElementById("shopToolbar");
const shopBack = document.getElementById("shopBack");
const shopContext = document.getElementById("shopContext");
const shopSub = document.getElementById("shopSub");
const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const cartClose = document.getElementById("cartClose");
const cartScrim = document.getElementById("cartScrim");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const toast = document.getElementById("toast");

function formatMoney(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(n);
}

function productsInCategory(categoryId) {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

function renderCategoryCards() {
  if (!categoryGrid) return;
  categoryGrid.innerHTML = CATEGORIES.map((c) => {
    const n = productsInCategory(c.id).length;
    const valorantFoot =
      c.id === "valorant"
        ? `
        <div class="valorant-range-foot valorant-range-foot--embed" aria-label="Valorant lineup">
          <ul class="valorant-range-foot__list">
            <li>valorant</li>
            <li>valorant external</li>
            <li>Unlock all &amp; Valorant triggerbot</li>
          </ul>
        </div>`
        : "";
    return `
    <a class="category-card" href="${escapeHtml(c.page || "#")}">
      <span class="category-card-inner">
        <span class="category-icon" aria-hidden="true">${c.icon}</span>
        <span class="category-meta">
          <h3>${escapeHtml(c.name)}</h3>
          <p>${escapeHtml(c.blurb)}</p>
        </span>
        <span class="category-count">${n} item${n === 1 ? "" : "s"}</span>
        ${valorantFoot}
      </span>
    </a>`;
  }).join("");
}

function wireProductCards(root) {
  if (!root) return;
  root.querySelectorAll(".product-card").forEach((card) => {
    const toggle = card.querySelector(".toggle-details");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const open = card.classList.toggle("expanded");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Hide" : "Details";
    });
  });

  root.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const card = btn.closest(".product-card");
      const keySelect = card?.querySelector(".key-select");
      const keyDurationId = keySelect?.value || KEY_DURATIONS[0].id;
      if (id) addToCart(id, keyDurationId);
    });
  });
}

function renderProductCards(list) {
  if (!productGrid) return;
  productGrid.innerHTML = list
    .map(
      (p) => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-visual"><span class="product-icon" aria-hidden="true">${p.icon}</span></div>
      <div class="product-body">
        <h3>${escapeHtml(p.name)}</h3>
        <p class="product-price">${formatMoney(p.price)} <span class="product-price-suffix">base</span></p>
        <label class="key-select-wrap">
          <span class="key-select-label">Key duration</span>
          <select class="key-select" aria-label="Select key duration for ${escapeHtml(p.name)}">
            ${keyDurationsForProduct(p.id)
              .map((k) => `<option value="${k.id}">${escapeHtml(k.label)}</option>`)
              .join("")}
          </select>
        </label>
        <p class="product-desc">${escapeHtml(p.desc)}</p>
        <button type="button" class="toggle-details" aria-expanded="false">Details</button>
        <button type="button" class="btn btn-primary btn-block add-to-cart" data-id="${p.id}">Add to cart</button>
      </div>
    </article>
  `
    )
    .join("");

  wireProductCards(productGrid);
}

function openCategory(categoryId) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  const items = productsInCategory(categoryId);
  if (!cat || items.length === 0) return;

  if (shopSub) shopSub.textContent = "Tap a card for details. Add to cart in one click.";
  if (shopContext) shopContext.textContent = cat.name;
  if (shopToolbar) shopToolbar.hidden = false;
  if (categoryGrid) categoryGrid.hidden = true;
  if (productGrid) {
    productGrid.hidden = false;
    renderProductCards(items);
  }
  productGrid?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showCategoryRoot() {
  if (shopSub) shopSub.textContent = "Choose a category to see what we stock.";
  if (shopContext) shopContext.textContent = "";
  if (shopToolbar) shopToolbar.hidden = true;
  if (productGrid) {
    productGrid.hidden = true;
    productGrid.innerHTML = "";
  }
  if (categoryGrid) categoryGrid.hidden = false;
  document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (shopBack) {
  shopBack.addEventListener("click", () => showCategoryRoot());
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

function makeCartKey(productId, keyDurationId) {
  return `${productId}::${keyDurationId}`;
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    Object.entries(parsed).forEach(([cartKey, qty]) => {
      const safeQty = Number(qty);
      if (Number.isFinite(safeQty) && safeQty > 0) cart.set(cartKey, safeQty);
    });
  } catch (_) {
    // Ignore malformed storage and continue with empty cart.
  }
}

function saveCartToStorage() {
  try {
    const serialized = {};
    cart.forEach((qty, cartKey) => {
      serialized[cartKey] = qty;
    });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(serialized));
  } catch (_) {
    // Storage can fail in private mode or restricted environments.
  }
}

function splitCartKey(cartKey) {
  const [productId, keyDurationId] = String(cartKey).split("::");
  return { productId, keyDurationId };
}

function productNameFromId(productId) {
  const fallbackNames = {
    "cod-bo6-zeroaim": "Call Of Duty BO6 External",
    "cod-warzone-set": "Call Of Duty Thunex BO7 External Cheat + Spoofer",
    "cod-mp-kit": "BO7 Unlock All",
    "cod-bo6-ua": "BO6 Unlock All",
  };
  return fallbackNames[productId] || productId;
}

function durationById(keyDurationId) {
  return KEY_DURATIONS.find((d) => d.id === keyDurationId) || KEY_DURATIONS[0];
}

function keyDurationsForProduct(productId) {
  const apiPlanIds = ["net-basic-1", "net-basic-2", "net-vip-1", "net-vip-2", "net-ultimate-1", "net-ultimate-2", "net-raw-1", "net-raw-2", "net-reseller"];
  const addonPackIds = [
    "addon-60s",
    "addon-1conc",
    "addon-up-basic-vip",
    "addon-up-vip-ultimate",
    "addon-all-access",
    "addon-homeholder",
    "addon-max-time",
    "addon-life-current",
  ];
  const idsByProduct = {
    "fn-creator-pack": ["1d", "1w", "1m"],
    "fn-ignite": ["1d", "3d", "1w", "1m", "life"],
    "fn-battle-bundle": ["1d", "1w", "1m", "life"],
    "val-shield": ["3d", "1w", "1m"],
    "val-trigger-bot": ["1d", "1w", "1m"],
    "arc-operator-kit": ["3d", "1w", "1m", "life"],
    "eafc-ut-pack": apiPlanIds,
    "pubg-sniper-pack": addonPackIds,
    "eafc-club-boost": addonPackIds,
    "apex-legend-pack": ["perm-1x", "perm-life"],
    "apex-ranked-kit": ["1d", "1w", "1m", "life"],
    "torix-temp-spoofer": ["3d", "1w", "1m", "life"],
  };
  const ids = idsByProduct[productId];
  if (!ids) return KEY_DURATIONS;
  return ids.map((id) => KEY_DURATIONS.find((k) => k.id === id)).filter(Boolean);
}

function unitPrice(product, keyDurationId) {
  const productOverride = PRODUCT_KEY_PRICE_OVERRIDES[product.id];
  if (Object.hasOwn(productOverride || {}, keyDurationId)) return productOverride[keyDurationId];
  if (Object.hasOwn(FIXED_KEY_PRICES, keyDurationId)) return FIXED_KEY_PRICES[keyDurationId];
  return product.price * durationById(keyDurationId).multiplier;
}

function addToCart(id, keyDurationId) {
  const cartKey = makeCartKey(id, keyDurationId);
  const prev = cart.get(cartKey) || 0;
  cart.set(cartKey, prev + 1);
  updateCartUI();
  showToast("Added to cart");
}

function setQty(cartKey, qty) {
  if (qty <= 0) cart.delete(cartKey);
  else cart.set(cartKey, qty);
  updateCartUI();
}

function updateCartUI() {
  let count = 0;
  let total = 0;
  cart.forEach((qty, cartKey) => {
    count += qty;
    const { productId, keyDurationId } = splitCartKey(cartKey);
    const p = PRODUCTS.find((x) => x.id === productId);
    if (p) total += unitPrice(p, keyDurationId) * qty;
  });
  cartCount.textContent = String(count);
  cartTotal.textContent = formatMoney(total);

  if (cart.size === 0) {
    cartList.innerHTML = "";
  } else {
    cartList.innerHTML = "";
    let renderedCount = 0;
    cart.forEach((qty, cartKey) => {
      const { productId, keyDurationId } = splitCartKey(cartKey);
      const p = PRODUCTS.find((x) => x.id === productId);
      const duration = durationById(keyDurationId);
      const productName = p ? p.name : productNameFromId(productId);
      const linePrice = p ? unitPrice(p, keyDurationId) * qty : 0;
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <span class="cart-item-name">${escapeHtml(productName)}</span>
        <span>${linePrice > 0 ? formatMoney(linePrice) : "View at checkout"}</span>
        <div class="cart-item-meta">
          <span>${escapeHtml(duration.label)}</span>
          <button type="button" class="qty-btn" data-act="minus" data-id="${cartKey}" aria-label="Decrease">−</button>
          <span>Qty ${qty}</span>
          <button type="button" class="qty-btn" data-act="plus" data-id="${cartKey}" aria-label="Increase">+</button>
          <button type="button" class="remove-line" data-id="${cartKey}">Remove</button>
        </div>
      `;
      cartList.appendChild(li);
      renderedCount += 1;
    });

    if (renderedCount === 0) {
      cartList.innerHTML = "";
    }

    cartList.querySelectorAll(".qty-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const pid = b.dataset.id;
        const cur = cart.get(pid) || 0;
        if (b.dataset.act === "plus") setQty(pid, cur + 1);
        else setQty(pid, cur - 1);
      });
    });
    cartList.querySelectorAll(".remove-line").forEach((b) => {
      b.addEventListener("click", () => setQty(b.dataset.id, 0));
    });
  }

  if (cartPanel) {
    cartPanel.classList.toggle("cart-panel--empty", cart.size === 0);
  }

  saveCartToStorage();
}

function openCart() {
  cartPanel.hidden = false;
  requestAnimationFrame(() => {
    cartPanel.classList.add("is-open");
    cartBtn.setAttribute("aria-expanded", "true");
  });
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartBtn.setAttribute("aria-expanded", "false");
  const inner = cartPanel.querySelector(".cart-panel-inner");
  const onEnd = (e) => {
    if (e.target !== inner || e.propertyName !== "transform") return;
    cartPanel.hidden = true;
    inner.removeEventListener("transitionend", onEnd);
  };
  inner?.addEventListener("transitionend", onEnd);
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

cartBtn.addEventListener("click", () => {
  if (cartPanel.classList.contains("is-open")) closeCart();
  else openCart();
});
cartClose.addEventListener("click", closeCart);
cartScrim.addEventListener("click", closeCart);

checkoutBtn.addEventListener("click", () => {
  if (cart.size === 0) {
    showToast("Cart is empty");
    return;
  }
  window.location.href = "checkout.html";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cartPanel.classList.contains("is-open")) closeCart();
});

function formatCommunityCount(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return "—";
  return x.toLocaleString("en-US");
}

/** Compact subscriber count (e.g. 1030 → 1.03K) for YouTube channel card. */
function formatYoutubeSubscribers(n) {
  const x = Number(n);
  if (!Number.isFinite(x) || x < 0) return "—";
  if (x >= 1_000_000) return `${(x / 1_000_000).toFixed(2).replace(/\.?0+$/, "")}M`;
  if (x >= 1000) return `${(x / 1000).toFixed(2).replace(/\.?0+$/, "")}K`;
  return String(x);
}

function communitySafeHref(url) {
  try {
    const u = new URL(String(url ?? "").trim());
    if (u.protocol !== "https:" && u.protocol !== "http:") return "#";
    return u.href;
  } catch {
    return "#";
  }
}

function initCommunity() {
  const discordEl = document.querySelector('[data-invite="discord"]');
  const telegramEl = document.querySelector('[data-invite="telegram"]');
  if (discordEl) discordEl.href = COMMUNITY.discordInviteUrl;
  if (telegramEl) telegramEl.href = COMMUNITY.telegramUrl;

  const ytRoot = document.getElementById("youtubeEmbeds");
  const ttRoot = document.getElementById("tiktokEmbeds");
  const ytProfileEl = document.getElementById("youtubeProfileCard");
  const ttProfileEl = document.getElementById("tiktokProfileCard");
  if (!ytRoot || !ttRoot) return;

  if (ytProfileEl && COMMUNITY.youtubeChannel && COMMUNITY.youtubeChannel.channelUrl) {
    const y = COMMUNITY.youtubeChannel;
    const ys = y.stats || {};
    const taglineY = y.tagline ? escapeHtml(String(y.tagline)) : "";
    const channelHref = communitySafeHref(y.channelUrl);
    const discordShort = "discord.gg/insanesec";
    ytProfileEl.hidden = false;
    ytProfileEl.innerHTML = `
      <div class="youtube-profile__header">
        <div class="youtube-profile__avatar" aria-hidden="true">
          <svg class="youtube-profile__mark" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.5 31.5 0 0 0 .5-5.8 31.5 31.5 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
        </div>
        <div class="youtube-profile__meta">
          <p class="youtube-profile__name">${escapeHtml(String(y.displayName || "").trim() || "YouTube")}</p>
          <p class="youtube-profile__handle">${escapeHtml(String(y.handle || "").trim())}</p>
        </div>
      </div>
      ${taglineY ? `<p class="youtube-profile__tagline">${taglineY}</p>` : ""}
      <dl class="youtube-profile__stats">
        <div class="youtube-profile__stat"><dt>Subscribers</dt><dd>${formatYoutubeSubscribers(ys.subscribers)}</dd></div>
        <div class="youtube-profile__stat"><dt>Videos</dt><dd>${formatCommunityCount(ys.videos)}</dd></div>
      </dl>
      <div class="youtube-profile__links">
        <a class="youtube-profile__link" href="${escapeHtml(COMMUNITY.discordInviteUrl)}" target="_blank" rel="noopener noreferrer">${discordShort}</a>
      </div>
      <a class="btn btn-primary btn-block youtube-profile__cta" href="${escapeHtml(channelHref)}" target="_blank" rel="noopener noreferrer">Open YouTube channel</a>
    `;
  }

  if (ttProfileEl && COMMUNITY.tiktokProfile && COMMUNITY.tiktokProfile.profileUrl) {
    const p = COMMUNITY.tiktokProfile;
    const s = p.stats || {};
    const storeUrl = p.storeUrl ? String(p.storeUrl).trim() : "";
    const storeHref = storeUrl ? communitySafeHref(storeUrl) : "#";
    const storeLabel = (p.storeLabel && String(p.storeLabel).trim()) || (storeUrl ? storeUrl.replace(/^https?:\/\//i, "").replace(/\/$/, "") : "");
    const tagline = p.tagline ? escapeHtml(String(p.tagline)) : "";
    const discordShort = "discord.gg/insanesec";
    const profileHref = communitySafeHref(p.profileUrl);
    ttProfileEl.hidden = false;
    ttProfileEl.innerHTML = `
      <div class="tiktok-profile__header">
        <div class="tiktok-profile__avatar" aria-hidden="true"><span>${escapeHtml((p.displayName || "G").trim().slice(0, 1).toUpperCase())}</span></div>
        <div class="tiktok-profile__meta">
          <p class="tiktok-profile__name">${escapeHtml(String(p.displayName || "").trim() || "TikTok")}</p>
          <p class="tiktok-profile__handle">${escapeHtml(String(p.handle || "").trim())}</p>
        </div>
      </div>
      ${tagline ? `<p class="tiktok-profile__tagline">${tagline}</p>` : ""}
      <dl class="tiktok-profile__stats">
        <div class="tiktok-profile__stat"><dt>Following</dt><dd>${formatCommunityCount(s.following)}</dd></div>
        <div class="tiktok-profile__stat"><dt>Followers</dt><dd>${formatCommunityCount(s.followers)}</dd></div>
        <div class="tiktok-profile__stat"><dt>Likes</dt><dd>${formatCommunityCount(s.likes)}</dd></div>
      </dl>
      <div class="tiktok-profile__links">
        <a class="tiktok-profile__link" href="${escapeHtml(COMMUNITY.discordInviteUrl)}" target="_blank" rel="noopener noreferrer">${discordShort}</a>
        ${
          storeUrl && storeHref !== "#"
            ? `<a class="tiktok-profile__link" href="${escapeHtml(storeHref)}" target="_blank" rel="noopener noreferrer">${escapeHtml(storeLabel || storeUrl)}</a>`
            : ""
        }
      </div>
      <a class="btn btn-primary btn-block tiktok-profile__cta" href="${escapeHtml(profileHref)}" target="_blank" rel="noopener noreferrer">Open TikTok profile</a>
    `;
  }

  if (COMMUNITY.youtubeVideoIds.length === 0) {
    ytRoot.innerHTML = "";
  } else {
    ytRoot.innerHTML = COMMUNITY.youtubeVideoIds.map((rawId) => {
      const id = String(rawId).trim();
      if (!id) return "";
      return `<div class="embed-frame">
        <iframe src="https://www.youtube.com/embed/${encodeURIComponent(id)}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>`;
    }).join("");
  }

  if (COMMUNITY.tiktokVideoIds.length === 0) {
    ttRoot.innerHTML = "";
  } else {
    ttRoot.innerHTML = COMMUNITY.tiktokVideoIds.map((rawId) => {
      const id = String(rawId).trim();
      if (!id) return "";
      return `<div class="embed-frame">
        <iframe src="https://www.tiktok.com/embed/v2/${encodeURIComponent(id)}" title="TikTok video" allow="encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>`;
    }).join("");
  }
}

loadCartFromStorage();
renderCategoryCards();
updateCartUI();
initCommunity();
