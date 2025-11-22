import React from "react";
import Container from "./../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";
import {useCategory,useProduct  } from "./../../../hooks/useCategory";
import Product from './../../common/Product';

const ProductVariant = () => {
  const { isPending, error, data } = useCategory();
  const productdata = useProduct()

  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-[20%80%]">
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
          <div className="">
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
            <div className="p-5">
                <Product productInfo = {{...productdata}}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductVariant;
