import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Createrecipe = () => {
  const [data, setData] = useContext(recipecontext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setData((prev) => [...prev, data]);
    toast.success("Recipe created!")
    reset();
    navigate("/recipes")
  };


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-emerald-900 to-teal-900 pt-[8rem] pb-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Create Your <span className="text-emerald-300">Recipe</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Share your culinary masterpiece with the world. Every great dish starts with passion and the perfect recipe.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <form className="flex flex-col gap-[1.6rem]"
            onSubmit={handleSubmit(submitHandler)}
          >
            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                📸 Recipe Image
              </label>
              <input
                className="w-full px-4 py-4 border-2 border-white/30 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 outline-none transition-all duration-300 bg-white/20 focus:bg-white/30 text-white placeholder-gray-300"
                type="url"
                placeholder="Paste your recipe image URL here..."
                {...register("image")}
              />
            </div>

            {/* Title and Chef Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  ✨ Recipe Title
                </label>
                <input
                  className="w-full px-4 py-4 border-2 border-white/30 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 outline-none transition-all duration-300 bg-white/20 focus:bg-white/30 text-white placeholder-gray-300"
                  type="text"
                  placeholder="Give your recipe a catchy name..."
                  {...register("title")}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  👨‍🍳 Chef Name
                </label>
                <input
                  className="w-full px-4 py-4 border-2 border-white/30 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 outline-none transition-all duration-300 bg-white/20 focus:bg-white/30 text-white placeholder-gray-300"
                  type="text"
                  placeholder="Your name or chef's name..."
                  {...register("chef-name")}
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                📝 Description
              </label>
              <textarea
                className="w-full px-4 py-4 border-2 border-white/30 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 outline-none transition-all duration-300 bg-white/20 focus:bg-white/30 text-white placeholder-gray-300 resize-none"
                rows="4"
                placeholder="Tell us what makes this recipe special..."
                {...register("description")}
              />
            </div>

            {/* Ingredients */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white mb-2">
                🥕 Ingredients
              </label>
              <textarea
                className="w-full px-4 py-4 border-2 border-white/30 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 outline-none transition-all duration-300 bg-white/20 focus:bg-white/30 text-white placeholder-gray-300 resize-none"
                rows="5"
                placeholder="List your ingredients (separate each with a comma)&#10;Example: 2 cups flour, 1 cup sugar, 3 eggs, 1 tsp vanilla..."
                {...register("ingredients")}
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                🍽️ Category
              </label>
              <select
                className="w-full px-4 py-4 border-2 border-white/30 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-20 outline-none transition-all duration-300 bg-white/20 focus:bg-white/30 text-white cursor-pointer"
                {...register("category")}
              >
                <option className="text-black"  value="">Choose a category...</option>
                <option className="text-black" value="cat-1">Category 1</option>
                <option className="text-black" value="cat-2">Category 2</option>
                <option className="text-black" value="cat-3">Category 3</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#23544c] to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 hover:from-emerald-600 hover:to-[#23544c]"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>🍳</span>
                  Save Recipe
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-[#23544c] to-emerald-600 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-semibold mb-3">💡 Pro Tips</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span>📷</span>
              <span>Use high-quality images to make your recipe stand out</span>
            </div>
            <div className="flex items-start gap-2">
              <span>📝</span>
              <span>Be specific with measurements and cooking times</span>
            </div>
            <div className="flex items-start gap-2">
              <span>❤️</span>
              <span>Share the story behind your recipe to connect with others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createrecipe;