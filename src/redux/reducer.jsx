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
    return {...state,shoppingCart:[...state.shoppingCart,payload]}
  case 'cancel_shopping_cart':
    let newarr = []
    for(let i =0 ;state.shoppingCart.length > i ; i++ ){
        if(state.shoppingCart[i] !== payload){
          newarr.push(state.shoppingCart[i])
        }
    }
    return {...state,shoppingCart:newarr}
    case 'minus_shopping_cart':
      let arr = [];
      let index = state.shoppingCart.indexOf(payload)
      for(let i =0 ;state.shoppingCart.length > i ; i++ ){
        if(i !== index){
          arr.push(state.shoppingCart[i])
        }
    }
      return {...state,shoppingCart:arr}
      case 'Cancel_All':
        return {...state,shoppingCart:[]}
  default:
    return state
   
  }
}
export default reducer