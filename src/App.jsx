import axios from "axios";
import React,{useEffect, useState} from "react"
import Header from "./components/Header"
import '../src/styles/App.css'
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import ShoppingC from "./components/ShoppingC"
import Store from "./components/Store"
import './styles/App.css'
import ProductDetails from "./components/ProductDetails";
function App() {
  const [loading,setLoading]=useState(false)
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products?limit=5')
      .then(res => dispatch({type : 'fetch' ,payload : res.data}))
      .then(res => setLoading(false))
  },[])
  
  return (
    <div className="App">
         <Header/>
         <Routes>
         <Route exact path='/' element={<Store loading={loading} products={products}/>}></Route>
        <Route exact path='/shoppingCart' element={<ShoppingC/>}></Route>
        <Route exact path='/details/:id' element={<ProductDetails/>}></Route>
         </Routes>
    </div>
  )
}

export default App
