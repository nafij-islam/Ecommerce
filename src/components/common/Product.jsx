import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <div className="grid grid-cols-4">
      {productInfo?.data?.data?.products?.map((item) => (
        <div className="p-5 border border-gray-50 max-w-[234px] rounded">
          <div className="flex flex-col items-start justify-start gap-y-4 ">
            <span className="tag px-4 py-2 bg-danger-500">Best</span>
            <img
              src={item.images[0]}
              alt=""
              className="w-[202px] h-[172px] object-cover"
            />
            <div className="flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="pl-3">($500)</span>
            </div>
            <h2 className="w-full truncate">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 ">
              <del>$1600</del>
              <h3>${item.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
