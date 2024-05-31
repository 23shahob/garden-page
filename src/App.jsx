import React from "react";
import "./App.css";
import "./assets/fonts.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Home/Home";
import Shop from "./Home/Shop";
import PlantCare from "./Home/PlantCare";
import Blogs from "./Home/Blogs";
import Cart from "./Home/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plantcare" element={<PlantCare />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
