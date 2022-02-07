import { useContext, useEffect } from 'react'
import { DispatchContext } from '../../../../contexts/RecipesContext/recipesContext'
import useInputState from '../../../../hooks/useInputState'

interface IRecipeSearchProps {
  name?: string
}

const RecipeSearch = (props: IRecipeSearchProps) => {
  const { retrieveRecipes } = useContext(DispatchContext)

  const [name, handleNameChange] = useInputState(props.name ?? '')

  useEffect(() => {
    retrieveRecipes(name)
  }, [name])

  return (
    <div>
      <label>Find recipes by name: </label>
      <input value={name} onChange={handleNameChange}></input>
    </div>
  )
}

export default RecipeSearch
