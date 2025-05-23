import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/Recipecontext";

const Createrecipe = () => {

const [data,setData] = useContext(recipecontext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setData((prev)=>[...prev,data])
    reset()
  };

  console.log(data);
  

  return (
    <div className="">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          className="outline-none border-b border-green-900 p-2 w-fit"
          type="url"
          placeholder="Enter image url"
          {...register("image")}
        />
        <input
          className="outline-none border-b border-green-900 p-2 w-fit"
          type="text"
          placeholder="enter the title here..."
          {...register("title")}
        />
        <textarea
          className="outline-none border-b border-green-900 p-2 w-fit"
          type="text"
          placeholder="Short description..."
          {...register("description")}
        />
        <textarea
          className="outline-none border-b border-green-900 p-2 w-fit"
          type="text"
          placeholder="Ingredients (comma separated)"
          {...register("ingredients")}
        />
        <input
          className="outline-none border-b border-green-900 p-2 w-fit"
          type="text"
          placeholder="Name of chef..."
          {...register("chef-name")}
        />
        <select
          className="outline-none border-b border-green-900 p-2 w-fit"
          {...register("category")}
        >
            <option value="cat-1">Category 1</option>
            <option value="cat-2">Category 2</option>
            <option value="cat-3">Category 3</option>
        </select>
        <br />
        <br />
        <button className="w-fit bg-green-800 px-4 py-2 rounded-md text-white">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Createrecipe;
