import React from "react";
import { NavLink } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="flex items-center justify-center gap-[3rem] font-medium">
      <NavLink
        className={(e) =>
          `text-[1.2rem] ${e.isActive ? "text-green-900" : ""}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) =>
          `text-[1.2rem] ${e.isActive ? "text-green-900" : ""}`
        }
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) =>
          `text-[1.2rem] ${e.isActive ? "text-green-900" : ""}`
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) =>
          `text-[1.2rem] ${e.isActive ? "text-green-900" : ""}`
        }
        to="/Create-recipe"
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navabar;
