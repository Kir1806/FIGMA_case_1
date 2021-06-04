import Swiper, {Navigation, Pagination} from 'swiper';
//import Swiper from 'swiper';
Swiper.use([Navigation, Pagination]);

const Slider = new Swiper ('.swiper-container', {
//   autoHeight: true,
  loop: true,
  loopedSlides: 3,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView:  'auto',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },  
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
});

export {Slider};