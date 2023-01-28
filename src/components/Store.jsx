import React from 'react'
import ProductCart from './ProductCart'
import '../styles/store.css'
import LoadingSpinner from './LoadingSpinner'
function Store({products,loading}) {
  // console.log(products.filter((e => e.category =="men's clothing")))
  return (
    <div class='main' >
    Categorie :
    <>
   {!loading ? 
   <div class='container'>
      {products.map((product=> {
        return(
          <ProductCart product={product}/>
        )
  
      }))}
        </div> : <LoadingSpinner/>}
      </>
 
    </div>
  )
}

export default Store