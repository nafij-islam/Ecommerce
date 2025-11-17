import React from "react";
import Container from "./../../common/Container";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../../api/Category";

const Category = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
  return (
    <section>
      <Container>
        <h1>hrllo</h1>
      </Container>
    </section>
  );
};

export default Category;
