import React from "react";
import Container from "./../../common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards, EffectCoverflow } from "swiper/modules";
import { imgProvider } from "../../../helpers/imgProvider";

const Banner = () => {
  return (
    <section className="h-[55vh] py-5">
      <Container className="h-full   ">
        <div className="flex gap-x-5 justify-between h-full">
          <div className="w-[70%] h-full bg-teal-300">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, EffectCards]}
              effect={"cards"}
              grabCursor={true}
              className="mySwiper"
            >
              {[...new Array(6)].map((_, index) => (
                <SwiperSlide key={index} style={{ height: "55vh" }}>
                  <picture>
                    <img
                      src={imgProvider.bannerimg}
                      alt="Banner"
                      className="w-full h-full object-contain"
                    />
                  </picture>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-[30%] gap-y-5 flex flex-col bg-teal-300">
            <div className="h-[50%] w-full ">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgProvider.bannerimgtwo} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="h-[50%] w-full">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={imgProvider.bannerimgthree} />
                </SwiperSlide>
                   <SwiperSlide>
                  <img src={imgProvider.bannerimgthree} />
                </SwiperSlide>
                   <SwiperSlide>
                  <img src={imgProvider.bannerimgthree} />
                </SwiperSlide>
                   <SwiperSlide>
                  <img src={imgProvider.bannerimgthree} />
                </SwiperSlide>
                   <SwiperSlide>
                  <img src={imgProvider.bannerimgthree} />
                </SwiperSlide>


               
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
