import React from 'react'
import { buyCake } from '../redux/cake/cakeActions';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
     return (
          <>
               <h3>Using connect() method</h3>
               <div>No. of cakes : {props.numOfCakes}</div>
               <button onClick={props.buyCake}>Buy cake</button>
          </>
     )
}

const mapStateToProps = state => {
     return {
          numOfCakes: state.numOfCakes
     }
}

const mapDispatchToProps = dispatch => {
     return {
          buyCake: () => dispatch(buyCake())
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)