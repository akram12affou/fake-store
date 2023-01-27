
import React,{useEffect} from "react"
import Header from "./components/Header"
import '../src/styles/App.css'
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import ShoppingC from "./components/ShoppingC"
import Store from "./components/Store"
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type : 'fetch'})
  },[])
  
  return (
    <div>
         <Header/>
         <Routes>
         <Route exact path='/' element={<Store/>}></Route>
           <Route exact path='/shoppingCart' element={<ShoppingC/>}></Route>
         </Routes>
    </div>
  )
}

export default App
