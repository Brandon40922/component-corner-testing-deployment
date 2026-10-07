import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(
      screen.getByText('Gear Up for Game Day')
    ).toBeInTheDocument()
  })

  test('displays the main homepage content', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(
      screen.getByText('Gear Up for Game Day')
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'Shop quality football gear built for performance.'
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText('Why Shop With Us?')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Shop Now')
    ).toBeInTheDocument()
  })
})