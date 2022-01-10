var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.select');
let currentSlide = 1;

const manualNav = (manual) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide=i;
    })
})
