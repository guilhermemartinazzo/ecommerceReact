import { useEffect } from "react";
import fetchApi from "../service/fetchApi";

const Home = () => {
  const fetchProducts = async () => {
    try {
      const response = await fetchApi("/produtos");
      return response;
    } catch (error) {
      console.log("Error calling api" + error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h2>Home page</h2>
    </>
  );
};

export default Home;
