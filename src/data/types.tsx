export type Recipe = {
  id?: number
  name: string
  description: string
  ingredients: Ingredient[]
}

export type Ingredient = {
  name: string
}
