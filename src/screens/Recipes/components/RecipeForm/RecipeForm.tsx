import React, { useContext } from 'react'
import { Recipe } from '../../../../data/types'
import { DispatchContext } from '../../../../contexts/RecipesContext/recipesContext'
import useInputState from '../../../../hooks/useInputState'
import {
  IngredientsToPayload,
  RecipeIngredientsToList,
} from '../../../../utils/ingredientStrings'

import './RecipeForm.css'

interface IRecipeFormProps {
  recipe?: Recipe
  handleToggle: () => void
}

const RecipeForm = (props: IRecipeFormProps) => {
  const isEdit = props.recipe

  const [name, handleNameChange, resetName] = useInputState(
    props.recipe?.name ?? '',
  )
  const [description, handleDescriptionChange, resetDescription] =
    useInputState(props.recipe?.description ?? '')
  const [ingredients, handleIngredientsChange, resetIngredients] =
    useInputState(RecipeIngredientsToList(props.recipe?.ingredients))

  const { addRecipe, editRecipe } = useContext(DispatchContext)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const payload: Recipe = {
      id: props.recipe?.id,
      name: name,
      description: description,
      ingredients: IngredientsToPayload(ingredients),
    }
    if (isEdit) {
      await editRecipe(payload)
      props.handleToggle()
    } else {
      await addRecipe(payload)
      resetName()
      resetDescription()
      resetIngredients()
    }
  }

  return (
    <form className="RecipeForm" onSubmit={handleSubmit}>
      <label>Name: </label>
      <input value={name} onChange={handleNameChange}></input>
      <label>Description: </label>
      <input value={description} onChange={handleDescriptionChange}></input>
      <label>Ingredients: </label>
      <input value={ingredients} onChange={handleIngredientsChange}></input>
      <button>Save</button>
      <button onClick={props.handleToggle}>Cancel</button>
    </form>
  )
}

export default RecipeForm
