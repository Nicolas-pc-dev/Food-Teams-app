const API_KEY = "apiKey=f19301907cf7488cbd09010c786cd82d";

const getRecipe = async (cuisineType) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&cuisine=${cuisineType}&number=9`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getRecipe;
