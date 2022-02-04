import React from "react";
import PostContent from "./PostContent.js"

function RecipeList({ posts, setPosts }) {
   
   const recipeList = posts.map( (post, index) => {

    post.id = `${index}`

    return <PostContent 
    post={post} 
    posts={posts} 
    setPosts={setPosts}
    key={index} 
    /> 

  })
  return <div className="recipe-list postContent">
       <table>
        <tbody>
        {recipeList}
         </tbody>
       </table>
      </div>
}

export default RecipeList;
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked




