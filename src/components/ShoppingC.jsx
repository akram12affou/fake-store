import axios from "axios";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import "../styles/ShoppingC.css";
function ShoppingC() {
  const dispatch = useDispatch();
  
  const [minustotal, setMinustotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [loading, setLoading] = useState(false);
  let totale = [];
  let prod = [];
  const number = (id) => {
    let count = 0;
    for (let i = 0; shoppingCart.length > i; i++) {
      if (shoppingCart[i] == id) {
        count++;
      }
    }
    return count;
  };
  const shoppingCart = useSelector((state) => state.shoppingCart);
  let settedArr = [...new Set(shoppingCart)];
  
  const fetch = async () => {
    setLoading(true);
    for (let i = 0; settedArr.length > i; i++) {
      const res = await axios.get(
        "https://fakestoreapi.com/products/" + settedArr[i]
      );
      prod = [...prod, res.data];
      totale = [...totale, [res.data.price, number(res.data.id)]];
      setProducts(prod);
      setTotal(totale);
    }
    setLoading(false);
  };
  const handleBuy = () => {
    dispatch({type:'Cancel_All'})
    setProducts([])
    setTotal(0)
  }
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    totalsum();
  }, []);
  const totalsum = () => {
    let sum = 0;
    for (let i = 0; total.length > i; i++) {
      sum = total[i][0] * total[i][1] + sum;
    }
    return sum;
  };
  
  const handleCancel = ( id,number) => {
    const product = products.filter(e => e.id == id)
    let minustotale = product[0].price*number + minustotal
    setMinustotal(minustotale)
    const newproducts = products.filter(e => e.id !== id)
     setProducts(newproducts)
     dispatch({type:'cancel_shopping_cart',payload:id})
  }

  return (
    <div class='shopping-cart'>
      {products.length == 0 && loading == false ? (
        <center><p>Your Shopping Cart is empty</p></center>
      ) : (
        <> </>
      )}
      {!loading ? (
        <div class="product_containers">
          {products.map((e) => {
            return (
              <div class="product" key={e.id}>
                <div>
                  <img src={e.image} />
                </div>
                <div class='decri'>
                  <p>{e.title}</p>
                  <p class='quantity'>quantity : {number(e.id)}</p>
                </div>
                <div class='cancel' onClick={() =>handleCancel(e.id,number(e.id))}>X</div>
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <div class='Total-Buy-con'> 
     <div class='Total-Buy'>
      {!loading && <p>Total : {(totalsum()-minustotal).toFixed(2)} $</p>}
      {products.length !== 0 && <button onClick={handleBuy}>buy</button>}
      </div>
      </div>
    </div>
  );
}

export default ShoppingC;
