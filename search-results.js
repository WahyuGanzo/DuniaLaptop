// Contoh data produk
const products = [
    {
        id: 1,
        name: "asus",
        price: 15000000,
        image: "path-to-laptop1.jpg",
        whatsapp: "628123456789"
    },
    {
        id: 2,
        name: "lenovo",
        price: 10000000,
        image: "path-to-pc1.jpg",
        whatsapp: "628123456789"
    },
    // Tambahkan lebih banyak produk sesuai kebutuhan
];

// Fungsi untuk mendapatkan parameter query dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Menampilkan hasil pencarian di halaman hasil
function displaySearchResults() {
    const query = getQueryParam('query'); // Ambil kata kunci dari URL
    const searchQuery = document.getElementById('search-query');
    const productList = document.getElementById('product-list');
    
    if (query) {
        searchQuery.textContent = query; // Menampilkan kata kunci di judul
        const results = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        
        if (results.length > 0) {
            productList.innerHTML = ''; // Kosongkan daftar produk
            results.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-item');
                
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Harga: Rp${product.price.toLocaleString()}</p>
                    <a href="https://wa.me/${product.whatsapp}" target="_blank">Hubungi via WhatsApp</a>
                `;
                productList.appendChild(productDiv);
            });
        } else {
            productList.innerHTML = '<p>Tidak ada produk yang sesuai dengan pencarian Anda.</p>';
        }
    } else {
        productList.innerHTML = '<p>Tidak ada kata kunci pencarian yang diberikan.</p>';
    }
}

// Panggil fungsi untuk menampilkan hasil pencarian saat halaman dimuat
document.addEventListener('DOMContentLoaded', displaySearchResults);

// Fungsi search yang sama seperti di halaman utama
function searchProduct(event) {
    event.preventDefault(); // Mencegah form submit secara default
    const query = document.getElementById('search').value.trim(); // Ambil nilai input

    if (query) {
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`; 
    } else {
        alert('Masukkan kata kunci pencarian!'); // Validasi input kosong
    }
}
