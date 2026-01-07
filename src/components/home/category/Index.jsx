import Container from "./../../common/Container";
import {useCategory} from "./../../../hooks/useCategory";
import SkeletonCard from "./../../common/Skeleton";
import CategoryItem from "./../../common/CategoryItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  const { isPending, error, data } = useCategory();

  if (isPending) {
    return (
      <div>
        <Container>
          <div className="grid grid-cols-6 gap-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </Container>
      </div>
    );
  }

  
  return (
    <section className="bg-gray-100">
      <Container>
        {/* GRID সরানো হয়েছে */}
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation,Autoplay]}
          className="mySwiper w-full"
          slidesPerView={6}
          spaceBetween={10}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        >
          {data?.data?.map((item, index) => (
            <div key={index}>
              <SwiperSlide>
                <CategoryItem item={item} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Index;
