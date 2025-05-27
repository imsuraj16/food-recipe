import React from "react";
import { Link } from "react-router-dom";

const SingleRecipe = ({ item }) => {
  return (
    <Link
      to={`/recipes/recipedetails/${item.id}`}
      className="w-[20rem] h-[25rem] bg-[#80a572] px-3 py-3 rounded-lg flex flex-col gap-3 hover:scale-105 duration-500 transition-all"
      key={item.id}
    >
      <div className="w-full h-[12rem] overflow-hidden rounded-lg flex-1">
        <img className="w-full h-full object-cover " src={item.image} alt="" />
      </div>
      <h1>
        <strong>name</strong> : {item.title}
      </h1>
      <h1 className="break-words whitespace-normal w-full">
        <strong>desc</strong> : {item.description.slice(0, 100)}...{" "}
        <small>more</small>
      </h1>
      <h1 className="break-words whitespace-normal w-full">
        <strong>ingredients</strong> : {item.ingredients}
      </h1>
    </Link>
  );
};

export default SingleRecipe;
