import axios from "axios";
import React,{useEffect} from "react"
import Header from "./components/Header"
import '../src/styles/App.css'
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import ShoppingC from "./components/ShoppingC"
import Store from "./components/Store"
import './styles/App.css'
function App() {
  const dispatch = useDispatch()
  const products = useSelector(state => state[0].products)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => dispatch({type : 'fetch' ,payload : res.data}))
  },[])
  
  return (
    <div className="App">
         <Header/>
         <Routes>
         <Route exact path='/' element={<Store products={products}/>}></Route>
           <Route exact path='/shoppingCart' element={<ShoppingC/>}></Route>
         </Routes>
    </div>
  )
}

export default App
