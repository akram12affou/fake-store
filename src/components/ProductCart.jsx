import React, { useState } from "react";
import "../styles/ProductCart.css";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function ProductCart({ product }) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  // console.log(shoppingCart)

  const handleBuyClick = (id) => {
  
    dispatch({ type: "add_to_shopping_cart", payload: id });
  };
  const handleCancelClick = (id) => {
    dispatch({ type: "cancel_shopping_cart", payload: id });
  }
  const handleMinuslClick = (id) => {
    dispatch({ type: "minus_shopping_cart", payload: id });
  }
 
  const number = (num) => {
    let count = 0;
    for (let i = 0; shoppingCart.length > i; i++) {
      if (shoppingCart[i] == num) {
        count++;
      }
    }
    return count;
  };
  const show = (num) => {
    let count = 0;
    for (let i = 0; shoppingCart.length > i; i++) {
      if (shoppingCart[i] == num) {
        count++;
      }
    }
    if (count == 0) {
      return false;
    }
    return true;
  };

  const { id, title, category, image, price } = product;
  return (
    <main class='cart' key={id}>
      <div className="img">
        <center>
          <i>Category :{category}</i>
          <hr></hr>
          <img src={image} alt="" />
        </center>
      </div>
      <div class="details">
        <h2 class='title'>{title}</h2>

        <h3 class="price">Price : {price} $</h3>
        {!show(id) && <div class="contoller"><button class="buy-button" onClick={() => handleBuyClick(id)}>
          Add to Cart
        </button> </div>}
        {show(id) &&
        <div class="contoller">
          <button class="plus-button" onClick={() => handleBuyClick(id)}>+</button>
          <span>{number(id)}</span>
          <button class="minus-button" onClick={() => handleMinuslClick(id)}>-</button>
          <button class="cancel-button" onClick={() => handleCancelClick(id)}>Cancel</button>
        </div>}
      </div>
      <div class="info">
        <InfoIcon />
        <Link to={`./details/` + id}>
          <a href="">Details</a>
        </Link>
      </div>
    </main>
  );
}

export default ProductCart;
