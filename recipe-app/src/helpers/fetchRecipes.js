import Recipe from '../models/Recipe';

async function fetchRecipes(searchTerm) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  const data = await response.json();

  if (!data.meals) return []; // Return empty array if no results

  return data.meals.map((meal) => new Recipe(
    meal.idMeal,
    meal.strMeal,
    meal.strMealThumb,
    meal.strCategory,
    meal.strArea,
    Object.entries(meal) // Extract ingredients and quantities dynamically
      .filter(([key]) => key.startsWith('strIngredient') && meal[key])
      .map(([key]) => `${meal[key]} - ${meal[`strMeasure${key.match(/\d+/)[0]}`]}`),
    meal.strInstructions,
    meal.strYoutube,
    meal.strSource
  ));
}

export default fetchRecipes;
