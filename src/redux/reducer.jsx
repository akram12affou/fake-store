
let initialState = [{
  products:[],
}
       
]
function reducer(state = initialState, { type, payload }){
  switch (type) {
  case 'fetch':
    let products = [];
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => products =res)
    return [...state, state.products= products ]
  default:
    return state
  }
}
export default reducer