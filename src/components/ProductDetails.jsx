import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams ,Link} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import '../styles/ProductDetails.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function ProductDetails() {
  const [loading , setLoading] = useState()
    let {id} = useParams();
    const dispatch = useDispatch()
    const state = useSelector(state =>  state.product)

    useEffect(() => {
      setLoading(true)
      axios.get('https://fakestoreapi.com/products/' + id)
        .then(res => dispatch({type : 'fetch_one_product' ,payload : res.data}))
        .then(res =>setLoading(false))
    },[])
    
   console.log(state)
   
  return (
    <div>
      {!loading ? 
         <>{state?.map((e) => {
            return(
              <>
              <span class='arrow'><Link to='/'><ArrowBackIosIcon/></Link></span>
              <section>
             
             <div class='details_containers' key={e.id}>
              
              <div class='img-p'>
              <img src={e.image}/>
              <br />
              <br />
              <p>rating : {e.rating.rate}</p>
              </div>
              <div class='title-description'>
              <p className='title'>{e.title}</p>
              
              <p className='description'>{e.description}</p>
              </div>
                
               
              </div>
              </section>
              </>
            )
        })}
        </>
         : <LoadingSpinner/>}
         
     
    </div>
  )
}

export default ProductDetails