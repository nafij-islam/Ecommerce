import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="p-5 border border-gray-50 max-w-[234px] rounded animate-pulse">
      <div className="flex flex-col items-start justify-start gap-y-4">

        {/* Tag */}
        <div className="w-16 h-6 bg-gray-200 rounded"></div>

        {/* Image */}
        <div className="w-[202px] h-[172px] bg-gray-200 rounded"></div>

        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="w-24 h-4 bg-gray-200 rounded"></div>
          <div className="w-8 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Title */}
        <div className="w-full h-5 bg-gray-200 rounded"></div>

        {/* Price */}
        <div className="flex items-center gap-3 w-full">
          <div className="w-10 h-5 bg-gray-200 rounded"></div>
          <div className="w-12 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
