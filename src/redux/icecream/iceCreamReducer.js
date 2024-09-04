import { ADD_ICECREAM, BUY_ICECREAM } from "./iceCreamActions";



const initialState = {
     numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
     switch (action.type) {
          case BUY_ICECREAM: return {
               ...state,
               numOfIceCreams: state.numOfIceCreams - 1
          }
          case ADD_ICECREAM: return {
               ...state,
               numOfIceCreams: state.numOfIceCreams + 1
          }
          default: return state
     }
}

export default iceCreamReducer