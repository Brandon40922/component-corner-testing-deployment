import ProductCard from '../components/ProductCard'

function ProductsPage({ products, addToCart }) {
  return (
    <main>
      <h1>Featured Football Gear</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  )
}

export default ProductsPage