import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let grandTotal = 0;

    const totalReducer = (previous, university) => previous + university.teamfee;
    grandTotal = cart.reduce(totalReducer, 0);

    // store participated university name
    let add = [];
    for (const university of cart) {
        add += university.name + " ";
    }

    return (
        <div>
            <div className="cart-style">
                <h3><FontAwesomeIcon icon={faPeopleArrows} /> Team Participate Summary</h3>
                <h5>Team Participate: {props.cart.length}</h5>
                <p>Team Fee: {"4000"}</p>
                <p>Total Fee Collected: {grandTotal}</p>
            </div>

            <div className="added-participate">
                <h3> Added Participate </h3>
                <div className="participate">
                    <h4> {add} </h4>
                </div>
            </div>

        </div>
    );
};

export default Cart;