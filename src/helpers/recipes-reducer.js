// REDUCER DEFAULT STATE
const defaultRecipeState = {
  recipes: [],
  showButton: true,
};

const types = {
  addRecipe: "ADD_RECIPE",
  removeRecipe: "REMOVE_RECIPE",
};

// REDUCER FUNCTION
const recipesReducer = (state, action) => {
  switch (action.type) {
    case types.addRecipe:
      if (state.recipes.some((recipe) => recipe.id === action.recipe.id)) {
        return { ...state, showButton: false };
      }
      const updateFavoritesRecipes = state.recipes.concat(action.recipe);
      return { ...state, recipes: updateFavoritesRecipes, recipeExist: true };

    case types.removeRecipe:
      const FilteredRecipes = state.recipes.filter(
        (recipe) => recipe.id !== action.id.id
      );
      return { ...state, recipes: FilteredRecipes };
    default:
      return defaultRecipeState;
  }
};

export { defaultRecipeState, types };
export default recipesReducer;
