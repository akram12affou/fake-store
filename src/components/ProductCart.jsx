import React from 'react'
import '../styles/ProductCart.css'
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
function ProductCart({product}) {
   
    const {id,title,category,image,price} = product;
  return (
    
        <main class='container' key={id}>
            <div className='img'>
            
                <center>
                <i>Category :{category}</i>
                <hr></hr>
               <img src={image} alt="" />
            </center>
            </div>
            <div className='details'>
             <h2>{title}</h2>
             
             <h3>Price : {price} $</h3>
             <button>Buy</button>
             <hr />
             <div class="info">
             <InfoIcon/><Link to={`./details/` + id}><a href="">Details</a></Link>
             
             <div>
             
             </div>
            </div>
            
            </div>
        </main>
   
  )
}

export default ProductCart