import React, { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";
import SingleRecipe from "../components/SingleRecipe";

const Recipes = () => {
  const [data, setData] = useContext(recipecontext);

  if(data.length>0){
    return (
       <div className="w-full flex gap-5 mt-[12rem] px-[4rem] flex-wrap">
      
      {data.map((item) => (
        <SingleRecipe item = {item} key = {item.id}/>
      ))}
    </div>
    )
  }

  return(
    <div className="w-full px-[4rem] mt-[9rem]">
      <h1 className="text-3xl text-red-400">No recipes found....</h1>
    </div>
  )
};

export default Recipes;
