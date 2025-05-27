import React, { useContext } from "react";
import { recipecontext } from "../context/Recipecontext";
import SingleRecipe from "../components/SingleRecipe";

const Recipes = () => {
  const [data, setData] = useContext(recipecontext);

  return (
    <div className="w-full flex gap-5 mt-[12rem] px-[4rem] flex-wrap">
      {data.map((item) => (
        <SingleRecipe item = {item} key = {item.id}/>
      ))}
    </div>
  );
};

export default Recipes;
