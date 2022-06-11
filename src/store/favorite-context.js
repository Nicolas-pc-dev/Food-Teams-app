import React from "react";

const FavoriteRecContext = React.createContext({
  recipes: [],
  addRecipe: (recipe) => {},
  removeRecipe: (id) => {},
});

export default FavoriteRecContext;
