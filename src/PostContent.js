import React from "react";
import DeleteButton from "./DeleteRecipe.js"
import RecipeCreate from "./RecipeCreate.js"



function PostContent({ post, posts, setPosts })  {
  
   return (
          <tr>
            <td>{post.name}</td>
            <td>{post.cuisine}</td>
            <td>{<img src={post.photo} alt="" />}</td>
            <td className="content_td"><p>{post.ingredients}</p></td>
            <td className="content_td"><p>{post.preparation}</p></td>
            <td><DeleteButton post={post} posts={posts} setPosts={setPosts} /></td>
          </tr>
    )
}

export default PostContent

