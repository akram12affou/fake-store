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
      {products.length == 0 && loading==false  ? <p>Your Shopping Cart is empty</p>: <> </>}
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
                  <p>quantity : {number(e.id)}</p>
                  </div>
              
              </div>
            );
          })}
        </div>
        
      ) : (
        <LoadingSpinner />
      )}

      {!loading && <p>Total : {totalsum()} $</p>}
      <button>buy</button>
     
    </div>
  );
}

export default ShoppingC;
