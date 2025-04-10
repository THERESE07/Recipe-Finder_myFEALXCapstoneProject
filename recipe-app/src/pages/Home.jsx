import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import fetchRecipes from "../helpers/fetchRecipes";
import RecipesList from "../components/RecipesList";
import Recipes from "../components/Recipes";


function Home({ onSearch }) {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetchRecipes(searchTerm)
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
        .catch((error) => console.error("Error fetching recipes:", error));
    }
  }, [searchTerm]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <main className="w-full flex flex-col">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
     <Header
        title={
          <p>
            Good Taste to your soul <br /> with ZaretteRecipe
          </p>
        }
        type="home"
      />
      <section className="p-6">
        <div className="bg-gray-100 px-6 py-4 flex justify-end">
          <input
            type="text"
            placeholder="Search recipes..."
            className="border p-2 rounded"
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <h1 className="text-xl font-semibold">Welcome RecipeFinder!</h1>
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Recipe List</h1>
          <RecipesList recipes={recipes} />
        </div>
      </section>
    </main>
  );
}

export default Home;
