import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ id, name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p className="price">${price}</p>

      <p>{description}</p>

      <Link to={`/products/${id}`}>
        View Details
      </Link>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard