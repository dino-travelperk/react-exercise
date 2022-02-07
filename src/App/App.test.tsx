import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('should render recipes app', () => {
  render(<App />)
  expect(
    screen.getByText(/The best style-less Recipe App!/i),
  ).toBeInTheDocument()
})
