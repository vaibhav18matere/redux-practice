import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/icecream/iceCreamActions';

const HooksIceCreamContainer = () => {
     const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
     const dispatch = useDispatch()
     return (
          <>
               <div>No. of Ice Creams : {numOfIceCreams}</div>
               <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
          </>
     )
}

export default HooksIceCreamContainer