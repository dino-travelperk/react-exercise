import { RecipesProvider } from '../../contexts/RecipesContext/recipesContext'
import RecipeList from './components/RecipeList/RecipeList'
import RecipeSearch from './components/RecipeSearch'
import RecipeFormContainer from './components/RecipeFormContainer/RecipeFormContainer'

import './Recipes.css'

const Recipes = () => {
  return (
    <div className="Recipes">
      <h1>The best style-less Recipe App!</h1>
      <RecipesProvider>
        <RecipeSearch name="" />
        <RecipeFormContainer />
        <RecipeList />
      </RecipesProvider>
    </div>
  )
}

export default Recipes
