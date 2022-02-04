import React, { useState } from "react";

function RecipeCreate({ initialFormState, formData, setFormData, posts }) {

  const newPost = {
    id: "",
    name: formData.name,
    cuisine: formData.cuisine,
    photo: formData.photo,
    ingredients: formData.ingredients,
    preparation: formData.preparation,
  }
  
  const handleChange = (event) => setFormData( {...formData, [event.target.name]: event.target.value} )
  
  
   const handleSubmit = (event) => {
    event.preventDefault()
    posts.push(newPost)
    console.log(posts)
    setFormData( { ...initialFormState } )
  }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" id="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
            </td>
            <td>
                <input
                  placeholder="Cuisine"
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
            </td>
            <td>
                <input
                  placeholder="URL"
                  id="photo"
                  type="url"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                />
            </td>
            <td>
                <textarea
                  placeholder="Ingredients"
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
            </td>
            <td>
                <textarea
                  placeholder="Preparation"
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
