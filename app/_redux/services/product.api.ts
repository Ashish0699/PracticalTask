import axios from "axios";

export const getProductList = async () => {
  return axios.get("https://fakestoreapi.com/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
