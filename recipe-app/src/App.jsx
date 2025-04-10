import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetail from "./pages/RecipeDetail";
import fetchRecipes from "./helpers/fetchRecipes";
import RecipeDetails from "./components/RecipeDetails";
import Recipe from "./models/Recipe";
import RecipesList from "./components/RecipesList";
import React, { useState, useEffect } from "react";


function Layout() {

 

  return (
    <div>
      <Navbar  />
      
      <Outlet />
      <Footer />
    </div>
  );
}



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setSearchTerm={setSearchTerm} />}>
          <Route index element={<Home onSearch={setSearchTerm}/>} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
