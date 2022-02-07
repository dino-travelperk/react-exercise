import React, { createContext, useState } from 'react'
import { Recipe } from '../../data/types'
import {
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} from '../../data/api'

interface IDispatchContext {
  retrieveRecipes: (name?: string) => Promise<void>
  addRecipe: (recipe: Recipe) => Promise<void>
  removeRecipe: (id: number) => Promise<void>
  editRecipe: (recipe: Recipe) => Promise<void>
}

export const RecipesContext = createContext<Recipe[]>([])
export const DispatchContext = createContext<IDispatchContext>({
  retrieveRecipes: async () => {},
  addRecipe: async () => {},
  removeRecipe: async () => {},
  editRecipe: async () => {},
})

export const RecipesProvider = (props: any) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const retrieveRecipes = async (name?: string) => {
    const updatedRecipes = await getRecipes(name)
    setRecipes(updatedRecipes)
  }

  const addRecipe = async (recipe: Recipe) => {
    const newRecipe = await createRecipe(recipe)
    setRecipes([...recipes, newRecipe])
  }

  const removeRecipe = async (id: number) => {
    await deleteRecipe(id)
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id)
    setRecipes(updatedRecipes)
  }

  const editRecipe = async (recipe: Recipe) => {
    const updatedRecipe = await updateRecipe(recipe)
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe,
    )
    setRecipes(updatedRecipes)
  }

  const dispatch: IDispatchContext = {
    retrieveRecipes,
    addRecipe,
    removeRecipe,
    editRecipe,
  }

  return (
    <RecipesContext.Provider value={recipes}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </RecipesContext.Provider>
  )
}
