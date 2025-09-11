import { useEffect } from "react";
import { useState } from "react";
import { fetchApi } from "../service/fetchApi";
import ProductCard from "./ProductCard";

const Homee = () => {
  const [teste, setProducts] = useState();
  var xablau = [];

  const fetchProducts = async () => {
    try {
      const response = await fetchApi("/produtos");
      console.log("Home: ", response);
      setProducts(response);
      xablau = response;
      console.log("Xablau", xablau);
      console.log("teste: ", teste);
    } catch (error) {
      console.log("Error calling api" + error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* {products.map((product) => {
        <ProductCard
          id={product.id}
          name={product.nome}
          price={product.preco}
          description={product.description}
        />;
      })} */}
    </>
  );
};

export default Homee;
