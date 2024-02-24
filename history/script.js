let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-img');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// Auto change slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const shortText = this.parentNode.querySelector('.short-text');
            const longText = this.parentNode.querySelector('.long-text');
            const readMore = this.parentNode.querySelector('.read-more');
            const readLess = this.parentNode.querySelector('.read-less');
            const image = this.parentNode.querySelector('.photoC');
            shortText.style.display = 'none';
            longText.style.display = 'block';
            readMore.style.display = 'none';
            image.style.display = 'none';

        });
    });
});
