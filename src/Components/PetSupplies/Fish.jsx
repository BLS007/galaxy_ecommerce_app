// Importing react functionality.
import React from 'react';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom';
// Importing the Fish Data.
import FishData from '../../Data/PetSupplies/FishData';

const Fish = () => {

    {/* Utilizing the Fish Data, we can implement one card entry below to make the code on this page less redundant. */}
    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4 bg-dark text-light border border-light" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} class="card-img-top" alt={item.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.title}</h5>
                    <p className="lead text-success">${item.price}</p>
                    <NavLink to={`/fish/${item.id}`} className="btn btn-outline-warning">Buy Now</NavLink>
                </div>
            </div>
        );
    };

    {/* Returning the title, borders sitting on the top and bottom of the title, followed by the individual card items from the Fish Data page. 
        The amount of cards will vary depending on the amount of data entries. */}
    return (
        <div className="position-relative bg-dark">
            <div className="container py-2 bg-dark">
                <div className="row">
                    <div className="col-12 text-center text-light">
                        <div className="row py-2 border-top border-light text-light text-center"></div>
                            <h1>Fish</h1>
                        <div className="row py-2 border-bottom border-light text-light text-center"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {FishData.map(cardItem)}
                </div>
            </div>
        </div>
    );
};

export default Fish;