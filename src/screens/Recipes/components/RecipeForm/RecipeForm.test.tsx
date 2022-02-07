import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DispatchContext } from '../../../../contexts/RecipesContext/recipesContext'
import { Recipe } from '../../../../data/types'
import RecipeForm from './RecipeForm'

const mockedDispatch = {
  retrieveRecipes: async () => {},
  addRecipe: jest.fn(async () => {}),
  removeRecipe: async () => {},
  editRecipe: jest.fn(async () => {}),
}

describe('RecipeForm component', () => {
  it('should edit an existing recipe', async () => {
    const recipe: Recipe = {
      name: 'Pizza',
      description: 'tastes yummy!',
      ingredients: [{ name: 'dough' }, { name: 'tomato' }],
    }

    render(
      <DispatchContext.Provider value={mockedDispatch}>
        <RecipeForm recipe={recipe} handleToggle={() => {}} />
      </DispatchContext.Provider>,
    )

    const submitButton = screen.getByText(/Save/)
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockedDispatch.editRecipe).toHaveBeenCalledWith(recipe)
    })
  })
})
