// Importing react functionality.
import React from 'react';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom'

const Footer = () => {

  {/* Returns links to the individual product pages, logo, and copyright label. */}
  return (
    <nav className="bg-dark">
      <div className="container">
        <footer>
          <div className="row py-4 border-top border-light">

            <div className="col-2 text-light">
              <h5>Electronics</h5>
              <ul className="nav flex-column text-light">
                <li className="nav-item mb-2"><NavLink to="/smartphones" className="nav-link p-0 text-muted">Smartphones</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/headphones" className="nav-link p-0 text-muted">Headphones</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/tvs" className="nav-link p-0 text-muted">TV's</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/bluetoothspeakers" className="nav-link p-0 text-muted">Bluetooth Speakers</NavLink></li>
              </ul>
            </div>

            <div className="col-2 text-light">
              <h5>Sporting Goods</h5>
              <ul className="nav flex-column text-light">
                <li className="nav-item mb-2"><NavLink to="/golf" className="nav-link p-0 text-muted">Golf</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/basketball" className="nav-link p-0 text-muted">Basketball</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/football" className="nav-link p-0 text-muted">Football</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/soccer" className="nav-link p-0 text-muted">Soccer</NavLink></li>
              </ul>
            </div>

            <div className="col-2 text-light">
              <h5>Toys</h5>
              <ul className="nav flex-column text-light">
                <li className="nav-item mb-2"><NavLink to="/legos" className="nav-link p-0 text-muted">LEGO</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/boardgames" className="nav-link p-0 text-muted">Board Games</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/actionfigures" className="nav-link p-0 text-muted">Action Figures</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/collectiblecardgames" className="nav-link p-0 text-muted">Collectible Card Games</NavLink></li>
              </ul>
            </div>

            <div className="col-2 text-light">
              <h5>Clothing</h5>
              <ul className="nav flex-column text-light">
                <li className="nav-item mb-2"><NavLink to="/womensclothing" className="nav-link p-0 text-muted">Women's Clothing</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/womensshoes" className="nav-link p-0 text-muted">Women's Shoes</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/mensclothing" className="nav-link p-0 text-muted">Men's Clothing</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/mensshoes" className="nav-link p-0 text-muted">Men's Shoes</NavLink></li>
              </ul>
            </div>

            <div className="col-2 text-light">
              <h5>Pet Supplies</h5>
              <ul className="nav flex-column text-light">
                <li className="nav-item mb-2"><NavLink to="/dog" className="nav-link p-0 text-muted">Shop by Dog</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/cat" className="nav-link p-0 text-muted">Shop by Cat</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/fish" className="nav-link p-0 text-muted">Shop by Fish</NavLink></li>
              </ul>
            </div>

            <div className="col-2 text-light">
              <h5>Health & Household</h5>
              <ul className="nav flex-column text-light">
                <li className="nav-item mb-2"><NavLink to="/laundry" className="nav-link p-0 text-muted">Laundry</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/householdcleaning" className="nav-link p-0 text-muted">Household Cleaning</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/tissuesandtoiletpaper" className="nav-link p-0 text-muted">Tissues & Toilet Paper</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/healthcare" className="nav-link p-0 text-muted">Health & Personal Care</NavLink></li>
                <li className="nav-item mb-2"><NavLink to="/sportsnutrition" className="nav-link p-0 text-muted">Sports Nutrition</NavLink></li>
              </ul>
            </div>

          </div>

          <div className="row py-4 border-top border-light text-light text-center">
            <div class="navbar-brand my-4" to="/">
              <a href="http://localhost:3000/">
                <img src="/images/Galaxy_Logo.png" alt="galaxylogo" width="60" height="60" />
              </a>
            </div>
            <p>© 2022 Galaxy, Inc. All rights reserved.</p>
          </div>

        </footer>
      </div>
    </nav>
  );
};

export default Footer;