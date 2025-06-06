import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Createrecipe from '../pages/Createrecipe'
import Recipedetails from '../pages/Recipedetails'

const Mainroute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/recipedetails/:id' element={<Recipedetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Create-recipe' element={<Createrecipe/>}/>
    </Routes>
  )
}

export default Mainroute
