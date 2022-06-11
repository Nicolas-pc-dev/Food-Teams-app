import React from "react";
// Router
import { Routes, Route } from "react-router-dom";
// Component
import Header from "../components/Header";
// Pages
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favorites from "../pages/Favorites";
import ContactUs from "../pages/ContactUs";
// Context
import FavoriteProvider from "../store/FavoriteProvider";
// -----------------------------------------------------
const Principal = () => {
  return (
    <FavoriteProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </FavoriteProvider>
  );
};

export default Principal;
