import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'

function App() {
  // Loads the shopping cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Saves the shopping cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const products = [
    {
      id: 1,
      name: "Football Helmet",
      price: 199.99,
      image: "https://placehold.co/600x400?text=Football+Helmet",
      description: "A durable football helmet designed for protection and comfort."
    },
    {
      id: 2,
      name: "Football Gloves",
      price: 39.99,
      image: "https://placehold.co/600x400?text=Football+Gloves",
      description: "High-grip football gloves to help you secure every catch."
    },
    {
      id: 3,
      name: "Football Cleats",
      price: 89.99,
      image: "https://placehold.co/600x400?text=Football+Cleats",
      description: "Lightweight football cleats built for speed and traction."
    },
    {
      id: 4,
      name: "Shoulder Pads",
      price: 149.99,
      image: "https://placehold.co/600x400?text=Shoulder+Pads",
      description: "Protective shoulder pads designed for comfort and impact protection."
    },
    {
      id: 5,
      name: "Football",
      price: 29.99,
      image: "https://placehold.co/600x400?text=Football",
      description: "A durable football designed for practices and game day."
    },
    {
      id: 6,
      name: "Mouthguard",
      price: 14.99,
      image: "https://placehold.co/600x400?text=Mouthguard",
      description: "A comfortable mouthguard designed to help protect your teeth."
    }
  ]

  // Adds a product to the shopping cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Removes an item from the shopping cart
  const removeFromCart = (indexToRemove) => {
    setCart(
      cart.filter((item, index) => index !== indexToRemove)
    )
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          storeName="Football Gear Store"
          cartCount={cart.length}
        />

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProductDetailPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer
          storeName="Football Gear Store"
          email="footballgear@example.com"
        />
      </div>
    </BrowserRouter>
  )
}

export default App