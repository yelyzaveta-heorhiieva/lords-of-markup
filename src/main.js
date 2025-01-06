import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const openMenu = document.querySelector('.burger-btn');
const closeMenu = document.querySelector('.mobile-btn');
const menu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list-header');
const links = document.querySelectorAll('.nav-link-header');
const catalogBtn = document.querySelector('.catalog-btn');
const catalogItem = document.querySelectorAll('.last')



openMenu.addEventListener('click', () => menu.classList.add('is-open'));
closeMenu.addEventListener('click', () => menu.classList.remove('is-open'));

navList.addEventListener('click', handleClick);
menu.addEventListener('click', handleClick);

function handleClick(event) {
    if (event.target.classList.contains('nav-link-header')) {
        [...links].forEach(link => link.classList.remove('current'));
        event.target.classList.add('current');
    }
}

catalogBtn.addEventListener('click', showMore)

function showMore() {
    [...catalogItem].forEach(item => {
        item.classList.toggle('hide')
        if (item.classList.contains('hide')) {
           catalogBtn.textContent = "Show more"; 
        } else {
          catalogBtn.textContent = "Hide";  
        }
    })     
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  breakpoints: {
    320: {
          slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 16,
    },
   1280: {
       slidesPerView: 3,
       spaceBetween: 20,
    }
  },

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  mousewheel: {
      invert: true,
  },
  
   keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});