import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
function ShoppingC() {
  const shoppingCart = useSelector(state => state.shoppingCart)
  const [products,setProducts] = useState([])
  const [total,setTotal] = useState([])
  const [loading,setLoading] = useState(false)
  let totale = [];
  let settedArr = [...new Set(shoppingCart)]
  let prod = [];
  const number = (id) => {
    let count=0
    for(let i = 0;shoppingCart.length > i ; i++){
      if(shoppingCart[i]==id){
        count++;
      }
   
    }
    return count;
  }
  useEffect(async () => {
    setLoading(true)
    for(let i =0 ; settedArr.length > i;i++){
      const res = await axios.get('https://fakestoreapi.com/products/' + settedArr[i])
        prod = [...prod,res.data]
        totale = [...totale,[res.data.price ,number(res.data.id)]]
        setProducts(prod)
        setTotal(totale)
      }
      
    }
  ),[])
  
  const totalsum = () => {
    let sum = 0;
    for(let i =0;total.length>i;i++){
      sum = total[i][0]*total[i][1] +sum;
    }
    return sum.toFixed(2)
    
  }
  totalsum()
  return (
    <div>
      {products.map((e=> {
        return(
          <div>
          product : {e.id}
           \\ <>number :  {number(e.id)}</>
          </div>
        )
  
      }))}
      <p>Total : {totalsum()} $</p>
    </div>
  )
}

export default ShoppingC