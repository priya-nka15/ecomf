// Admin Panel JavaScript

// DOM Elements
const adminNav = document.querySelector('.admin-nav');
const tabContents = document.querySelectorAll('.tab-content');
const addProductModal = document.getElementById('addProductModal');
const addProductForm = document.getElementById('addProductForm');
const productsGrid = document.getElementById('productsGrid');
const ordersList = document.getElementById('ordersList');
const customersList = document.getElementById('customersList');
const timeRange = document.getElementById('timeRange');

// Charts
let salesChart, productsChart, categoryChart, demographicsChart, orderStatusChart, revenueChart;

// Initialize Admin Panel
document.addEventListener('DOMContentLoaded', () => {
    // Check admin authentication
    const adminUser = localStorage.getItem('adminUser');
    if (!adminUser) {
        window.location.href = 'index.html';
        return;
    }

    // Set admin name
    document.getElementById('adminName').textContent = JSON.parse(adminUser).name;

    // Initialize navigation
    initNavigation();
    
    // Initialize dashboard
    initDashboard();
    
    // Initialize products
    initProducts();
    
    // Initialize orders
    initOrders();
    
    // Initialize customers
    initCustomers();
    
    // Initialize analytics
    initAnalytics();
});

// Navigation
function initNavigation() {
    adminNav.addEventListener('click', (e) => {
        const navItem = e.target.closest('li');
        if (!navItem) return;

        // Update active state
        adminNav.querySelectorAll('li').forEach(item => item.classList.remove('active'));
        navItem.classList.add('active');

        // Show corresponding tab
        const tabId = navItem.dataset.tab;
        tabContents.forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === tabId) {
                tab.classList.add('active');
            }
        });
    });
}

// Dashboard
function initDashboard() {
    updateDashboardStats();
    initDashboardCharts();
}

function updateDashboardStats() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const customers = JSON.parse(localStorage.getItem('users')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Calculate total revenue
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

    // Update stats
    document.getElementById('totalOrders').textContent = orders.length;
    document.getElementById('totalCustomers').textContent = customers.length;
    document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
    document.getElementById('totalProducts').textContent = products.length;
}

