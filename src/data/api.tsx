import request from '../utils/recipesApi'
import { Recipe } from './types'

export const getRecipes = async (name?: string): Promise<Recipe[]> => {
  let path = '/recipes/'
  if (name) {
    path += `?name=${name}`
  }

  const options = {
    method: 'GET',
  }
  return await request<Recipe[]>(path, options)
}

export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const path = '/recipes/'
  const options = {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await request<Recipe>(path, options)
}

export const updateRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const path = `/recipes/${recipe.id}/`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await request<Recipe>(path, options)
}

export const deleteRecipe = async (recipeId: number): Promise<undefined> => {
  const path = `/recipes/${recipeId}/`
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await request<undefined>(path, options)
}
