import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    //let totalQuantity = 0;
    let grandTotal = 0 ;
    const totalReducer = (previous, university) => previous + university.teamfee;
    grandTotal = cart.reduce(totalReducer, 0);

    //const quantityReducer = (previous, university) => previous + university.quantity;
    //totalQuantity = cart.reduce(quantityReducer,0);

    return (
        <div className="cart-style">
            <h3><FontAwesomeIcon icon = {faPeopleArrows} /> Team Participate Summary</h3>
            <h5>Team Participate: {props.cart.length}</h5>
            <p>Team Fee: {"4000"}</p>
            <p>Total Fee Collected: {grandTotal}</p>
        </div>
    );
};

export default Cart;