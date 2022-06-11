import React, { useState, useEffect } from "react";
// Helpers
import getRecipe from "../../helpers/getRecipe";
import getVeganRecipes from "../../helpers/getVeganRecipes";
// Components
import RecipeCarrousel from "./RecipesCarrousel";
// ------------------------------------------------------------

const RecipeContent = () => {
  const [italianRecipes, setItalianRecipes] = useState([]);
  const [veganRecipes, setVeganRecipes] = useState([]);
  const [frenchRecipes, setFrenchRecipes] = useState([]);
  const [thaiRecipes, setThaiRecipes] = useState([]);

  // Vegan Fetch + locale Storage
  useEffect(() => {
    const myRecipes = localStorage.getItem("vegan");
    if (myRecipes) {
      setVeganRecipes(JSON.parse(myRecipes));
    } else {
      getVeganRecipes().then((data) => {
        setVeganRecipes(data.results);

        localStorage.setItem("vegan", JSON.stringify(data.results));
      });
    }
  }, []);

  //Italian Fetch + locale Storage
  useEffect(() => {
    const myRecipes = localStorage.getItem("italian");
    if (myRecipes) {
      setItalianRecipes(JSON.parse(myRecipes));
    } else {
      getRecipe("italian").then((data) => {
        setItalianRecipes(data.results);

        localStorage.setItem("italian", JSON.stringify(data.results));
      });
    }
  }, []);

  //French Fetch + locale Storage
  useEffect(() => {
    const myRecipes = localStorage.getItem("french");
    if (myRecipes) {
      setFrenchRecipes(JSON.parse(myRecipes));
    } else {
      getRecipe("french").then((data) => {
        setFrenchRecipes(data.results);

        localStorage.setItem("french", JSON.stringify(data.results));
      });
    }
  }, []);

  // Thai fetch + locale Storage
  useEffect(() => {
    const myRecipes = localStorage.getItem("thai");
    if (myRecipes) {
      setThaiRecipes(JSON.parse(myRecipes));
    } else {
      getRecipe("thai").then((data) => {
        setThaiRecipes(data.results);

        localStorage.setItem("thai", JSON.stringify(data.results));
      });
    }
  }, []);

  return (
    <>
      <RecipeCarrousel recipes={veganRecipes} type="Vegan" />;
      <RecipeCarrousel recipes={italianRecipes} type="Italian" />;
      <RecipeCarrousel recipes={frenchRecipes} type="French" />;
      <RecipeCarrousel recipes={thaiRecipes} type="Thai" />;
    </>
  );
};

export default RecipeContent;
