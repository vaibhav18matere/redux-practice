import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChocolate } from '../redux/chocolate/chocolateAction'
import { addCake } from '../redux/cake/cakeActions'
import { addIceCream } from '../redux/icecream/iceCreamActions'
const HooksChocolateContainer = () => {
     const numOfChocolates = useSelector(state => state.chocolate.numOfChocolates)
     const dispatch = useDispatch()
     return (
          <>
               <div>No. of Chocolates : {numOfChocolates}</div>
               <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
               <button onClick={() => dispatch(addCake())}>Add Cake</button>
               <button onClick={() => dispatch(addIceCream())}>Add Ice Cream</button>
          </>
     )
}

export default HooksChocolateContainer