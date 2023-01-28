
let initialState = {
  products:[],
  product:[]
}

function reducer(state = initialState, { type, payload }){
  switch (type) {
  case 'fetch':
    return {...state,products:payload}
  case 'fetch_one_product':
    console.log(payload)
    return {...state,product:payload}
  default:
    return state
   
  }
}
export default reducer