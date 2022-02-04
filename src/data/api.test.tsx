import request from '../utils/recipesApi'
import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from './api'
import { Recipe } from './types'

jest.mock('../utils/recipesApi')

const recipe: Recipe = {
  id: 1,
  name: 'my milkshake recipe',
  description: 'it is yummy',
  ingredients: [{ name: 'milk' }, { name: 'strawberries' }],
}

describe('getRecipes', () => {
  it('should return the recipes', async () => {
    const recipes = [{ recipe }]
    const mockedRequest = request as jest.MockedFunction<typeof request>
    mockedRequest.mockResolvedValue(recipes)

    const result = await getRecipes()

    expect(result[0]).toEqual(recipes[0])
    expect(mockedRequest).toHaveBeenCalledWith('/recipes/', { method: 'GET' })
  })
})

describe('createRecipe', () => {
  it('should create a recipe and return it', async () => {
    const mockedRequest = request as jest.MockedFunction<typeof request>
    mockedRequest.mockResolvedValue(recipe)

    const result = await createRecipe(recipe)

    expect(result).toEqual(recipe)
    expect(mockedRequest).toHaveBeenCalledWith('/recipes/', {
      method: 'POST',
      body: JSON.stringify(recipe),
    })
  })
})

describe('updateRecipe', () => {
  it('should update a recipe and return it', async () => {
    const mockedRequest = request as jest.MockedFunction<typeof request>
    mockedRequest.mockResolvedValue(recipe)

    const result = await updateRecipe(recipe)

    expect(result).toEqual(recipe)
    expect(mockedRequest).toHaveBeenCalledWith(`/recipes/${recipe.id}/`, {
      method: 'PATCH',
      body: JSON.stringify(recipe),
    })
  })
})

describe('deleteRecipe', () => {
  it('should delete a recipe', async () => {
    const mockedRequest = request as jest.MockedFunction<typeof request>
    mockedRequest.mockResolvedValue(undefined)

    const result = await deleteRecipe(1)

    expect(result).toEqual(undefined)
    expect(mockedRequest).toHaveBeenCalledWith('/recipes/1/', {
      method: 'DELETE',
    })
  })
})
