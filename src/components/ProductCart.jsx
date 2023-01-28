import React from "react";
import "../styles/ProductCart.css";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
function ProductCart({ product }) {
  const dispatch = useDispatch()
const state = useSelector(state => state)
// console.log(state)
  const { id, title, category, image, price } = product;
  return (
    <main class="container" key={id}>
      <div className="img">
        <center>
          <i>Category :{category}</i>
          <hr></hr>
          <img src={image} alt="" />
        </center>
      </div>
      <div className="details">
        <h2>{title}</h2>

        <h3>Price : {price} $</h3>
        <button class="buy-button" onClick={() => dispatch({type:'add_to_shopping_cart' ,payload:{id}})}>Buy</button>
       <div class='contoller'>
        <button class="plus-button">+</button>
        <span>0</span>
        < button class="minus-button">-</button>
        <button class="cancel-button">Cancel</button>
        </div>
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
