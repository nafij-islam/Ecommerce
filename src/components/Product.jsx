import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "./common/Container";

const Product = () => {
  let [data, setData] = useState([]);

  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <Container>
        <div className="flex flex-wrap justify-between">
          {data.map((item) => (
            <div>
              <img src={item.thumbnail} alt="" />
              <h2>{item.title}</h2>
              <h3>{item.price}</h3>
              <h3>{item.rating}</h3>
              <h3 className="w-[300px]">{item.description}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Product;
