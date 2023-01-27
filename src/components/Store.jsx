import React from 'react'
import ProductCart from './ProductCart'
import '../styles/store.css'
function Store({products}) {
   console.log(products)
  // console.log(products.filter((e => e.category =="men's clothing")))
  return (
    <div >
    Categorie :
    <div class='container'>
      {products.map((product=> {
        return(
          <ProductCart product={product}/>
        )
      }))}
    </div>
    </div>
  )
}

export default Store