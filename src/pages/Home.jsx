import React from "react";
import TopNav from "./../components/home/topNav/Index";
import Header from "./../components/home/header/Index";
import MiddleNav from "./../components/home/MiddleNav/Index";
import BottomNav from "./../components/home/BottomNav/Index";
import Banner from "./../components/home/Banner/Index";
import Features from './../components/home/Features/Index';
import Category from './../components/home/category/Index';
import ProductVariant from './../components/home/ProductVariant/Index';
import BannerTwo from './../components/home/bannertwo/BannerTwo';
import BestProducts from './../components/home/bestPoduct/Index';

const Home = () => {
  return (
    <>
      <Banner />
      <Features/>
      <Category/>
      <ProductVariant/>
      <BannerTwo/>
      <BestProducts/>
    </>
  );
};

export default Home;
