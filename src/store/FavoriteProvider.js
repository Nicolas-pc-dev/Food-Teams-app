import React, { useReducer } from "react";
// Context
import FavoriteRecContext from "./favorite-context";
// Reducer
import recipesReducer, {
  defaultRecipeState,
  types,
} from "../helpers/recipes-reducer";
// ------------------------------------------------------------------

// CONTEXT PROVIDER COMPONENT
const FavoriteProvider = (props) => {
  // Reducer Hook
  const [favoriteState, dispatchFavoriteAction] = useReducer(
    recipesReducer,
    defaultRecipeState
  );

  // Handler Functions
  const addRecipeToFavorites = (recipe) => {
    dispatchFavoriteAction({ type: types.addRecipe, recipe: recipe });
  };

  const removeRecipeFromFavorites = (id) => {
    dispatchFavoriteAction({ type: types.removeRecipe, id: id });
  };

  // Dynamic Object Value
  const favoriteRecContext = {
    recipes: favoriteState.recipes,
    addRecipe: addRecipeToFavorites,
    removeRecipe: removeRecipeFromFavorites,
  };

  // JSX
  return (
    <FavoriteRecContext.Provider value={favoriteRecContext}>
      {props.children}
    </FavoriteRecContext.Provider>
  );
};

export default FavoriteProvider;
