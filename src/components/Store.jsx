import React from 'react'
import ProductCart from './ProductCart'
function Store({products}) {
  
  // console.log(products.filter((e => e.category =="men's clothing")))
  return (
    <div>
      {products.map((product=> {
        return(
          <ProductCart product={product}/>
        )
      }))}
    </div>
  )
}

export default Store