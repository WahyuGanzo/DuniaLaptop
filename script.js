let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk tombol next/previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi untuk kontrol gambar thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fungsi utama untuk menampilkan slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Fungsi untuk auto-ganti gambar setiap 3 detik
function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoShowSlides, 3000); // Ganti gambar setiap 3 detik
}

// Mulai slideshow otomatis
autoShowSlides();
