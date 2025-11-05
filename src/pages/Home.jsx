import React from 'react'
import TopNav from './../components/home/topNav/Index';
import Header from './../components/home/header/Index';
import MiddleNav from './../components/home/MiddleNav/Index';
import Product from './../components/Product';

const Home = () => {
  return (
     <>
       <Header/>
       <TopNav/>
       <MiddleNav/>
       <Product/>
     </>
  )
}

export default Home