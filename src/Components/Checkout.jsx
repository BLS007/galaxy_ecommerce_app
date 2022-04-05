// Importing react functionality.
import React from 'react';
// Importing the useSelector hook to take the function in as an argument 
// that returns the part of the state that you want. 
import { useSelector } from 'react-redux';

const Checkout = () => {


    const state = useSelector((state) => state.addItem);

    var total = 0;

    {/* Calculates the amount of items that are in the cart followed by the title of the item, the price, and the total price of the order. */}
    const itemList = (item) => {

        total = total + item.price;

        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    };

    return (
        <>
            <div className="position-relative bg-dark">
                <div className="container bg-dark text-light">
                    <div className="row g-5">

                        {/* Returns the amount of items that are in the cart followed by the title of the item, the price, and the total price of the order. */}
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-warning">Order Summary</span>
                                <span className="badge bg-warning rounded-pill text-dark">{state.length}</span>
                            </h4>
                            <ul className="list-group mb-3">
                                {state.map(itemList)}

                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD):</span>
                                    <strong>${total}</strong>
                                </li>
                            </ul>

                            <form className="card p-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo Code" />
                                    <button type="submit" className="btn btn-warning">Redeem</button>
                                </div>
                            </form>
                        </div>

                        {/* Returns the form (using form validation) that requires you to fill out your Billing Address and Payment Information. */}
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Billing Address</h4>
                            <form className="needs-validation was-validated" novalidate>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label for="firstName" className="form-label">First Name:</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="John" required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="lastName" className="form-label">Last Name:</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="email" className="form-label">Email: <span className="text-muted"></span></label>
                                        <input type="email" className="form-control" id="email" placeholder="john.doe123@gmail.com" required />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address" className="form-label">Address:</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main Street" required />
                                        <div className="invalid-feedback">
                                            Please enter a valid shipping address.
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <label for="country" className="form-label">Country:</label>
                                        <select className="form-select" id="country" required >
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label for="state" className="form-label">State:</label>
                                        <select className="form-select" id="state" required >
                                            <option value="">Choose...</option>
                                            <option>Alabama</option>
                                            <option>Alaska</option>
                                            <option>Arizona</option>
                                            <option>Arkansas</option>
                                            <option>California</option>
                                            <option>Colorado</option>
                                            <option>Connecticut</option>
                                            <option>Delaware</option>
                                            <option>Florida</option>
                                            <option>Georgia</option>
                                            <option>Hawaii</option>
                                            <option>Idaho</option>
                                            <option>Illinois</option>
                                            <option>Indiana</option>
                                            <option>Iowa</option>
                                            <option>Kansas</option>
                                            <option>Kentucky</option>
                                            <option>Louisiana</option>
                                            <option>Maine</option>
                                            <option>Maryland</option>
                                            <option>Massachusetts</option>
                                            <option>Michigan</option>
                                            <option>Minnesota</option>
                                            <option>Mississippi</option>
                                            <option>Missouri</option>
                                            <option>Montana</option>
                                            <option>Nebraska</option>
                                            <option>Nevada</option>
                                            <option>New Hampshire</option>
                                            <option>New Jersey</option>
                                            <option>New Mexico</option>
                                            <option>New York</option>
                                            <option>North Carolina</option>
                                            <option>North Dakota</option>
                                            <option>Ohio</option>
                                            <option>Oklahoma</option>
                                            <option>Oregon</option>
                                            <option>Pennsylvania</option>
                                            <option>Rhode Island</option>
                                            <option>South Carolina</option>
                                            <option>South Dakota</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Utah</option>
                                            <option>Vermont</option>
                                            <option>Virginia</option>
                                            <option>Washington</option>
                                            <option>West Virginia</option>
                                            <option>Wisconsin</option>
                                            <option>Wyoming</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="zip" className="form-label">Zip Code:</label>
                                        <input type="text" className="form-control" id="zip" placeholder="12345" required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <div className="my-4 border-top border-white" />

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" nonrequired />
                                    <label className="form-check-label text-white" for="same-address">My shipping address is the same as my billing address.</label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" nonrequired />
                                    <label className="form-check-label text-white" for="save-info">Please save this information for next time.</label>
                                </div>

                                <div className="my-4 border-top border-white" />

                                <h4 className="mb-3">Payment Method</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="credit">Credit card</label>
                                        <div className="invalid-feedback">
                                            Please select a payment option.
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="debit">Debit card</label>
                                        <div className="invalid-feedback">
                                            Please select a payment option.
                                        </div>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label for="cc-name" className="form-label">Name On Card:</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Please provide your full name as displayed on card.</small>
                                        <div className="invalid-feedback">
                                            Name on card is required.
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="cc-number" className="form-label">Credit Card Number:</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="XXXX-XXXX-XXXX-XXXX" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="cc-expiration" className="form-label">Expiration Date:</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="01/22" required />
                                        <div className="invalid-feedback">
                                            Expiration date required.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="cc-cvv" className="form-label">CVV:</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required.
                                        </div>
                                    </div>
                                </div>

                                <div className="my-4 border-top border-white" />

                                <button className="w-100 btn btn-warning btn-lg mb-4" type="submit">Submit Payment</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;