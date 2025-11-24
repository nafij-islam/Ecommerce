import React from "react";
import Container from "./../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";
import { useCategory, useProduct } from "./../../../hooks/useCategory";
import Product from "./../../common/Product";

const ProductVariant = () => {
  const { isPending, error, data } = useCategory();
  const productdata = useProduct();



  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-[28%72%]">
          <div className="">
            <picture>
              <a href="#">
                {" "}
                <img
                  className="w-full"
                  src={imgProvider.ProductVariantbanner}
                  alt={imgProvider.ProductVariantbanner}
                />
              </a>
            </picture>
          </div>
          <div className="pl-2">
            <div className="flex justify-between items-center">
              <h2>Featured Products</h2>
              <div className="flex gap-x-4">
                <h2 className="cursor-pointer body_sm_600">All Product</h2>
                {data?.data?.slice(0, 5).map((item) => (
                  <div>
                    <h2 className="cursor-pointer body_sm_600">{item}</h2>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className=" p-5 grid grid-cols-4 gap-4">
              {productdata?.data?.data?.products.slice(0,8)?.map((item) => (
                <Product productInfo={{item ,isPending, error}} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductVariant;
