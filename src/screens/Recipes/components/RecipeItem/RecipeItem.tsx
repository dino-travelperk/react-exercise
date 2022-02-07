import { memo, useContext, useState } from 'react'
import { Recipe } from '../../../../data/types'
import { RecipeIngredientsToList } from '../../../../utils/ingredientStrings'
import './RecipeItem.css'
import RecipeForm from '../RecipeForm/RecipeForm'
import { DispatchContext } from '../../../../contexts/RecipesContext/recipesContext'

const RecipeItem = (recipe: Recipe) => {
  const [isEditing, setEditing] = useState(false)
  const handleEdit = () => {
    setEditing(!isEditing)
  }
  const { removeRecipe } = useContext(DispatchContext)

  const handleDelete = async () => {
    await removeRecipe(recipe.id!)
  }

  const view = (
    <div>
      <div className="RecipeItem-contents">
        <h4>{recipe.name}</h4>
        <div>Description: {recipe.description}</div>
        <div>Ingredients: {RecipeIngredientsToList(recipe.ingredients)}</div>
      </div>
      <div className="RecipeItem-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>X</button>
      </div>
    </div>
  )

  const edit = (
    <div className="RecipeItem-edit">
      <RecipeForm recipe={recipe} handleToggle={handleEdit} />
    </div>
  )

  return <div className="RecipeItem"> {isEditing ? edit : view}</div>
}

export default memo(RecipeItem)
