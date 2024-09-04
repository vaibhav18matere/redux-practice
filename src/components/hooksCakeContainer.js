import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyChocolate } from '../redux/chocolate/chocolateAction'

const HooksCakeContainer = () => {
     const numOfCakes = useSelector(state => state.cake.numOfCakes)
     const dispatch = useDispatch()
     return (
          <>
               <h3>Using Hooks</h3>
               <div>No. of Cakes :  {numOfCakes}</div>
               <button onClick={() => dispatch(buyCake())}>Buy cake</button>
               <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
          </>
     )
}

export default HooksCakeContainer