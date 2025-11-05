import React from "react";
import Container from "../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";
import Btn from '../../common/Btn';

const Header = () => {
  return (
    <section className="bg-gray-900 py-[18px]">
      <Container>
        <div className="flex justify-between">
          <picture>
            <img src={imgProvider.logo} alt="" />
          </picture>
          <div className="flex gap-2 items-center">
            <h3 className="text-gray-00 font-medium text-[14px]">Up to</h3>
            <span className="text-[40px] font-public_sans font-semibold text-warning-500">59%</span>
            <h className="text-gray-00 font-public_sans font-medium text-[20px]">OFF</h>
          </div>
          <div>
              <Btn className="rounded-xs font-public_sans font-bold text-[14px] cursor-pointer">Shop now</Btn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
