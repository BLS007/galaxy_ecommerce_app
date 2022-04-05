// Importing react functionality.
import React from 'react';
// Importing the useSelector hook to take the function in as an argument 
// that returns the part of the state that you want. 
import { useSelector } from 'react-redux';
// Importing the useDispatch hook to return a reference to the dispatch function from the Redux store.
import { useDispatch } from 'react-redux';
// Importing the delItem from Redux store to handle product manipulation.
import { delItem } from '../redux/actions/index';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom';

const Cart = () => {

    {/* We get a state of addItems. */}
    const state = useSelector((state) => state.addItem);

    {/* Passing on the "useDispatch" hook to set as the dispatch. */}
    const dispatch = useDispatch();

    {/* Passing on the dispatch value to remove the item. */}
    const handleClose = (item) => {
        dispatch(delItem(item))
    };

    {/* Returning the added items to the cart. */}
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 mx-auto bg-dark text-light" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close btn-close-white float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="250px" width="250px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold text-success">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    {/* Returning the display of the cart when its empty. */}
    const emptyCart = () => {
        return (
            <div className="px-4 bg-dark text-light text-center">
                <div className="container py-5">
                    <img src="/images/Empty_Shopping_Cart.png" alt="" width="200" height="200" />
                    <div className="row">
                        <div className="my-4">
                            <h3>Your Shopping Cart Is Currently Empty!</h3>
                        </div>
                        <div className="border-top border-light py-4">
                            <p>Before you proceed to checkout, you must add some products to your shopping cart.</p>
                            <p>Please click the button below to return to the "Home" page.</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <NavLink to="/" className="btn btn-outline-warning mb-1 w-50 mx-auto">Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    {/* Returning the button that will take you to the "Checkout" page. */}
    const button = () => {
        return (
            <div className="position-relative bg-dark">
                <div className="container py-5">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-warning mb-1 w-50 mx-auto">Checkout</NavLink>
                    </div>
                </div>
            </div>
        );
    };

    {/* Returning the value of what is included in the cart. */}
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
};

export default Cart;