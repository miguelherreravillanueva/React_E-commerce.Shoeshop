import { AiFillStar } from "react-icons/ai";
import {BsFillBagHeartFill} from "react-icons/bs";
import "../products/Products.css";
import React from 'react'

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" />
          <div className="card-detail">
            <div className="card-title">Nike Shoe</div>
            <section className="card-reviews">
              <AiFillStar /> <AiFillStar />
              <AiFillStar />  <AiFillStar />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>250€</del> 150€
              </div>
              <div className="bag">
             <BsFillBagHeartFill/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Products