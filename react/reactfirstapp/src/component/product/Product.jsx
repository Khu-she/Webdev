import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  const { productId } = useParams()

  let productName
  let price

  switch (productId) {

    case '1':
      productName = 'Laptop'
      price = 50000
      break

    case '2':
      productName = 'Mobile'
      price = 25000
      break

    case '3':
      productName = 'Headphones'
      price = 5000
      break

    default:
      productName = 'Invalid Product ID'
      price = 0
  }

  return (
    <div className="container mt-4">

      <h2>Product Information</h2>

      <div className="card p-4 mt-3">

        <h4>Product ID: {productId}</h4>

        <p>Product Name: {productName}</p>

        <p>Price: ₹{price}</p>

      </div>

    </div>
  )
}

export default Product