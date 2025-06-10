// Product Data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16-inch",
        category: "electronics",
        price: 2399.00,
        originalPrice: 2599.00,
        description: "Powerful laptop with M3 Pro chip, 16GB RAM, 512GB SSD. Perfect for professional work and creative projects.",
        image: "💻",
        rating: 4.8,
        reviews: 245,
        inStock: true
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        category: "electronics",
        price: 999.00,
        originalPrice: 1099.00,
        description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.",
        image: "📱",
        rating: 4.7,
        reviews: 532,
        inStock: true
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "electronics",
        price: 299.00,
        originalPrice: 349.00,
        description: "Premium noise-canceling wireless headphones with 30-hour battery life.",
        image: "🎧",
        rating: 4.6,
        reviews: 189,
        inStock: true
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "electronics",
        price: 399.00,
        originalPrice: 449.00,
        description: "Advanced fitness tracking, heart rate monitoring, and smartphone connectivity.",
        image: "⌚",
        rating: 4.5,
        reviews: 367,
        inStock: true
    },
    {
        id: 5,
        name: "Designer T-Shirt",
        category: "clothing",
        price: 49.99,
        originalPrice: 69.99,
        description: "Premium cotton t-shirt with modern design. Available in multiple colors and sizes.",
        image: "👕",
        rating: 4.3,
        reviews: 156,
        inStock: true
    },
    {
        id: 6,
        name: "Denim Jeans",
        category: "clothing",
        price: 89.99,
        originalPrice: 119.99,
        description: "Classic fit denim jeans made from sustainable materials. Comfortable and stylish.",
        image: "👖",
        rating: 4.4,
        reviews: 203,
        inStock: true
    },
    {
        id: 7,
        name: "Winter Jacket",
        category: "clothing",
        price: 159.99,
        originalPrice: 199.99,
        description: "Warm and waterproof winter jacket with premium insulation and modern design.",
        image: "🧥",
        rating: 4.7,
        reviews: 145,
        inStock: true
    },
    {
        id: 8,
        name: "Running Shoes",
        category: "clothing",
        price: 129.99,
        originalPrice: 149.99,
        description: "Lightweight running shoes with advanced cushioning and breathable mesh upper.",
        image: "👟",
        rating: 4.6,
        reviews: 298,
        inStock: true
    },
    {
        id: 9,
        name: "Coffee Maker",
        category: "home",
        price: 199.99,
        originalPrice: 249.99,
        description: "Programmable coffee maker with built-in grinder and thermal carafe.",
        image: "☕",
        rating: 4.5,
        reviews: 178,
        inStock: true
    },
    {
        id: 10,
        name: "Air Purifier",
        category: "home",
        price: 299.99,
        originalPrice: 349.99,
        description: "HEPA air purifier with smart controls and air quality monitoring.",
        image: "🌪️",
        rating: 4.6,
        reviews: 223,
        inStock: true
    },
    {
        id: 11,
        name: "Garden Tools Set",
        category: "home",
        price: 79.99,
        originalPrice: 99.99,
        description: "Complete gardening toolkit with premium steel tools and ergonomic handles.",
        image: "🌱",
        rating: 4.4,
        reviews: 134,
        inStock: true
    },
    {
        id: 12,
        name: "Smart Thermostat",
        category: "home",
        price: 249.99,
        originalPrice: 279.99,
        description: "Wi-Fi enabled smart thermostat with learning capabilities and energy savings.",
        image: "🌡️",
        rating: 4.7,
        reviews: 267,
        inStock: true
    },
    {
        id: 13,
        name: "Basketball",
        category: "sports",
        price: 29.99,
        originalPrice: 39.99,
        description: "Official size basketball with premium leather and excellent grip.",
        image: "🏀",
        rating: 4.3,
        reviews: 89,
        inStock: true
    },
    {
        id: 14,
        name: "Yoga Mat",
        category: "sports",
        price: 49.99,
        originalPrice: 59.99,
        description: "Non-slip yoga mat with extra cushioning and carrying strap included.",
        image: "🧘",
        rating: 4.5,
        reviews: 167,
        inStock: true
    },
    {
        id: 15,
        name: "Dumbbells Set",
        category: "sports",
        price: 199.99,
        originalPrice: 249.99,
        description: "Adjustable dumbbells set with quick-change weight system.",
        image: "🏋️",
        rating: 4.6,
        reviews: 234,
        inStock: true
    },
    {
        id: 16,
        name: "Tennis Racket",
        category: "sports",
        price: 129.99,
        originalPrice: 159.99,
        description: "Professional tennis racket with carbon fiber frame and premium strings.",
        image: "🎾",
        rating: 4.4,
        reviews: 112,
        inStock: true
    },
    {
        id: 17,
        name: "4K Monitor",
        category: "electronics",
        price: 449.99,
        originalPrice: 549.99,
        description: "27-inch 4K UHD monitor with HDR support and USB-C connectivity.",
        image: "🖥️",
        rating: 4.7,
        reviews: 178,
        inStock: true
    },
    {
        id: 18,
        name: "Wireless Mouse",
        category: "electronics",
        price: 79.99,
        originalPrice: 99.99,
        description: "Ergonomic wireless mouse with precision tracking and long battery life.",
        image: "🖱️",
        rating: 4.4,
        reviews: 203,
        inStock: true
    },
    {
        id: 19,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 149.99,
        originalPrice: 179.99,
        description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
        image: "🔊",
        rating: 4.5,
        reviews: 289,
        inStock: true
    },
    {
        id: 20,
        name: "Casual Dress",
        category: "clothing",
        price: 79.99,
        originalPrice: 99.99,
        description: "Elegant casual dress perfect for work or weekend outings. Made from premium fabric.",
        image: "👗",
        rating: 4.4,
        reviews: 167,
        inStock: true
    }
];

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let searchQuery = '';
let isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    updateAuthButton();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debounce(handleSearch, 300));

    // Auth form submissions
    document.getElementById('signinForm').addEventListener('submit', handleSignIn);
    document.getElementById('signupForm').addEventListener('submit', handleSignUp);

    // Checkout form submission
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const authModal = document.getElementById('authModal');
        const checkoutModal = document.getElementById('checkoutModal');

        if (event.target === authModal) {
            toggleAuthModal();
        }
        if (event.target === checkoutModal) {
            closeCheckout();
        }
    });
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Product Rendering
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    let filteredProducts = products;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }

    // Apply search filter
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found.</div>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    card.innerHTML = `
        <div class="product-image">${product.image}</div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                $${product.price.toFixed(2)}
                ${product.originalPrice > product.price ? 
                    `<span style="text-decoration: line-through; color: #94a3b8; font-size: 0.9rem; margin-left: 0.5rem;">$${product.originalPrice.toFixed(2)}</span>
                     <span style="background: #ef4444; color: white; padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; margin-left: 0.5rem;">${discount}% OFF</span>` 
                    : ''
                }
            </div>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span>${product.rating} (${product.reviews} reviews)</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    return card;
}

// Filter Functions
function filterProducts(category) {
    currentFilter = category;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderProducts();
}

function handleSearch(event) {
    searchQuery = event.target.value;
    renderProducts();
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showMessage('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showMessage('Product removed from cart!', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    calculateTotals();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: #64748b;">Your cart is empty</div>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="margin: 0 0.5rem;">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="qty-btn" onclick="removeFromCart(${item.id})" style="margin-left: 1rem; background: #fee2e2; color: #dc2626;">×</button>
                </div>
            </div>
        </div>
    `).join('');
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');

    if (cartSidebar.classList.contains('open')) {
        renderCartItems();
        calculateTotals();
    }
}

