import React from "react";
import Container from "./../../common/Container";
import { icons } from "../../../helpers/iconProvider";

const BottomNav = () => {
  return (
    <section className="py-4 border-b border-gray-300">
      <Container>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-5">
            <div>
              <select
                className="bg-gray-100 py-4 px-5 focus:outline-0 body_sm_500 font-public_sans text-gray-700">
                <option value="All Category">Computer & Laptop</option>
                <option value="All Category">Computer & Laptop</option>
                <option value="All Category">Computer & Laptop</option>
                <option value="All Category">Computer & Laptop</option>
                <option value="All Category">Computer & Laptop</option>
              </select>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 label3 text-gray-600">
                <icons.IoLocationOutline size={18} />
                <span>Track Order</span>
              </div>
              <div className="flex items-center gap-1 label3 text-gray-600">
                <icons.IoLocationOutline size={18} />
                <span>Track Order</span>
              </div>
              <div className="flex items-center gap-1 label3 text-gray-600">
                <icons.IoLocationOutline size={18} />
                <span>Track Order</span>
              </div>
              <div className="flex items-center gap-1 label3 text-gray-600">
                <icons.IoLocationOutline size={18} />
                <span>Track Order</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center label3 text-gray-600 gap-2">
              <icons.MdOutlineAddIcCall size={18} />
              <span>+1-202-555-0104</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BottomNav;
