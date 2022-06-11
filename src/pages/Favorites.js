import React, { useContext } from "react";
// Context
import FavoriteRecContext from "../store/favorite-context";
// Components
import FavoriteCarrousel from "../components/favorites-recipes/FavoriteCarrousel";
//------------------------------------------------------

const Favorites = () => {
  const favoriteRecipesCtx = useContext(FavoriteRecContext);

  return (
    <FavoriteCarrousel recipes={favoriteRecipesCtx.recipes} type="Favorites" />
  );
};

export default Favorites;
