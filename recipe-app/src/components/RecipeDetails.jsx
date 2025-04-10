import React, { useState, useEffect } from 'react';
import fetchRecipes from '../helpers/fetchRecipes';

function RecipeDetails({ searchTerm }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      const recipes = await fetchRecipes(searchTerm);
      if (recipes.length > 0) {
        setRecipe(recipes[0]); // Display the first recipe for simplicity
      }
    }
    getRecipe();
  }, [searchTerm]);

  if (!recipe) return <p>No recipes found for "{searchTerm}"</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
      <h2>Video Tutorial</h2>
      {recipe.video && <a href={recipe.video} target="_blank" rel="noopener noreferrer">Watch Video</a>}
      <h2>Source</h2>
      {recipe.source && <a href={recipe.source} target="_blank" rel="noopener noreferrer">View Source</a>}
    </div>
  );
}

export default RecipeDetails;

