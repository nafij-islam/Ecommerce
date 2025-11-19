import React from "react";
import Container from "./../../common/Container";
import useCategory from "./../../../hooks/useCategory";
import SkeletonCard from "./../../common/Skeleton";

const Index = () => {
  const { isPending, error, data } = useCategory();
  if (isPending) {
    return (
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data?.data?.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                alt="Card"
              />

              <div className="p-5">
                <h5 className="text-xl font-semibold text-gray-800 mb-3">
                  {item}
                </h5>

                <p className="text-gray-600 text-sm mb-4">
                  This is a simple and clean Tailwind CSS card.
                </p>

                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Index;
