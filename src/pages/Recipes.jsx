import React, { useContext } from 'react'
import { recipecontext } from '../context/Recipecontext'

const Recipes = () => {

    const [data] = useContext(recipecontext)
  return (
    <div className='w-full flex gap-5'>
      {
        data.map((item)=>(
            <div className='w-[20%] bg-amber-800 px-3 py-3' key={item.id}>
                <div className='w-full h-[80%] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={item.image} alt="" />
                </div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <h1>{item.ingredients}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Recipes
