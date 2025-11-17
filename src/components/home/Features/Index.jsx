import React from "react";
import Container from "./../../common/Container";
import { icons } from "../../../helpers/iconProvider";
import { useState } from "react";

const Features = () => {
  const { TfiPackage, CiTrophy, GoCreditCard, FaHeadphonesAlt } = icons;

  const [data, setData] = useState([
    {
      id: 1,
      icon: TfiPackage,
      title: "Fasted Delivery",
      description: "Delivery in 24/H",
    },
    {
      id: 2,
      icon: CiTrophy,
      title: "24 Hours Return",
      description: "100% money-back guarantee",
    },
    {
      id: 3,
      icon: GoCreditCard,
      title: "Secure Payment",
      description: "Your money is safe",
    },
    {
      id: 4,
      icon: FaHeadphonesAlt,
      title: "Support 24/7",
      description: "Live contact/message",
    },
  ]);

  return (
    <section className="py-20">
      <Container>
        <div className="border border-gray-200 grid grid-cols-4 py-3 ">
          {data?.map((item) => (
            <div className="flex border-r pl-9 items-center gap-4">
              <span className="text-gray-800" key={item}>
                <item.icon size={25} />
              </span>
              <div>
                <h2 className="label3 text-gray-900">{item.title}</h2>
                <h2 className="body_sm_400">{item.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
