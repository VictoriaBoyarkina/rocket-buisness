// Slider
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.promo__container'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const renderPages = () => {
    const activePage = document.querySelector(".slider-active-page");
    activePage.textContent = slideIndex + 1;
    const pagesNumber = document.querySelector(".slider-pages-number");
    pagesNumber.textContent = `/${slideCount}`;
}

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
  renderPages();
}

window.addEventListener('load', () => {
  slide();
});

// Drop-down menu
class Menu {
    constructor(menu) {
        this.menu = menu;
        this.closed = true;
        this.dropDown = document.querySelector('.drop-down');
        this.init();
    }

    init() {
        this.menu.addEventListener('click', () => {
            this.closed = !this.closed;
            this.toggle()
        });
        this.toggle();
    }

    toggle() {
        if (this.closed) {
            this.menu.style.backgroundImage = 'url("./img/burger.png")';
            this.dropDown.style.display = 'none';
        } else {
            this.menu.style.backgroundImage = 'url("./img/cross.png")';
            this.dropDown.style.display = 'block';
        }
    }
}

// Pop-up form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.querySelector('.open-button').addEventListener('click', openForm);
