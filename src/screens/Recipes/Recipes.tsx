import React, { useEffect } from 'react'
import { getRecipes } from '../../data/api'

const Recipes = () => {
  useEffect(() => {
    const recipes = async () => {
      const recipeList = await getRecipes()
      console.log(recipeList)
    }

    recipes()
  }, [])

  return <div>My Component</div>
}

export default Recipes
