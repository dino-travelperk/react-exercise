import React, { useState } from 'react'
import { Recipe } from '../../../../data/types'
import RecipeForm from '../RecipeForm/RecipeForm'

interface IRecipeFormContainerProps {
  recipe?: Recipe
}

const RecipeFormContainer = (props: IRecipeFormContainerProps) => {
  const [displayForm, setDisplayForm] = useState(false)
  const handleDisplayFormChange = () => {
    setDisplayForm(!displayForm)
  }

  const expanded = <RecipeForm handleToggle={handleDisplayFormChange} />
  const minimized = (
    <button onClick={handleDisplayFormChange}>Add New Recipe!</button>
  )

  return displayForm ? expanded : minimized
}

export default RecipeFormContainer