// Authentication Functions
function toggleAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.toggle('show');
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.add('hidden'));

    if (tab === 'signin') {
        document.querySelector('.tab-btn:first-child').classList.add('active');
        document.getElementById('signinForm').classList.remove('hidden');
    } else {
        document.querySelector('.tab-btn:last-child').classList.add('active');
        document.getElementById('signupForm').classList.remove('hidden');
    }
}

function handleSignIn(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    const password = formData.get('password') || event.target.querySelector('input[type="password"]').value;

    // Simulate authentication
    if (email && password) {
        isAuthenticated = true;
        currentUser = { email, name: email.split('@')[0] };

        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        updateAuthButton();
        toggleAuthModal();
        showMessage('Successfully signed in!', 'success');
    } else {
        showMessage('Please fill in all fields', 'error');
    }
}

function handleSignUp(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }

    if (name && email && password) {
        isAuthenticated = true;
        currentUser = { email, name };

        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        updateAuthButton();
        toggleAuthModal();
        showMessage('Account created successfully!', 'success');
    } else {
        showMessage('Please fill in all fields', 'error');
    }
}

function updateAuthButton() {
    const authBtn = document.querySelector('.auth-btn');
    if (isAuthenticated && currentUser) {
        authBtn.textContent = `Hi, ${currentUser.name}`;
        authBtn.onclick = signOut;
    } else {
        authBtn.textContent = 'Sign In';
        authBtn.onclick = toggleAuthModal;
    }
}

function signOut() {
    isAuthenticated = false;
    currentUser = null;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    updateAuthButton();
    showMessage('Signed out successfully!', 'success');
}

// Checkout Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty', 'error');
        return;
    }

    if (!isAuthenticated) {
        showMessage('Please sign in to proceed', 'error');
        toggleAuthModal();
        return;
    }

    toggleCart(); // Close cart
    document.getElementById('checkoutModal').classList.add('show');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

function handleCheckout(event) {
    event.preventDefault();

    // Simulate order processing
    setTimeout(() => {
        cart = [];
        updateCart();
        closeCheckout();
        showMessage('Order placed successfully! Thank you for your purchase.', 'success');
    }, 1000);

    showMessage('Processing your order...', 'success');
}

// Utility Functions
function showMessage(message, type) {
    // Remove any existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    // Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Additional Features
function addToWishlist(productId) {
    // Wishlist functionality can be implemented here
    showMessage('Added to wishlist!', 'success');
}

function shareProduct(productId) {
    // Product sharing functionality
    if (navigator.share) {
        const product = products.find(p => p.id === productId);
        navigator.share({
            title: product.name,
            text: product.description,
            url: window.location.href
        });
    } else {
        showMessage('Sharing not supported on this device', 'error');
    }
}

// Initialize cart persistence
window.addEventListener('beforeunload', function() {
    localStorage.setItem('cart', JSON.stringify(cart));
});

// Performance optimization - Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading on page load
document.addEventListener('DOMContentLoaded', lazyLoadImages);