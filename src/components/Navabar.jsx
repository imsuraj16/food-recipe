import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top of the page
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`flex items-center justify-between px-[5rem] py-[2rem] fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <NavLink to="/">
        <span className="text-4xl">W</span>ilma
      </NavLink>
      <div className="flex gap-[3rem] items-center">
        <NavLink className={(e) => (e.isActive ? "text-[#C69D5D]" : "")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-[#C69D5D]" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-[#C69D5D]" : "")}
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-[#C69D5D]" : "")}
          to="/Create-recipe"
        >
          Create Recipe
        </NavLink>
      </div>
      <NavLink>
        <span className="text-3xl">W</span>ilma
      </NavLink>
    </div>
  );
};

export default Navbar;