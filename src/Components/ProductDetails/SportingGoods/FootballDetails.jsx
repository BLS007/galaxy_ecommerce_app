// Importing react functionality.
import React from 'react';
// Importing the useParams hook to return an object of key/value pairs of URL parameters.
import { useParams } from 'react-router';
// Importing the useState hook that will allow me to add React state variables in functional components.
import { useState } from 'react';
// Importing the Football Data.
import FootballData from '../../../Data/SportingGoods/FootballData';
// Importing the useDispatch hook to return a reference to the dispatch function from the Redux store.
import { useDispatch } from 'react-redux';
// Importing the addItem and delItem from Redux store to handle product manipulation.
import { addItem, delItem } from '../../../redux/actions/index';

const FootballDetails = () => {

    {/* Assigning the cart button a value (cartBtn) while also creating a variable (setCartBtn) of the cart button to pass a message to add or remove from cart. */}
    const [cartBtn, setCartBtn] = useState("Add to Cart");

    {/* Now we need a product ID, which is passed from the Product page. */}
    const proid = useParams();
    const proDetail = FootballData.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    {/* We need to store useDispatch in a variable. */}
    const dispatch = useDispatch();

    {/* If Else statement that changes the text on the button to either add or remove the item from the cart. */}
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    };

    {/* Returning the selected product image, title, price and description. */}
    return (
        <>
            <div className="position-relative bg-dark text-light">
                <div className="d-flex container py-5 bg-dark">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center mx-auto product">
                            <img src={product.img} alt={product.title} height="500px" />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1 className="display-5 fw-bold">{product.title}</h1>
                            <hr />
                            <h2 className="my-2 text-success">${product.price}</h2>
                            <hr />
                            <p>{product.desc}</p>
                            <button onClick={() => handleCart(product)} className="btn btn-outline-warning my-5">{cartBtn}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FootballDetails;