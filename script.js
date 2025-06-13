// Product Data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16-inch",
        category: "electronics",
        price: 2399.00,
        originalPrice: 2599.00,
        description: "Powerful laptop with M3 Pro chip, 16GB RAM, 512GB SSD. Perfect for professional work and creative projects.",
        image: "images/electronics/macbook-pro.jpg",
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
        image: "images/electronics/iphone-15-pro.jpg",
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
        image: "images/electronics/wireless-headphones.jpg",
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
        image: "images/electronics/smart-watch.jpg",
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
        image: "images/clothing/designer-tshirt.jpg",
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
        image: "images/clothing/denim-jeans.jpg",
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
        image: "images/clothing/winter-jacket.jpg",
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
        image: "images/clothing/running-shoes.jpg",
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
        image: "images/home/coffee-maker.jpg",
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
        image: "images/home/air-purifier.jpg",
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
        image: "images/home/garden-tools.jpg",
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
        image: "images/home/smart-thermostat.jpg",
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
        image: "images/sports/basketball.jpg",
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
        image: "images/sports/yoga-mat.jpg",
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
        image: "images/sports/dumbbells-set.jpg",
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
        image: "images/sports/tennis-racket.jpg",
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
        image: "images/electronics/4k-monitor.jpg",
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
        image: "images/electronics/wireless-mouse.jpg",
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
        image: "images/electronics/bluetooth-speaker.jpg",
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
        image: "images/clothing/casual-dress.jpg",
        rating: 4.4,
        reviews: 167,
        inStock: true
    }
];

// State Management
let cart = [];
let currentUser = null;
let searchQuery = '';

// Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Auth forms
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signupForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }

    // Checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // Update the cart button click handler
    document.getElementById('cartBtn').addEventListener('click', () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            // Show login modal first
            document.getElementById('authModal').style.display = 'block';
            switchTab('login');
            showMessage('Please login to view your cart', 'info');
            return;
        }
        toggleCart();
    });
}

// Product Rendering
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found.</div>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const discount = product.originalPrice ? 
        Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <div class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</div>
                <span class="rating-count">(${product.reviews} reviews)</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;
    
    return card;
}

// Filter Functions
function filterProducts(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.textContent.toLowerCase() === category || (category === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    let filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    // Apply search filter if exists
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    renderProducts(filteredProducts);
}

function handleSearch(event) {
    searchQuery = event.target.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active');
    const category = activeFilter ? activeFilter.textContent.toLowerCase() : 'all';
    filterProducts(category);
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

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
    showMessage('Product added to cart', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showMessage('Product removed from cart', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        updateCart();
    }
}

function updateCart() {
    renderCartItems();
    updateCartCount();
    calculateTotals();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    cartItems.innerHTML = cart.length ? cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('') : '<div class="empty-cart">Your cart is empty</div>';
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// UI Functions
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

function toggleAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        // Reset forms
        document.getElementById('loginForm').reset();
        document.getElementById('signupForm').reset();
        // Show login form by default
        switchTab('login');
    }
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function switchTab(tab) {
    // Get all forms and tab buttons
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const adminForm = document.getElementById('adminForm');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Hide all forms and remove active class from all tabs
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
    adminForm.classList.add('hidden');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected form and activate tab
    switch (tab) {
        case 'login':
            loginForm.classList.remove('hidden');
            document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
            break;
        case 'signup':
            signupForm.classList.remove('hidden');
            document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
            break;
        case 'admin':
            adminForm.classList.remove('hidden');
            document.querySelector('.tab-btn:nth-child(3)').classList.add('active');
            break;
    }
}

// Auth Functions
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check for default admin account
    if (email === 'admin@example.com' && password === 'admin123') {
        const adminUser = {
            id: 'admin1',
            name: 'Admin User',
            email: email,
            role: 'admin'
        };
        localStorage.setItem('adminUser', JSON.stringify(adminUser));
        window.location.href = 'admin.html';
        return;
    }

    // Check for regular users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        if (user.role === 'admin') {
            localStorage.setItem('adminUser', JSON.stringify(user));
            window.location.href = 'admin.html';
        } else {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showMessage('Login successful!', 'success');
            updateAuthUI();
            closeAuthModal();
        }
    } else {
        showMessage('Invalid credentials', 'error');
    }
}

function handleSignUp(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        showMessage('Email already registered', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        role: email.endsWith('@admin.com') ? 'admin' : 'user' // Set role based on email
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    showMessage('Registration successful! Please login.', 'success');
    switchTab('login');
}

function updateAuthButton() {
    const authBtn = document.querySelector('.auth-btn');
    if (authBtn) {
        if (currentUser) {
            authBtn.textContent = currentUser.name || currentUser.email;
            authBtn.onclick = logout;
        } else {
            authBtn.textContent = 'Sign In';
            authBtn.onclick = toggleAuthModal;
        }
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('authTabs').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    showMessage('Logged out successfully', 'success');
}

// Checkout Functions
function proceedToCheckout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // Show login modal first
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('authModal').style.display = 'block';
        switchTab('login');
        showMessage('Please login to continue checkout', 'info');
        return;
    }

    if (cart.length === 0) {
        showMessage('Your cart is empty', 'error');
        return;
    }

    // Show checkout modal
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('checkoutModal').style.display = 'block';
    
    // Update checkout summary
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const summaryItems = document.getElementById('checkoutItems');
    const summaryTotal = document.getElementById('checkoutTotal');
    
    summaryItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summaryTotal.textContent = `$${total.toFixed(2)}`;
}

function handleCheckout(e) {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        showMessage('Please login to checkout', 'error');
        return;
    }

    if (cart.length === 0) {
        showMessage('Your cart is empty', 'error');
        return;
    }

    // Create new order
    const newOrder = {
        id: Date.now().toString(),
        userId: currentUser.id,
        customerName: currentUser.name,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            category: item.category
        })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString(),
        status: 'pending'
    };

    // Get existing orders
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Update product stock
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            product.stock -= item.quantity;
        }
    });
    localStorage.setItem('products', JSON.stringify(products));

    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();

    // Show success message
    showMessage('Order placed successfully!', 'success');

    // Close modal
    setTimeout(() => {
        document.getElementById('checkoutModal').style.display = 'none';
    }, 1500);
}

// Utility Functions
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    updateAuthButton();
});