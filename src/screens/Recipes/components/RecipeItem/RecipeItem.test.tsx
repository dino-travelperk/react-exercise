import { render, screen } from '@testing-library/react'
import RecipeItem from './RecipeItem'
import { Recipe } from '../../../../data/types'

describe('RecipeItem component', () => {
  it('should render a recipe item', () => {
    const recipe: Recipe = {
      name: 'Pizza',
      description: 'tastes yummy!',
      ingredients: [{ name: 'dough' }, { name: 'tomato' }],
    }

    render(<RecipeItem key={recipe.id} {...recipe} />)

    expect(screen.getByText(/Pizza/)).toBeInTheDocument()
    expect(screen.getByText(/tastes yummy!/)).toBeInTheDocument()
    expect(screen.getByText(/dough/)).toBeInTheDocument()
    expect(screen.getByText(/tomato/)).toBeInTheDocument()

    expect(screen.getByText(/Edit/)).toBeInTheDocument()
    expect(screen.getByText(/X/)).toBeInTheDocument()
  })
})
