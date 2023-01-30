import React from "react";
import ProductCart from "./ProductCart";
import "../styles/store.css";
import axios from "axios";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
function Store({ products, loading, setLoading }) {
  // const [loading,setLoading]=useState(false)
  const dispatch = useDispatch();
  // const products = useSelector(state => state.products)
  const handleClick = (category) => {
    if (category == "--Please choose an option--") {
      return;
    }
    if (category == "all") {
      setLoading(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => dispatch({ type: "fetch", payload: res.data }))
        .then((res) => setLoading(false));
      return;
    }
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/category/" + category)
      .then((res) => dispatch({ type: "fetch", payload: res.data }))
      .then((res) => setLoading(false));
  };

  return (
    <div class="main">
      <div class="option-container">
        <label for="category-names" class="label">
          Choose a category :{" "}
        </label>
        <select
          onChange={(e) => handleClick(e.target.value)}
          name="category-names"
          class="category-names"
        >
          <option>--Please choose an option--</option>
          <option>all</option>
          <option>women's clothing</option>
          <option>jewelery</option>
          <option>electronics</option>
          <option>men's clothing</option>
        </select>
      </div>
      <>
        {!loading ? (
          <div class="container">
            {products.map((product) => {
              return <ProductCart product={product} />;
            })}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </>
      <Footer />
    </div>
  );
}

export default Store;
