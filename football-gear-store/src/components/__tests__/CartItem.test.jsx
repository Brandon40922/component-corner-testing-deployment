import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartItem from '../CartItem'

describe('CartItem', () => {
  test('renders item information', () => {
    render(
      <CartItem
        name="Football Helmet"
        price={199.99}
        quantity={1}
        onRemove={() => {}}
      />
    )

    expect(
      screen.getByText('Football Helmet')
    ).toBeInTheDocument()

    expect(
      screen.getByText('$199.99')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Quantity: 1')
    ).toBeInTheDocument()
  })

  test('contains a Remove button', () => {
    render(
      <CartItem
        name="Football Helmet"
        price={199.99}
        quantity={1}
        onRemove={() => {}}
      />
    )

    expect(
      screen.getByRole('button', { name: /remove/i })
    ).toBeInTheDocument()
  })

  test('calls onRemove when Remove is clicked', async () => {
    const user = userEvent.setup()
    const mockRemove = vi.fn()

    render(
      <CartItem
        name="Football Helmet"
        price={199.99}
        quantity={1}
        onRemove={mockRemove}
      />
    )

    const removeButton = screen.getByRole('button', {
      name: /remove/i,
    })

    await user.click(removeButton)

    expect(mockRemove).toHaveBeenCalledTimes(1)
  })
})