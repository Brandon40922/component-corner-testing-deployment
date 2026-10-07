import { Link } from 'react-router-dom'
import './Header.css'

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header