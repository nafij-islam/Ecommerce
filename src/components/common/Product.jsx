import React from "react";
import Star from "./Star";
import ProductSkeleton from "./ProductSkeleton";

const Product = ({ productInfo }) => {
  const { item, isPending, error } = productInfo;

  if (isPending) return <ProductSkeleton />;
  if (error) return <div className="text-red-500">Something went wrong.</div>;

  return (
    <div className="group cursor-pointer">
      <div className="relative p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          Best
        </span>

        <div className="w-full h-[240px] flex justify-center items-center overflow-hidden rounded-lg bg-gray-50">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex items-center gap-x-2 mt-3">
          <Star rating={item.rating} />
          <span className="text-gray-600 text-sm">
            ({item.reviews?.length || 0})
          </span>
        </div>

        <h2 className="mt-2 font-semibold text-gray-800 text-sm truncate group-hover:text-blue-600 transition-colors">
          {item.title}
        </h2>

        <div className="flex items-center gap-x-3 mt-2">
          <del className="text-gray-400 text-sm">$1600</del>
          <h3 className="text-lg font-bold text-blue-600">${item.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
