const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.card');

let counter = 0;
const interval = 3000; // 3 segundos

function slideNext() {
  counter++;
  if (counter >= carouselItems.length - 4) {
    counter = 0;
  }
  carouselSlide.style.transform = `translateX(-${counter * 20}%)`;
}

function startCarousel() {
  setInterval(slideNext, interval);
}

startCarousel();

const carouselSlide2 = document.querySelector('.carousel-slide2');
const carouselItems2 = document.querySelectorAll('.card2');

let counter2 = 0;
const interval2 = 3000; // 3 segundos

function slideNext2() {
  counter2++;
  if (counter2 >= carouselItems2.length - 4) {
    counter2 = 0;
  }
  carouselSlide2.style.transform = `translateX(-${counter * 20}%)`;
}

function startCarousel2() {
  setInterval(slideNext2, interval);
}

startCarousel2();

function abreSobre(){
  alert("Feito por Gustavo Penido e Lucas Silva.");
}
