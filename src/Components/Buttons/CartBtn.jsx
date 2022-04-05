// Importing react functionality.
import React from 'react';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom';
// Importing the useSelector hook to take the function in as an argument 
// that returns the part of the state that you want. 
import { useSelector } from 'react-redux';

const CartBtn = () => {
   
    {/* We get a state of addItems. */}
    const state = useSelector((state)=> state.addItem)

    {/* Returns the button with the value of the amount of items added or removed from the cart utilizing "state.length". */}
    return (
        <>
            <NavLink to="/cart" className="btn btn-lg btn-outline-warning ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </>
    );
};

export default CartBtn;