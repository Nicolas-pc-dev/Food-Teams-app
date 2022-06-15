import React from "react";
// Context
import FavoriteProvider from "../store/FavoriteProvider";
// Router
import { Navigate, Routes, Route } from "react-router-dom";
// Component
import Header from "../components/Header";
// Pages
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Favorites from "../pages/Favorites";
import ContactUs from "../pages/ContactUs";
import RecipeInfo from "../pages/RecipeInfo";
import NotFound from "./NotFound";
// -----------------------------------------------------

const Principal = () => {
  return (
    <FavoriteProvider>
      <Header />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/recipeInformation/:information"
          element={<RecipeInfo />}
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </FavoriteProvider>
  );
};

export default Principal;
