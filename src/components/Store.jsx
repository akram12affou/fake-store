import React ,{useEffect,useLayoutEffect,useState} from "react";
import ProductCart from "./ProductCart";
import "../styles/store.css";
import axios from "axios";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
function Store({ products, loading, setLoading }) {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const  [show,setShow]=useState(false)
const number = [...new Set(useSelector(state => state.shoppingCart))].length
const [lastnum,setLastnum] = useState(number+1)  
console.log(number)
  useEffect(() => {
    if (skip) setSkip(false);
    if (!skip){
      if(number){
 
        setLastnum(number)
        if(number<lastnum){
          return;
        }
        setLastnum(number)
        console.log(number,lastnum)
        number!==0 ? setShow(true) : null
        setTimeout(() => {
          setShow(false)
        },1000)
      
      }
    }

  },[number])
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
      {show && <div class="Alert">
      <Alert >
          Product Added succesfully 
      </Alert>
      </div>}
      <div class="option-container">
        <label  class="label">
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
      <div class='prod_cont'>
        {!loading ? (
          <>
            {products.map((product) => {
              return <ProductCart product={product} />;
            })}
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Store;
