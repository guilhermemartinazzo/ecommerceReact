import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "../pages/ProductCard";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Homee from "../pages/Homee";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
