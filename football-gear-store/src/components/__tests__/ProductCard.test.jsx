import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const testProduct = {
    id: 1,
    name: 'Football Helmet',
    price: 199.99,
    image: 'https://placehold.co/600x400?text=Football+Helmet',
    description:
      'A durable football helmet designed for protection and comfort.',
  }

  test('renders the product information', () => {
    render(
      <BrowserRouter>
        <ProductCard
          {...testProduct}
          onAddToCart={() => {}}
        />
      </BrowserRouter>
    )

    expect(
      screen.getByText('Football Helmet')
    ).toBeInTheDocument()

    expect(
      screen.getByText('$199.99')
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'A durable football helmet designed for protection and comfort.'
      )
    ).toBeInTheDocument()
  })

  test('contains an Add to Cart button', () => {
    render(
      <BrowserRouter>
        <ProductCard
          {...testProduct}
          onAddToCart={() => {}}
        />
      </BrowserRouter>
    )

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })

  test('calls onAddToCart when Add to Cart is clicked', async () => {
    const user = userEvent.setup()
    const mockAddToCart = vi.fn()

    render(
      <BrowserRouter>
        <ProductCard
          {...testProduct}
          onAddToCart={mockAddToCart}
        />
      </BrowserRouter>
    )

    const button = screen.getByRole('button', {
      name: /add to cart/i,
    })

    await user.click(button)

    expect(mockAddToCart).toHaveBeenCalledTimes(1)
  })
})
