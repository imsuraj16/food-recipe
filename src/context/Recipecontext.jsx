import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)

const Recipecontext = (props) => {

    const [data,setData] = useState([{
  "id": "abc123",
  "title": "Chocolate Cake",
  "image": "https://images.unsplash.com/photo-1709195902163-7eee13e78970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY2xhdGUlMjBjYWtlfGVufDB8fDB8fHww",
  "chef-name": "Chef Suraj",
  "description": "Rich and moist chocolate cake...",
  "ingredients": ["2 cups flour", "1 cup sugar", "3 eggs", "1 tsp vanilla"],
  "category": "cat-1"
}
])

  return (
    <recipecontext.Provider value={[data,setData]}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default Recipecontext
