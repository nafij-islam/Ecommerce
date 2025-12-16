import React from "react";
import Container from "./../../common/Container";

const BestProducts = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid items-center justify-between gap-4 grid-cols-4">
          {[...new Array(4)].map((_, index) => (
            <div>
              <h2 className="pb-4">FLASH SALE TODAY</h2>
              <div className="grid border p-4 border-gray-200 grid-cols-[30%70%]">
                <img
                  src="https://cdn.wallpapersafari.com/40/52/lHEsPO.jpg"
                  alt=""
                  className="w-20 h-20 object-cover rounded "
                />
                <div>
                  <h3 className="body_sm_400 text-gray-900">
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In
                    Ear...
                  </h3>
                  <p className="text-secondary-500 body_sm_600">$1,500</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BestProducts;
