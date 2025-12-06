import React, { useState } from "react";
import Container from "./../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";
import {
  useCategory,
  useProduct,
  usegetproductbycategory,
} from "./../../../hooks/useCategory";
import Product from "./../../common/Product";
import ProductSkeleton from "./../../common/ProductSkeleton";

const ProductVariant = () => {
  const [selectedCategory, setSelectedCategory] = useState("furniture");

  const { isPending: isCategoryLoading, error: categoryError, data: categoryList } = useCategory();
  const { isPending: isAllProductLoading, error: allProductError, data: allProductData } = useProduct();
  const { isPending: isCategoryProductLoading, error: categoryProductError, data: categoryProducts } = usegetproductbycategory(selectedCategory);

  const handleCategoryMenu = (category) => {
    setSelectedCategory(category);
  };


  const productsToShow = selectedCategory === "all"? allProductData?.data?.products: categoryProducts?.data?.products;

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
   
          <div className="w-full lg:w-[28%]">
            <picture>
              <img
                src={imgProvider.ProductVariantbanner}
                alt="Variant Banner"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </picture>
          </div>

  
          <div className="w-full lg:w-[72%]">
  
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 sm:mb-0">
                Featured Products
              </h2>

              <div className="flex flex-wrap gap-2 sm:gap-4 bg-white shadow-sm px-4 py-2 rounded-full">
                <h2
                  className={`cursor-pointer px-3 py-1 rounded-full ${
                    selectedCategory === "all"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Product
                </h2>

                {!isCategoryLoading &&
                  categoryList?.data?.slice(0, 5).map((category) => (
                    <h2
                      key={category}
                      className={`cursor-pointer px-3 py-1 rounded-full capitalize transition-colors ${
                        selectedCategory === category
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                      onClick={() => handleCategoryMenu(category)}
                    >
                      {category}
                    </h2>
                  ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  
              {(isAllProductLoading || isCategoryProductLoading) &&
                Array(8)
                  .fill(0)
                  .map((_, idx) => <ProductSkeleton key={idx} />)}

              {(allProductError || categoryProductError) && (
                <p className="text-red-500 col-span-full text-center">
                  Something went wrong loading products.
                </p>
              )}

            
              {productsToShow?.slice(0,8)?.map((item) => (
                  <Product
                    key={item.id}
                    productInfo={{ item, isPending: false, error: null }}
                  />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductVariant;
