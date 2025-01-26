const left = document.querySelector('.left');
const right = document.querySelector('.right');
const SLIDER = document.querySelector('.SLIDER');
const images = document.querySelectorAll('.image');

let slideNumber = 1;
const length = images.length;

const nextSlide = ()=>{
SLIDER.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++; 
};
const prevSlide = ()=>{
    SLIDER.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
        slideNumber--; 
    };
const getFirstSlide = ()=>{
    SLIDER.style.transform = `translateX(0px)`; slideNumber = 1;
    };
const getLastSlide = ()=>{
        SLIDER.style.transform = `translateX(-${(length-1)*800}px)`;
        slideNumber = length;
        };

right.addEventListener('click',()=>{
    slideNumber < length ? nextSlide() : getFirstSlide();
    });
left.addEventListener('click',()=>{
        slideNumber > 1 ? prevSlide() : getLastSlide();
        });