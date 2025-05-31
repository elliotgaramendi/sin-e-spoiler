import { A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = ({ data }) => {
  return (
    <Swiper
      a11y={{ prevSlideMessage: 'Previous slide of hero', nextSlideMessage: 'Next slide of hero' }}
      aria-label="Hero slider"
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      breakpoints={{ 768: { spaceBetween: 32 } }}
      className="swiper--custom"
      coverflowEffect={{ rotate: 87.5 }}
      effect={'coverflow'}
      keyboard={{ enabled: true }}
      loop
      modules={[A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={28}
      speed={500}
      tag='section'
    >
      {
        data.map(element => {
          const { id, title, description, backdrop } = element;
          return (
            <SwiperSlide key={id}>
              <article className="hero">
                <img src={backdrop} alt={title} width="1024" height="576" loading="lazy" className="img img--background" />
                <div className="container d-flex a-items-end j-content-start">
                  <div className="d-flex f-direction-column g-8">
                    <div>
                      <h2 className="hero__title">{title}</h2>
                      <p className="hero__paragraph">
                        {description.slice(0, 64)}...
                      </p>
                    </div>
                    <div className="d-flex f-wrap-wrap g-4">
                      <a href="#now-showing" className="button button--primary interactive interactive--xl">
                        🎬 Book Now
                      </a>
                      <a className="button button--outline-primary interactive interactive--xl">
                        📽️ Watch Trailer
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default Hero;