import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIceCream, buyIceCream } from '../redux/icecream/iceCreamActions';
import { addCake } from '../redux/cake/cakeActions';

const HooksIceCreamContainer = () => {
     const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
     const dispatch = useDispatch()
     return (
          <>
               <div>No. of Ice Creams : {numOfIceCreams}</div>
               <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
               <button onClick={() => dispatch(addIceCream())}>Add Ice Cream</button>
               <button onClick={() => dispatch(addCake())}>Add Cake</button>
          </>
     )
}

export default HooksIceCreamContainer