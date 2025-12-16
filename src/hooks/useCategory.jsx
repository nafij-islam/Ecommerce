import React from "react";
import { getCategory,getAllProduct,getProductbyCategory } from "../api/Category";
import { useQuery } from '@tanstack/react-query';

const useCategory = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
  return { isPending, error, data };
};

const useProduct = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
  });
  return { isPending, error, data };
};

const usegetproductbycategory = (categoryName) => {
  return useQuery({
    queryKey: ["categoryproduct", categoryName],
    queryFn: () => getProductbyCategory(categoryName),
    enabled: !!categoryName,
  });
};

 
export  {useCategory,useProduct,usegetproductbycategory} ;
 