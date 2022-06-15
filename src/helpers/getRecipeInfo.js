const fetchRecipeInformation = async (route, api) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${route}/information?${api}`
  );
  const data = await response.json();
  return data;
};

export default fetchRecipeInformation;
