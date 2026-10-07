import { useParams, Link } from 'react-router-dom'

function ProductDetailPage({ products, addToCart }) {
  const { id } = useParams()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  if (!product) {
    return (
      <main>
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </main>
    )
  }

  return (
    <main className="product-detail">
      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>${product.price.toFixed(2)}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <p>
        <Link to="/products">Back to Products</Link>
      </p>
    </main>
  )
}

export default ProductDetailPage