const getRecipe = async (cuisineType) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType}&number=9`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getRecipe;
