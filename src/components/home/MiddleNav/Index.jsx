import React from "react";
import Container from "./../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";
import { icons } from "../../../helpers/iconProvider";
import { useState } from "react";
import Btn from "./../../common/Btn";

const MiddleNav = () => {
  const { IoIosSearch,Shoppingcart ,Favorite,Usericon } = icons;

 const utisIcons = [
    {
      id: 1,
      to: "/cart",
      icon: Shoppingcart,
    },
    {
      id: 2,
      to: "/wishlist",
      icon: Favorite,
    },
    {
      id: 2,
      to: "/user",
      icon: Usericon,
    },
  ];  

  const [searchiconshow, setsearchiconshow] = useState(true);
  // handle Typing
  const handleTyping = (event) => {
    if (event.target.value.length > 0) {
      setsearchiconshow(false);
    } else {
      setsearchiconshow(true);
    }
  };
  return (
    <section className="bg-secondary-700 py-5">
      <Container>
        <div className="flex items-center justify-between">
          <picture>
            <img src={imgProvider.MiddleLogo} alt="" />
          </picture>
          <div className="relative">
            <input
              type="search"
              id=""
              onChange={handleTyping}
              name=""
              className="bg-gray-00 placeholder:font-public_sans
              placeholder:body_sm_500 placeholder:text-gray-300
              rounded w-[700px] py-3 px-3 outline-none"
              placeholder="Search for anything..."
            />
            {searchiconshow == true ? (
              <span className="text-gray-900 absolute right-3 top-1/2 -translate-y-1/2">
                <IoIosSearch size={23} />
              </span>
            ) : null}
            {searchiconshow == false && (
               <div className="absolute right-11 top-1/2 -translate-y-1/2">
              <Btn className="bg-warning-500 rounded py-1">
                <span className="font-public_sans body_sm_500 ">Search</span>
              </Btn>
            </div>
            ) }
           
          </div>
          <div className="flex items-center gap-x-3">
            {utisIcons?.map(
              (icon) =>
                (icon.to === "/cart" ? (
                  <div className="relative">
                    <span className="text-gray_00 text-white hover:text-warning-400">
                      <icon.icon size={30} />
                    </span>
                    <span className="absolute -top-2 right-4 w-5 h-5 bg-gray-00 rounded-full flex justify-center items-center body_sm_400">
                      1
                    </span>
                  </div>
                ) : (
                  <span className="text-gray_00 text-white hover:text-warning-400">
                    <icon.icon size={30} />
                  </span>
                ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MiddleNav;
