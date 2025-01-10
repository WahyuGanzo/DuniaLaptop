// Contoh data produk
const products = [
    {
        id: 1,
        name: "ASUS VIVOBOOK GO 14 FLIP",
        price: 6895000,
        image: "asset/LAPTOP/ASUS/1.png",
        whatsapp: "6282325909390"
    },
    {
        id: 2,
        name: "ASUS VIVOBOOK GO 14",
        price: 5865000,
        image: "asset/LAPTOP/ASUS/3.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 3,
        name: "ASUS VIVOBOOK 14",
        price: 8195000,
        image: "asset/LAPTOP/ASUS/4.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 4,
        name: "LENOVO IP-3-CXID",
        price: 6145000,
        image: "asset/LAPTOP/LENOVO/10.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 5,
        name: "LENOVO IP 3-07ID (CI5)",
        price: 7895000,
        image: "asset/LAPTOP/LENOVO/11.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 6,
        name: "LENOVO IP 5-9PID",
        price: 13345000,
        image: "asset/LAPTOP/LENOVO/12.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 7,
        name: "Axioo Mybook Hype 1",
        price: 2400000,
        image: "asset/LAPTOP/AXIOO/4.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 8,
        name: "Axioo Mybook Hype 5 G12",
        price: 6400000,
        image: "asset/LAPTOP/AXIOO/5.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 9,
        name: "Axioo Mybook Hype JKT48",
        price: 5650000,
        image: "asset/LAPTOP/AXIOO/6.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 10,
        name: "MSI CYBORG 15-A13VEK.844",
        price: 15000000,
        image: "asset/LAPTOP/MSI/7.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 11,
        name: "MSI MODERN 14-C120MO.1058",
        price: 5600000,
        image: "asset/LAPTOP/MSI/8.png",
        whatsapp: "6282325909390    "
    },
    {
        id: 10,
        name: "MSI THIN 15-B13UCX.2410",
        price: 9850000,
        image: "asset/LAPTOP/MSI/9.png",
        whatsapp: "6282325909390    "
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
