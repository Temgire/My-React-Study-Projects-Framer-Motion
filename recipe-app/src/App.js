import React,{useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';


const App = () =>{
const App_Id = "590f575a";
const App_key = "2af79d97e299b5fb8bcb248bdda8aec8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch]   = useState('');
  const[query, setQuery] = useState("chiken");  

  useEffect(()=>{
    getRecipe();
  },[query])

  const getRecipe = async ()=>{
      const response  = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_key}`);
      const data = await response.json();
      console.log(data);
      setRecipes(data.hits);
  }


    const updateSearch = e =>{
      setSearch(e.target.value);
    }

    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }


  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <form>

        <div className="recipes">
      {recipes.map(recipe => (
      <Recipe key={recipe.recipe.label} 
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
      </form>
    </div>
  );
  };


export default App;
