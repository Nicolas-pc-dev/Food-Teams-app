const getVeganRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegan&number=9`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getVeganRecipes;
