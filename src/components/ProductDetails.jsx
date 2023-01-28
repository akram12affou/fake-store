import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
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
    

  return (
    <div>
      {!loading ? 
         <>{state?.map((e) => {
            return(
             <div key={e.id}>
                <p>{e.id}</p>
                </div>
            )
        })}
        </>
         : <LoadingSpinner/>}
       
    </div>
  )
}

export default ProductDetails