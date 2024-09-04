import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChocolate } from '../redux/chocolate/chocolateAction'

const HooksChocolateContainer = () => {
     const numOfChocolates = useSelector(state => state.chocolate.numOfChocolates)
     const dispatch = useDispatch()
     return (
          <>
               <div>No. of Chocolates : {numOfChocolates}</div>
               <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
          </>
     )
}

export default HooksChocolateContainer