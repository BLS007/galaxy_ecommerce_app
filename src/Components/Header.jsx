// Importing react functionality.
import React from 'react';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom';
// Importing the Cart Button.
import CartBtn from './Buttons/CartBtn';
// Importing the Login Button.
import Login from './Buttons/Login';
// Importing the Sign Up Button.
import Signup from './Buttons/Signup';


function Header() {
    
    {/* Returns two separate navbars. The first one containing the logo, search bar, and Login, Sign Up, and Cart Buttons. The second containing the dropdowns for the individual product pages. */}
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark d-flex">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="firstNavbar">
                        <div className="navbar-brand">
                            <a href="http://localhost:3000/">
                                <img src="/images/Galaxy_Logo.png" alt="galaxylogo" width="60" height="60" />
                            </a>
                        </div>
                        <div className="col flex-fill">
                            <form className="d-flex gap-1">
                                <input className="form-control form-control-lg" type="search" placeholder="" aria-label="Search"  />
                                <button className="btn btn-lg btn-warning fa fa-search" type="submit"></button>
                            </form>
                        </div>
                        <Login />
                        <Signup />
                        <CartBtn />
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="secondNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/">Home</NavLink>
                            </li>
                            {/* Electronics Section */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Electronics</a>
                                <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown07XL">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/smartphones">Smartphones</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/headphones">Headphones</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/tvs">TV's</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/bluetoothspeakers">Bluetooth Speakers</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/* Sporting Goods Section */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Sporting Goods</a>
                                <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown07XL">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/golf">Shop by Golf</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/basketball">Shop by Basketball</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/football">Shop by Football</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/soccer">Shop By Soccer</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/* Toys Section */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Toys</a>
                                <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown07XL">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/legos">LEGO</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/boardgames">Board Games</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/actionfigures">Action Figures</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/collectiblecardgames">Collectible Card Games</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/* Clothing Section */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Clothing</a>
                                <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown07XL">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/womensclothing">Women's Clothing</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/womensshoes">Women's Shoes</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/mensclothing">Men's Clothing</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/mensshoes">Men's Shoes</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/* Pet Supplies Section */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Pet Supplies</a>
                                <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown07XL">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/dog">Shop by Dog</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/cat">Shop by Cat</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/fish">Shop by Fish</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/* Health & Household Section */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-light" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Health & Household</a>
                                <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown07XL">
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/laundry">Laundry</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/householdcleaning">Household Cleaning</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/tissuesandtoiletpaper">Tissues & Toilet Paper</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/healthcare">Health & Personal Care</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink className="nav-link text-light" aria-current="page" to="/sportsnutrition">Sports Nutrition</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;