import React from "react";
import Container from "./../../common/Container";
import { imgProvider } from "../../../helpers/imgProvider";

const BannerTwo = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="flex justify-between">
          <picture>
            <img src={imgProvider.bannerone} alt="" />
          </picture>
          <picture>
            <img src={imgProvider.bannertwo} alt="" />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default BannerTwo;