function initDashboardCharts() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Sales Overview Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: getLast7Days(),
            datasets: [{
                label: 'Sales',
                data: getSalesData(orders),
                borderColor: '#4a90e2',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Top Products Chart
    const productsCtx = document.getElementById('productsChart').getContext('2d');
    productsChart = new Chart(productsCtx, {
        type: 'bar',
        data: {
            labels: getTopProducts(products, orders).map(p => p.name),
            datasets: [{
                label: 'Units Sold',
                data: getTopProducts(products, orders).map(p => p.sales),
                backgroundColor: '#4a90e2'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Products
function initProducts() {
    renderProducts();
    initAddProductForm();
}

function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <p>${product.category}</p>
                <div class="product-actions">
                    <button onclick="editProduct('${product.id}')" class="edit-btn">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button onclick="deleteProduct('${product.id}')" class="delete-btn">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function initAddProductForm() {
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newProduct = {
            id: Date.now().toString(),
            name: document.getElementById('productName').value,
            price: parseFloat(document.getElementById('productPrice').value),
            category: document.getElementById('productCategory').value,
            image: document.getElementById('productImage').value,
            description: document.getElementById('productDescription').value,
            rating: 0,
            reviews: 0,
            inStock: true
        };

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        addProductModal.style.display = 'none';
        addProductForm.reset();
        renderProducts();
        updateDashboardStats();
    });
}

function editProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Populate form with product data
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDescription').value = product.description;

    // Show modal
    addProductModal.style.display = 'block';
}

function deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this product?')) return;

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.filter(p => p.id !== productId);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    renderProducts();
    updateDashboardStats();
}

// Orders
function initOrders() {
    renderOrders();
}

function renderOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-info">
                <h3>Order #${order.id}</h3>
                <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
                <p>Total: $${order.total.toFixed(2)}</p>
                <p>Items: ${order.items.length}</p>
            </div>
            <div class="order-status">
                <select onchange="updateOrderStatus('${order.id}', this.value)" class="status-select">
                    <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
                    <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </div>
        </div>
    `).join('');
}

function updateOrderStatus(orderId, newStatus) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;

    orders[orderIndex].status = newStatus;
    localStorage.setItem('orders', JSON.stringify(orders));
    renderOrders();
    updateDashboardStats();
}

// Customers
function initCustomers() {
    renderCustomers();
}

function renderCustomers() {
    const customers = JSON.parse(localStorage.getItem('users')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    customersList.innerHTML = customers.map(customer => {
        const customerOrders = orders.filter(order => order.userId === customer.id);
        const totalSpent = customerOrders.reduce((sum, order) => sum + order.total, 0);

        return `
            <div class="customer-item">
                <div class="customer-info">
                    <h3>${customer.name}</h3>
                    <p>${customer.email}</p>
                    <p>Member since: ${new Date(customer.joinDate).toLocaleDateString()}</p>
                </div>
                <div class="customer-stats">
                    <p>Orders: ${customerOrders.length}</p>
                    <p>Total Spent: $${totalSpent.toFixed(2)}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Analytics
function initAnalytics() {
    initAnalyticsCharts();
    timeRange.addEventListener('change', updateAnalytics);
}

function initAnalyticsCharts() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Sales by Category Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    categoryChart = new Chart(categoryCtx, {
        type: 'pie',
        data: {
            labels: getCategoryLabels(products),
            datasets: [{
                data: getCategoryData(products, orders),
                backgroundColor: ['#4a90e2', '#2ecc71', '#e74c3c', '#f1c40f']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Customer Demographics Chart
    const demographicsCtx = document.getElementById('demographicsChart').getContext('2d');
    demographicsChart = new Chart(demographicsCtx, {
        type: 'doughnut',
        data: {
            labels: ['New', 'Returning'],
            datasets: [{
                data: getCustomerDemographics(orders),
                backgroundColor: ['#4a90e2', '#2ecc71']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Order Status Chart
    const orderStatusCtx = document.getElementById('orderStatusChart').getContext('2d');
    orderStatusChart = new Chart(orderStatusCtx, {
        type: 'bar',
        data: {
            labels: ['Pending', 'Processing', 'Shipped', 'Delivered'],
            datasets: [{
                label: 'Orders',
                data: getOrderStatusData(orders),
                backgroundColor: '#4a90e2'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Revenue Trends Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: getLast12Months(),
            datasets: [{
                label: 'Revenue',
                data: getRevenueData(orders),
                borderColor: '#4a90e2',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Utility Functions
function getLast7Days() {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    }
    return dates;
}

function getLast12Months() {
    const months = [];
    for (let i = 11; i >= 0; i--) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        months.push(date.toLocaleDateString('en-US', { month: 'short' }));
    }
    return months;
}

function getSalesData(orders) {
    const last7Days = getLast7Days();
    return last7Days.map(date => {
        return orders.filter(order => 
            new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) === date
        ).reduce((sum, order) => sum + order.total, 0);
    });
}

function getTopProducts(products, orders) {
    const productSales = products.map(product => {
        const sales = orders.reduce((sum, order) => {
            const orderItem = order.items.find(item => item.id === product.id);
            return sum + (orderItem ? orderItem.quantity : 0);
        }, 0);
        return { ...product, sales };
    });
    return productSales.sort((a, b) => b.sales - a.sales).slice(0, 5);
}

function getCategoryLabels(products) {
    return [...new Set(products.map(p => p.category))];
}

function getCategoryData(products, orders) {
    const categories = getCategoryLabels(products);
    return categories.map(category => {
        return orders.reduce((sum, order) => {
            const categoryItems = order.items.filter(item => 
                products.find(p => p.id === item.id)?.category === category
            );
            return sum + categoryItems.reduce((itemSum, item) => itemSum + item.quantity, 0);
        }, 0);
    });
}

function getCustomerDemographics(orders) {
    const customerOrders = {};
    orders.forEach(order => {
        customerOrders[order.userId] = (customerOrders[order.userId] || 0) + 1;
    });
    const newCustomers = Object.values(customerOrders).filter(count => count === 1).length;
    const returningCustomers = Object.values(customerOrders).filter(count => count > 1).length;
    return [newCustomers, returningCustomers];
}

function getOrderStatusData(orders) {
    const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    return statuses.map(status => 
        orders.filter(order => order.status === status).length
    );
}

function getRevenueData(orders) {
    const last12Months = getLast12Months();
    return last12Months.map(month => {
        return orders.filter(order => 
            new Date(order.date).toLocaleDateString('en-US', { month: 'short' }) === month
        ).reduce((sum, order) => sum + order.total, 0);
    });
}

function updateAnalytics() {
    const timeRange = document.getElementById('timeRange').value;
    // Update charts based on selected time range
    initAnalyticsCharts();
}

// Modal Functions
function showAddProductModal() {
    addProductModal.style.display = 'block';
}

function closeAddProductModal() {
    addProductModal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = (e) => {
    if (e.target === addProductModal) {
        closeAddProductModal();
    }
};

// Logout
function logout() {
    localStorage.removeItem('adminUser');
    window.location.href = 'index.html';
}
