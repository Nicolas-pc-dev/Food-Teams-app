// REDUCER DEFAULT STATE
const defaultRecipeState = {
  recipes: [],
};

const types = {
  addRecipe: "ADD_RECIPE",
  removeRecipe: "REMOVE_RECIPE",
};

// REDUCER FUNCTION
const recipesReducer = (state, action) => {
  switch (action.type) {
    case types.addRecipe:
      const updateFavoritesRecipes = state.recipes.concat(action.recipe);
      return { recipes: updateFavoritesRecipes };

    case types.removeRecipe:
      const FilteredRecipes = state.recipes.filter(
        (recipe) => recipe.id !== action.id.id
      );
      return { recipes: FilteredRecipes };
    default:
      return defaultRecipeState;
  }
};
//   if (action.type === "ADD_RECIPE") {
//     if (state.recipes.somre((recipe) => recipe.id === action.recipe.id)) {
//       return { ...state };
//     } else {
//       const updateFavoritesRecipes = state.recipes.concat(action.recipe);
//       return {
//         recipes: updateFavoritesRecipes,
//       };
//     }
//   }
//   if (action.type === "REMOVE_RECIPE") {
//     const FilteredRecipes = state.recipes.filter(
//       (recipe) => recipe.id !== action.id.id
//     );

//     return { recipes: FilteredRecipes };
//   }
//   return defaultRecipeState;
// };

export { defaultRecipeState, types };
export default recipesReducer;
