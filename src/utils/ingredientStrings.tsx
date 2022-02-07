import { Ingredient } from '../data/types'

export const RecipeIngredientsToList = (ingredients?: Ingredient[]): string => {
  if (!ingredients) {
    return ''
  }

  const stringArray = ingredients.map((ingredient) => ingredient.name)
  const result = stringArray.join(',')

  return result
}

export const IngredientsToPayload = (ingredients: string): Ingredient[] => {
  const stringArray = ingredients.split(',')
  const result = stringArray.map((ingredient) => ({ name: ingredient }))

  return result
}
