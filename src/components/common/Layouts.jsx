import React from "react";
import { Outlet } from "react-router";
import Header from './../home/header/Index';
import TopNav from './../home/topNav/Index';
import MiddleNav from './../home/MiddleNav/Index';
import BottomNav from './../home/BottomNav/Index';

const Layouts = () => {
  return (
    <div>
      <div>
        <Header />
        <TopNav />
        <MiddleNav />
        <BottomNav/>
      </div>
      <Outlet />
      <div>
          <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layouts;
