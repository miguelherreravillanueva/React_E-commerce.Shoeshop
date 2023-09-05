import "../sidebar/Sidebar.css"
import React from 'react'
import Category from "./category/Category"
import Price from "./price/Price"
import Colours from "./colours/Colours"

const Sidebar = ({ handleChange }) => {
    return (
        <>
      <section className="sidebar">
        <div className="logo-container">
          <img src="https://img.freepik.com/vector-premium/diseno-plantilla-logotipo-tienda-zapatos_316488-452.jpg?w=740" alt="" />
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colours handleChange={handleChange} />
      </section>
    </>
    )
}

export default Sidebar