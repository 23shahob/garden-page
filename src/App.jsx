import React from "react";
import "./App.css";
import "./assets/fonts.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Home/Home";
import Shop from "./Home/Shop";
import PlantCare from "./Home/PlantCare";
import Blogs from "./Home/Blogs";
import Cart from "./Home/Cart";
import Footer from "./components/footer/Footer";
import { AppProvider } from "./components/AppContext";
import Checkout from "./components/Checkout";
import Account from "./Home/Account/Account";

const App = () => {
  const location = useLocation();
  const showFooter = location.pathname !== "/account";

  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plantcare" element={<PlantCare />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/shop/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {showFooter && <Footer />}
    </AppProvider>
  );
};

export default App;
