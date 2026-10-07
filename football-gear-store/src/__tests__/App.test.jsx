import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import App from '../App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    window.history.pushState({}, '', '/')
  })

  test('renders the application', () => {
    render(<App />)
  
    expect(
      screen.getByRole('heading', {
        name: 'Football Gear Store',
        level: 1,
      })
    ).toBeInTheDocument()
  
    expect(
      screen.getByText('Gear Up for Game Day')
    ).toBeInTheDocument()
  })

  test('loads cart data from localStorage on startup', () => {
    const savedCart = [
      {
        id: 1,
        name: 'Football Helmet',
        price: 199.99,
        image: 'https://placehold.co/600x400?text=Football+Helmet',
        description:
          'A durable football helmet designed for protection and comfort.',
      },
    ]

    localStorage.setItem('cart', JSON.stringify(savedCart))

    render(<App />)

    expect(localStorage.getItem('cart')).toBe(
      JSON.stringify(savedCart)
    )
  })

  test('saves cart changes to localStorage', async () => {
    const user = userEvent.setup()

    render(<App />)

    const productsLink = screen.getByRole('link', {
      name: /products/i,
    })

    await user.click(productsLink)

    const addButtons = await screen.findAllByRole('button', {
      name: /add to cart/i,
    })

    await user.click(addButtons[0])

    await waitFor(() => {
      const savedCart = JSON.parse(
        localStorage.getItem('cart')
      )

      expect(savedCart).toHaveLength(1)
      expect(savedCart[0].name).toBe('Football Helmet')
    })
  })

  test('useEffect saves an empty cart on initial render', async () => {
    const setItemSpy = vi.spyOn(
      Storage.prototype,
      'setItem'
    )

    render(<App />)

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith(
        'cart',
        JSON.stringify([])
      )
    })

    setItemSpy.mockRestore()
  })
})