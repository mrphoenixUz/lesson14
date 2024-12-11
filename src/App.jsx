import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navber";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/contact";
import Products from "./components/Products";
import Product from "./components/Product";

export default function App() {
  const productList = [
    { id: 1, name: "Product-1", title: "This is product 1" },
    { id: 2, name: "Product-2", title: "This is product 2" },
    { id: 3, name: "Product-3", title: "This is product 3" },
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={<Products productList={productList} />}
        />
        <Route
          path="/product/:id"
          element={<Product productList={productList} />}
        />
      </Routes>
    </div>
  );
}
