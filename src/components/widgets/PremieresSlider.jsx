import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PremieresSlider = ({ items }) => (
  <Swiper
    a11y={{ prevSlideMessage: 'Previous slide of premieres', nextSlideMessage: 'Next slide of premieres' }}
    aria-label="Premieres slider"
    breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 32 }, 1024: { slidesPerView: 4, spaceBetween: 32 }, 1280: { slidesPerView: 5, spaceBetween: 32 } }}
    className="swiper--custom"
    modules={[A11y, Navigation]}
    navigation
    slidesPerView={2}
    spaceBetween={28}
  >
    {items.map(element => {
      const { id, title, poster } = element;
      return (
        <SwiperSlide key={id}>
          <a href="#" className="link d-flex f-direction-column g-2">
            <img
              src={poster}
              alt={title}
              width="180"
              height="320"
              loading="lazy"
              className="img img--poster"
            />
            <h3 className="title title--2xs t-align-center">{title}</h3>
          </a>
        </SwiperSlide>
      )
    })}
  </Swiper>
);

export default PremieresSlider;