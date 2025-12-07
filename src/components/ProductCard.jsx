import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Alert from './Alert'

export default function ProductCard({ product }) {
  const { addItem } = useContext(CartContext)
  const [showAlert, setShowAlert] = useState(false)

  function handleAdd() {
    addItem(product)
    setShowAlert(true)
  }

  return (
    <article className="card">
      <img src={product.imageURL} alt={product.name} />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-price">${product.price.toFixed(2)}</div>

        <button style={{ marginTop: 8 }} onClick={handleAdd}>
          Add to cart
        </button>

        {showAlert && (
          <Alert
            message={`${product.name} added to cart!`}
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    </article>
  )
}
