
let initialState = {
  products:[],
  product:[],
  shoppingCart:[]
}

function reducer(state = initialState, { type, payload }){
  switch (type) {
  case 'fetch':
    return {...state,products:payload}
  case 'fetch_one_product':
    return {...state,product:[payload]}
  case 'add_to_shopping_cart':
      let newShoppingCart = state.shoppingCart;
      
      console.log(payload.id)
      newShoppingCart.push(payload.id)
   
      let shoppingCartSorted=[...new Set(newShoppingCart)];
      console.log(newShoppingCart,shoppingCartSorted)
      for (let i = 0; i < newShoppingCart.length; i++) {
       console.log(newShoppingCart[i])
        
      }
      
      
     
      
      
      // console.log(newShoppingCart,shoppingCartSorted)
    
    return state
    // console.log(payload,state.shoppingCart)
    // return {...state,shoppingCart:[...state.shoppingCart ,[payload,{hy:'hy'}]]}
  default:
    return state
   
  }
}
export default reducer