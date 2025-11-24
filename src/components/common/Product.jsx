import React from "react";
import { FaStar } from "react-icons/fa";
import Star from './Star';
import SkeletonCard from './Skeleton';
import Container from './Container';
import ProductSkeleton from './ProductSkeleton';

const Product = ({ productInfo }) => {
  const {item ,isPending, error} = productInfo;
   if (isPending) {
    return <ProductSkeleton/>
   }

  return (
    <div className="">
      
        <div className="p-5 border border-gray-50 max-w-[234px] rounded">
          <div className="flex flex-col items-start justify-start gap-y-4 ">
            <span className="tag px-4 py-2 bg-danger-500">Best</span>
            <img
              src={item.thumbnail}
              alt=""
              className="w-[202px] h-[172px] object-cover"
            />
            <div className="flex items-center">
              <Star rating={item.rating}/>
              <span className="pl-3">({item.reviews?.length})</span>
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
     
    </div>
  );
};

export default Product;
