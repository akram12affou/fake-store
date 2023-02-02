import React,{useState} from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    const number = [...new Set(useSelector(state => state.shoppingCart))].length
    
    const [open , setIsopen] = useState(false)
    const css = `.hum::before{
        transform: rotate(-45deg);
   }
   .hum::after{
    transform: rotate(45deg);
   }`
   
   
  return (
    <>
    <div className='header'>
       <div>
         <h1 className='header_logo'>Fake Store </h1>
       </div>
       <div className='header_button-container'>
       <Link to=''><button>Store</button></Link>
       <Link to='shoppingCart'><button>Shopping Cart {number>0 &&<p> {number}</p>}</button></Link> 
       </div>
       <div onClick={() => setIsopen(!open)} 
        className='hum_count'>
         <div className="hum" style={{
            background: open &&'rgb(160, 197, 50,0)'
        }
            }>
                {open && <style>
                    {css}
                        
                    
                </style>}
            
         </div>
       </div>
       
    </div>
    <div className='menu' style={{transform: open &&  'translateX(0)'}}>
    <Link to=''><button>Store</button></Link>
    <Link to='shoppingCart'><button>Shopping Cart{number>0 &&<p> {number}</p>}</button></Link>
    </div>
    </>
  )
}

export default Header