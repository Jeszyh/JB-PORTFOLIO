import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';

// Activer les modules
Swiper.use([Navigation, Pagination, Scrollbar]);

export default class Carousel {
  constructor(element) {
    this.element = element;

    this.defaultOptions = {
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'my-button-disabled',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    };

    this.init();
  }

  init() {
    let options = this.defaultOptions;

    if (this.element.dataset.carousel == 'split') {
      options = {
        ...this.defaultOptions,
        breakpoints: { 768: { slidesPerView: 2 } },
      };
    }

    if (this.element.dataset.carousel == 'scroll') {
      options = {
        ...this.defaultOptions,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          hide: false,
        },
        navigation: false,
        pagination: false,
      };
    }

    new Swiper(this.element, options);
  }
}
