import axios from "axios";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import "../styles/ShoppingC.css";
function ShoppingC() {
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
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  // console.log(shoppingCart)
  let settedArr = [...new Set(shoppingCart)];
  const handleBuyClick = async(id) => {
  
    dispatch({ type: "add_to_shopping_cart", payload: id });
    settedArr = [...new Set(shoppingCart)]
    for (let i = 0; settedArr.length > i; i++) {
      const res = await axios.get(
        "https://fakestoreapi.com/products/" + settedArr[i]
      );
      totale = [...totale, [res.data.price, number(res.data.id)+1]];
      setTotal(totale);
    }
    // console.log(totale)
  };
  const handleCancelClick =async (id) => {
    setProducts(products.filter(e => e.id!==id))
    dispatch({ type: "cancel_shopping_cart", payload: id });
    for (let i = 0; settedArr.length > i; i++) {
      const res = await axios.get(
        "https://fakestoreapi.com/products/" + settedArr[i]
      );
      totale = [...totale, [res.data.price, number(res.data.id)-1]];
      setTotal(totale);
    }
    
  };
  const handleMinuslClick =async (id) => {
    console.log(number(id))
    if((number(id)) == 1){
      console.log('hy')
      handleCancelClick(id)
    }
    dispatch({ type: "minus_shopping_cart", payload: id });
    for (let i = 0; settedArr.length > i; i++) {
      const res = await axios.get(
        "https://fakestoreapi.com/products/" + settedArr[i]
      );
      totale = [...totale, [res.data.price, number(res.data.id)-1]];
      setTotal(totale);
    }
    console.log(totale)
  };

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
    return sum.toFixed(2);
  };
  return (
    <div>
      {!loading ? (
        <div class="product_containers">
          {products.map((e) => {
            return (
              <div  class="product" key={e.id}>
                <div>
                  <img src={e.image} />
                </div>
                <div>
                  <p>{e.title}</p>
                  <div class="contoller">
                    <button
                      class="plus-button"
                      onClick={() => handleBuyClick(e.id)}
                    >
                      +
                    </button>
                    <span>{number(e.id)}</span>
                   <button
                      class="minus-button"
                      onClick={() => handleMinuslClick(e.id)}
                      >
                      -
                    </button>
                    <button
                      class="cancel-button"
                      onClick={() => handleCancelClick(e.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingSpinner />
      )}

      {!loading && <p>Total : {totalsum()} $</p>}
    </div>
  );
}

export default ShoppingC;
