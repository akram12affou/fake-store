import React from 'react'
import '../styles/ProductCart.css'
function ProductCart({product}) {
   
    const {id,title,description,image,price} = product;
    // console.log(id,title,description,image,price)
  return (
    
        <main class='container' key={id}>
            <div className='img'>
            <img src={image} alt="" />
            </div>
            <div className='details'>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Price : {price} $</h3>
            </div>
        </main>
   
  )
}

export default ProductCart