// 1. Splash Screen Logic
window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = '0';
            setTimeout(() => splash.style.display = 'none', 1000);
        }, 2500);
    }
});

// 2. Shopping Cart State Management
let cart = JSON.parse(localStorage.getItem('insanesec_cart')) || [];

const cartSidebar = document.getElementById('cart-sidebar');
const cartTrigger = document.getElementById('cart-trigger');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalLabel = document.getElementById('cart-total');
const cartCountLabel = document.getElementById('cart-count');

// Initialize cart UI on load
updateCartUI();

// Toggle Sidebar
if (cartTrigger) {
    cartTrigger.onclick = () => cartSidebar.classList.add('open');
}
if (closeCart) {
    closeCart.onclick = () => cartSidebar.classList.remove('open');
}

// 3. Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.onclick = (e) => {
        const card = e.target.closest('.glass-card');
        const name = card.querySelector('h3').innerText;
        const priceText = card.querySelector('.price').innerText;
        const price = parseFloat(priceText.replace('$', ''));

        cart.push({ name, price });
        
        // Save to localStorage so items stay in cart when moving between pages
        localStorage.setItem('insanesec_cart', JSON.stringify(cart));
        
        updateCartUI();
        cartSidebar.classList.add('open');
    };
});

function updateCartUI() {
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.style.cssText = "display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.1); font-size: 0.9rem;";
        div.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(div);
    });

    if (cartTotalLabel) cartTotalLabel.innerText = `$${total.toFixed(2)}`;
    if (cartCountLabel) cartCountLabel.innerText = cart.length;
}

// 4. Smooth Navigation for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (document.querySelector(this.getAttribute('href'))) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});