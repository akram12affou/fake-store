
let initialState = [{
  products:[],
}
]
function reducer(state = initialState, { type, payload }){
  switch (type) {
  case 'fetch':
    return [...state, state[0].products= payload ]
  default:
    return state
  }
}
export default reducer