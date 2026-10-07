function CartItem({ name, price, onRemove }) {
    return (
      <div className="cart-item">
        <div className="cart-item-info">
          <h3>{name}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
  
        <button onClick={onRemove}>
          Remove
        </button>
      </div>
    )
  }
  
  export default CartItem