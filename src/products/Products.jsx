import "../products/Products.css";
import React from 'react'

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  )
}

export default Products