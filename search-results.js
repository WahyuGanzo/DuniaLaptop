const allProducts = [
    {name: 'Asus Laptop A', description: 'Laptop Asus dengan performa tinggi', id: 1, brand: 'Asus', image: 'asset/asus-laptop.jpg', price: 'Rp 10.000.000'},
    {name: 'Asus Laptop B', description: 'Laptop Asus untuk keperluan bisnis', id: 2, brand: 'Asus', image: 'asset/asus-laptop-b.jpg', price: 'Rp 12.500.000'},
    {name: 'Acer Laptop C', description: 'Laptop Acer gaming terbaik', id: 3, brand: 'Acer', image: 'asset/acer-laptop.jpg', price: 'Rp 9.500.000'},
    {name: 'Dell Inspiron', description: 'Laptop Dell untuk keperluan sehari-hari', id: 4, brand: 'Dell', image: 'asset/dell-laptop.jpg', price: 'Rp 8.000.000'},
    {name: 'Lenovo ThinkPad', description: 'Laptop Lenovo dengan ketahanan tinggi', id: 5, brand: 'Lenovo', image: 'asset/lenovo-laptop.jpg', price: 'Rp 11.000.000'}
];

// Fungsi untuk membuat card produk
function displayProducts(products) {
    const container = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Menambahkan gambar, nama, deskripsi, harga ke dalam card
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            </div>
        `;
        
        // Menambahkan event onclick untuk mengarahkan ke halaman spesifik merk
        productCard.onclick = function() {
            window.location.href = `${product.brand.toLowerCase()}.html`; // Mengarahkan ke halaman sesuai merk
        };

        container.appendChild(productCard);
    });
}

// Memanggil fungsi untuk menampilkan produk
displayProducts(allProducts);
