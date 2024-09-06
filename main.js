const slidesContainer = document.querySelector('.slides-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlides = 0;
const totalSlides = 5;

// Function to show active slide
function showActiveSlide(slideIndex) {
    const slides = document.querySelectorAll('.slides-container img');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    // Update navigation dots
    updateNavigationDots(slideIndex);
}

function updateNavigationDots(activeDot) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        dot.style.backgroundColor = '#494848';
    });
    dots[activeDot].classList.add('active');
    dots[activeDot].style.backgroundColor = '#837171';
}

function currentSlide(n) {
    showActiveSlide(n);
    currentSlides = n;
}

// Initialize carousel
showActiveSlide(currentSlides);

// Event listeners
prevBtn.addEventListener('click', () => {
    currentSlides = (currentSlides - 1 + totalSlides) % totalSlides;
    showActiveSlide(currentSlides);
});

nextBtn.addEventListener('click', () => {
    currentSlides = (currentSlides + 1) % totalSlides;
    showActiveSlide(currentSlides);
});

// Auto-play functionality
setInterval(() => {
    currentSlides = (currentSlides+ 1) % totalSlides;
    showActiveSlide(currentSlides);
}, 5000);

