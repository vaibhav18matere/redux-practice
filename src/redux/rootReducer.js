// here all reducers will be imported and we use
// "combineReducer" built -in method to combine all
// this "rootReducer then passed as an argument to 
// "createStore() method" in main store.js" file.

import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";

const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer,
     chocolate: chocolateReducer
});

export default rootReducer;