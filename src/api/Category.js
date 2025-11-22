import instance from "./axios";

const getCategory = async () => {
  try {
    const { data, status, statusText } = await instance.get(
      "/products/category-list"
    );

    return { data, status, statusText };
  } catch (error) {
    console.error("Category Network erroe", error);
  }
};

const getAllProduct = async () => {
  try {
    const { data, status, statusText } = await instance.get("/products");
    return { data, status, statusText };
  } catch (error) {
    console.error("Product Network erroe", error);
  }
};

export { getCategory,getAllProduct };
