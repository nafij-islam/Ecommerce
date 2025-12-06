import React from "react";
import Container from "./../../common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards, EffectCoverflow } from "swiper/modules";
import { imgProvider } from "../../../helpers/imgProvider";

const Banner = () => {
  return (
    <section className="py-5">
      <Container className="h-full">
        <div className="flex flex-col lg:flex-row gap-5 h-full">
          
          {/* LEFT BIG SLIDER */}
          <div className="w-full lg:w-[70%] h-[250px] sm:h-[350px] lg:h-[55vh]">
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination, EffectCards]}
              effect="cards"
              grabCursor={true}
              className="mySwiper h-full"
            >
              {[...new Array(6)].map((_, index) => (
                <SwiperSlide key={index} className="h-full">
                  <picture>
                    <img
                      src={imgProvider.bannerimg}
                      alt="Banner"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT TWO SMALL SLIDERS */}
          <div className="w-full lg:w-[30%] flex flex-col gap-5">
            
            {/* Top Slider */}
            <div className="h-[180px] sm:h-[220px] lg:h-[26vh] w-full">
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper h-full"
              >
                {[...new Array(6)].map((_, i) => (
                  <SwiperSlide key={i} className="h-full">
                    <img
                      src={imgProvider.bannerimgtwo}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Bottom Slider */}
            <div className="h-[180px] sm:h-[220px] lg:h-[26vh] w-full">
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper h-full"
              >
                {[...new Array(5)].map((_, i) => (
                  <SwiperSlide key={i} className="h-full">
                    <img
                      src={imgProvider.bannerimgthree}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
