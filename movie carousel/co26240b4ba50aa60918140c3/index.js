const slides = document.getElementsByClassName('carousel-item');
const dots = document.getElementsByClassName('dots')
let slidePosition = 0
const arrLength = slides.length

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function classSwitch() {
    for (let slide of slides) {
        slide.classList.add('carousel-item-hidden');
        slide.classList.remove('carousel-item-visible');
    }
    for (let dot of dots) {
        dot.classList.remove('dots-active');
    }
}

function moveToNextSlide() {
    classSwitch()
    if(slidePosition === arrLength - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;  
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    dots[slidePosition].classList.add('dots-active');
}

function moveToPrevSlide() {
    classSwitch()
    if(slidePosition === 0) {
        slidePosition = arrLength - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add('carousel-item-visible');
    dots[slidePosition].classList.add('dots-active');
}