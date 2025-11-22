import React from "react";
import TopNav from "./../components/home/topNav/Index";
import Header from "./../components/home/header/Index";
import MiddleNav from "./../components/home/MiddleNav/Index";
import BottomNav from "./../components/home/BottomNav/Index";
import Banner from "./../components/home/Banner/Index";
import Features from './../components/home/Features/Index';
import Category from './../components/home/category/Index';
import ProductVariant from './../components/home/ProductVariant/Index';

const Home = () => {
  return (
    <>
      <Header />
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <Banner />
      <Features/>
      <Category/>
      <ProductVariant/>
    </>
  );
};

export default Home;
