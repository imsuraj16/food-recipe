import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/Recipecontext";

const Recipedetails = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const editHandler = () => {
    setIsEdit(true);
  };
  const params = useParams();
  // console.log(params);
  

  const [data, setData] = useContext(recipecontext);
  const recipe = data.find((recipe) => recipe.id === params.id);

  const submitHandler = (recipe) => {
    const recipeindex = data.findIndex((item) => item.id === params.id);

    // console.log(recipeindex);
    // console.log(recipe);

    // const copydata = [...data];
    // copydata[recipeindex] = { ...copydata[recipeindex], ...recipe };
    // setData(copydata);

    setData((prev) =>
      prev.map((item, i) => (i === recipeindex ? { ...item, ...recipe } : item))
    );
    navigate("/recipes");
  };

  const deleteHandler = () => {
    let deleted = data.filter((item) => item.id !== params.id);
    setData(deleted)
    navigate("/recipes")
  };

  if (isEdit) {
    return (
      <div className="w-full mt-[9rem] px-[2rem] md:px-[8rem] pb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Edit Recipe</h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Title */}
          <input
            defaultValue={recipe.title}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            placeholder="Title"
            {...register("title")}
          />

          {/* Description */}
          <textarea
            defaultValue={recipe.description}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            placeholder="Description"
            {...register("description")}
          />

          {/* Ingredients */}
          <textarea
            defaultValue={recipe.ingredients}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            placeholder="Ingredients"
            {...register("ingredients")}
          />

          {/* Image URL */}
          <input
            defaultValue={recipe.image}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            placeholder="Image URL"
            {...register("image")}
          />

          {/* Chef Name */}
          <input
            defaultValue={recipe.chef}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            placeholder="Chef Name"
            {...register("chef")}
          />

          {/* Category */}
          <input
            defaultValue={recipe.category}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            placeholder="Category (e.g., Breakfast, Dessert)"
            {...register("category")}
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button type="submit" className="bg-green-600 px-6 py-2 rounded">
              Update recipe
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="bg-gray-600 px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full mt-[9rem] px-[2rem] md:px-[8rem] pb-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-[1rem]">
        {/* Hero Image Section */}
        <div className="flex items-center justify-end gap-[3rem]">
          <button
            onClick={editHandler}
            className="bg-red-600 px-[2rem] py-1 rounded-md"
          >
            edit
          </button>
          <button
          onClick={deleteHandler}
            className="bg-yellow-600 px-[2rem] py-1 rounded-md"
          >
            Delete recipe
          </button>
        </div>
        <div className="w-full h-[25rem] md:h-[30rem] bg-gradient-to-br from-amber-300 to-amber-500 rounded-2xl overflow-hidden shadow-2xl mb-8">
          <img
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
            src={recipe.image}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              {recipe.title}
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* Description Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-amber-400 mb-4 flex items-center">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
              About This Recipe
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              {recipe.description}
            </p>
          </div>

          {/* Ingredients Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
              Ingredients
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-6 shadow-inner border border-gray-600/30">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {recipe.ingredients}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipedetails;
