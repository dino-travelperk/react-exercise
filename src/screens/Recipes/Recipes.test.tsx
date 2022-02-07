import React from 'react'
import { render, screen } from '@testing-library/react'
import Recipes from './Recipes'

test('should render search', () => {
  render(<Recipes />)
  const linkElement = screen.getByText(/Find recipes by name:/i)
  expect(linkElement).toBeInTheDocument()
})

test('should render new recipe form', () => {
  render(<Recipes />)
  const linkElement = screen.getByText(/Add New Recipe!/i)
  expect(linkElement).toBeInTheDocument()
})
