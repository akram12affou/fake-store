import React from 'react'
import '../styles/ProductCart.css'
import InfoIcon from '@mui/icons-material/Info';
function ProductCart({product}) {
   
    const {id,title,description,category,image,price} = product;
    // console.log(id,title,description,image,price)
  return (
    
        <main class='container' key={id}>
            <div className='img'>
            
                <center>
                Category :<i>{category}</i>
            <img src={image} alt="" />
            </center>
            </div>
            <div className='details'>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
            
            <h3>Price : {price} $</h3>
            <div class="info">
            <InfoIcon/><a href="">Details</a>
            </div>
            </div>
        </main>
   
  )
}

export default ProductCart