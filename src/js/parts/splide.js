import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const instGuaranteeSlider = () => {
  const slider = document.querySelector('.reviews__splide');

  if (slider) {
    const options = {
      type: 'slide',
      speed: 1000,
      updateOnMove: true,
      pagination: false,
      perPage: 3,
      perMove: 1,
      gap: '1.25rem',
      breakpoints: {
        960: {
          perPage: 2,
          speed: 700,
          pagination: true,
          gap: '1rem',
        },
        680: {
          perPage: 1,
          speed: 500,
        },
      },
    };

    new Splide(slider, options).mount();
  }
};

instGuaranteeSlider();
