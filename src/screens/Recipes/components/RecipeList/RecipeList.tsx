import React, { useContext, useEffect } from 'react'
import {
  RecipesContext,
  DispatchContext,
} from '../../../../contexts/RecipesContext/recipesContext'
import RecipeItem from '../RecipeItem'

const RecipeList = () => {
  const { retrieveRecipes } = useContext(DispatchContext)
  const recipes = useContext(RecipesContext)
  const listItems = recipes.map((recipe) => (
    <RecipeItem key={recipe.id} {...recipe}></RecipeItem>
  ))

  useEffect(() => {
    retrieveRecipes()
  }, [])

  return <div className="RecipeList">{listItems}</div>
}

export default RecipeList
