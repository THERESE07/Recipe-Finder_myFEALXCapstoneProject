import React from "react";
import RecipeComponent from "./RecipeComponent";

function RecipesList({ recipes, onSelectRecipe }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => onSelectRecipe && onSelectRecipe(recipe)}
          >
            <RecipeComponent recipe={recipe} />
          </div>
        ))
      ) : (
        <p className="text-gray-500 col-span-3 text-center">
          No recipes found. Try searching for something else!
        </p>
      )}
    </div>
  );
}

export default RecipesList;
