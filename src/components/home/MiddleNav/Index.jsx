import React from "react";
import Container from "./../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";
import { icons } from "../../../helpers/iconProvider";


const MiddleNav = () => {

 
  const { IoIosSearch } = icons;
  // handle Typing
  const handleTyping =(event)=>{
    if (event.target.value.length > 0) {
        console.log("this ")
    };
  }
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
              placeholder:body_sm_400 placeholder:text-gray-300
              rounded w-[700px] py-2 px-3 outline-none"
              placeholder="Search for anything..."
            />
            <span className="text-gray-900 absolute right-2 top-1/2 -translate-y-1/2">
              <IoIosSearch size={30} />
            </span>
          </div>
          <div>
            <button>Hello</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MiddleNav;
