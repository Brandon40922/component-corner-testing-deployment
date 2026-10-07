import CartItem from '../components/CartItem'

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <main>
      <section className="cart-section">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                name={item.name}
                price={item.price}
                onRemove={() => removeFromCart(index)}
              />
            ))}

            <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
          </>
        )}
      </section>
    </main>
  )
}

export default CartPage