import React ,{useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux';
function ProductDetails() {
    let {id} = useParams();
    const dispatch = useDispatch()
    const state = useSelector(state =>  state.product)
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products/' + id)
        .then(res => dispatch({type : 'fetch_one_product' ,payload : res.data}))
    },[])

  return (
    <div>
        {[state]?.map((e) => {
         
            return(
             <div key={e.id}>
                <p>{e.id}</p>
                </div>
            )
        
        })}
    </div>
  )
}

export default ProductDetails