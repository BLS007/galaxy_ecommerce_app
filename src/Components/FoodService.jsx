// Importing react functionality.
import React from 'react';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom';

const FoodService = () => {
    
    {/* Returns the information stating that we will be launghing soon. */}
    return (
        <div className="px-4 bg-dark text-light text-center">
            <div className="container py-5">
                <img src="/images/Food_Service.png" alt="" width="200" height="200" />
                <div className="row">
                    <div className="my-4">
                        <h3>Please Stay Tuned! We're Launching Soon!</h3>
                    </div>
                    
                    {/* Possibly Insert Countdown Timer? */}

                    <div className="container">
                        <p>Please click the button below to return to the "Home" page.</p>
                        <div className="row">
                            <NavLink to="/" className="btn btn-outline-warning mb-1 w-50 mx-auto">Home</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodService;