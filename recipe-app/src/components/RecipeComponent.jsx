import React from 'react';

function RecipeComponent({ recipe }) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{recipe.title}</h3>
      <p className="text-gray-600">Category: {recipe.category}</p>
      <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
    </div>
  );
}

export default RecipeComponent;
