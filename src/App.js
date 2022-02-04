import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const initialFormState = {
    id: "",
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [recipes, setRecipes] = useState(RecipeData);
  
  const [formData, setFormData] = useState( {...initialFormState } )
 
  
  const [posts, setPosts] = useState([]);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
       </table>
      
      <RecipeList
        posts={recipes}
        setPosts={setRecipes}
       />
      <RecipeList 
        posts={posts}
        setPosts={setPosts}
        />
      
      <RecipeCreate 
       initialFormState={initialFormState} 
       formData={formData} 
       setFormData={setFormData}
       posts={posts}
       setPosts={setPosts}
        />
      
    </div>
  );
}

export default App;
