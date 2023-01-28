import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
function ShoppingC() {
  // const shoppingCart = useSelector(state => state.shoppingCart)
  // console.log(shoppingCart)
  const shoppingCart =  [1, 1, 1, 1 , 2];
  let settedArr = [...new Set(shoppingCart)]
  console.log(settedArr)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/1')
  })
  return (
    <div>ShoppingC</div>
  )
}

export default ShoppingC