import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Recipecontext from "./context/Recipecontext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Recipecontext>
    <BrowserRouter basename="/food-recipe">
    <ToastContainer/>
      <App />
    </BrowserRouter>
  </Recipecontext>
);
