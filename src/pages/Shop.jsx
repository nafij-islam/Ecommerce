import React from "react";
import { BreadCrumb } from "./../components/common/BreadCrumb";
import { useCategory } from "../hooks/useCategory";
import CategoryList from "./../components/shop/Left/category/CategoryList";
import CategoryitemList from "./../components/shop/Left/category/Categoryitem";
import Container from "./../components/common/Container";
import SkeletonCard from './../components/common/Skeleton';
import ErrorPage from './../components/common/Error';
import PriceRange from './../components/shop/Left/pricerange/PriceRange';

const Shop = () => {
  const { isPending:categoryListPending, error:categoryListError, data:categoryListData } = useCategory();
 
 if (categoryListPending) {
  return (
    <Container>
      <SkeletonCard/> 
    </Container>
  )
 }
  if (categoryListError) {
  return (
    <Container>
      <ErrorPage/>
    </Container>
  )
 }

  return (
    <section>
      <div>
        <BreadCrumb />
      </div>
      <Container>
        <div className="grid grid-cols-[30%70%]">
          <div className="">
           <div className="flex flex-col gap-y-5">
             <CategoryList>
              <CategoryitemList cItem={[...categoryListData.data]}/>
            </CategoryList>
            {/* price range */}
            <PriceRange/> 
            <div>
              <button className="py-1 border mr-4 px-5">Min Price</button>
              <button className="py-1 border px-5">Max Price</button>
            </div>
           </div>
          </div>
          <div className=""></div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
