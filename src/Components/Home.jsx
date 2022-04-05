// Importing react functionality.
import React from 'react';
// Importing NavLink functionality through react-router-dom.
import { NavLink } from 'react-router-dom';

const Home = () => {
  
  return (
    
    <div>

      {/* Carousel Section */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 3" className="active" aria-current="true"></button>

        </div>
        <div className="carousel-inner">

          {/* Bluetooth Speakers */}
          <div className="carousel-item active">
            <img src="/images/home/carousel_1.jpg" className="d-block w-100" alt="BluetoothSpeakers" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>Masterful & Dynamic</h1>
                <p>State of the art wireless audio systems.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/bluetoothspeakers">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

          {/* Golf */}
          <div className="carousel-item">
            <img src="/images/home/carousel_2.jpg" className="d-block w-100" alt="Golf" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>Play Like A Champion</h1>
                <p>Offering the top brands for the top player.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/golf">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

          {/* LEGO */}
          <div className="carousel-item">
            <img src="/images/home/carousel_3.jpg" className="d-block w-100" alt="Lego" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>What Will You Make?</h1>
                <p>Explore all the endless building possibilities with LEGO.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/legos">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

          {/* Women's Clothing */}
          <div className="carousel-item">
            <img src="/images/home/carousel_4.jpg" className="d-block w-100" alt="womensclothing" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>Unique & Elegant</h1>
                <p>Life is too short to wear boring clothes.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/womensclothing">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

          {/* Men's Clothing */}
          <div className="carousel-item">
            <img src="/images/home/carousel_5.jpg" className="d-block w-100" alt="mensclothing" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>Stylish & Sophisticated</h1>
                <p>Hand picked style with you in mind.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/mensclothing">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

          {/* Dog */}
          <div className="carousel-item">
            <img src="/images/home/carousel_6.jpg" className="d-block w-100" alt="dog" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>Your Dog, Our Passion</h1>
                <p>We offer the best products the keep you and your dog happy.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/dog">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

          {/* Household Cleaning */}
          <div className="carousel-item">
            <img src="/images/home/carousel_7.jpg" className="d-block w-100" alt="householdcleaning" />
            <div className="container">
              <div className="carousel-caption text-start text-dark">
                <h1>When It Has To Be Clean</h1>
                <p>Your clean home is our business.</p>
                <p><NavLink className="btn btn-lg btn-warning" to="/householdcleaning">Shop Now</NavLink></p>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon btn btn-warning" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon btn btn-warning" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Body of the page that contains the promotions, features & offsetted features.  */}
      <body className="d-flex h-100 text-white bg-dark">

        {/* Container that provides additional layout customization. */}
        <div className="container w-100 h-100 mx-auto flex-column">

          {/* Promotions Section */}
          <div className="row py-4 text-light text-center bg-dark">
            <div className="position-relative w-100 p-md-2 text-center bg-dark">
              <div className="col-md-12 mx-auto my-5">
                <h1 className="display-3 fw-normal text-light">Important News!</h1>
                <p className="lead fw-normal text-light">We will be adding a Food Service to our website allowing you to order fresh groceries!</p>

                <div className="row">
                  <NavLink to="/foodservice" className="btn btn-lg btn-warning my-2 w-25 mx-auto">Coming Soon</NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Page Break. */}
          <div className="row border-top border-light text-light text-center" />

          {/* Features Section */}
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

            {/* Collectible Card Games Feature */}
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white border-white bg-dark bg-image rounded-5 shadow-lg">
                <img className="card-img" src="/images/home/feature_collectiblecardgames.png" alt="sportsnutritionimage" />
                <div className="card-img-overlay">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-4 mt-5 mb-4 display-6 fw-bold text-center text-dark">Collectible Card Games</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src="/images/Galaxy_Logo.png" alt="galaxylogo" width="50" height="50" />
                      </li>
                      <li className="d-flex align-items-center">
                        <p><NavLink className="btn btn-lg btn-warning" to="/collectiblecardgames">Shop Now</NavLink></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fish Feature */}
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white border-white bg-dark bg-image rounded-5 shadow-lg">
                <img className="card-img" src="/images/home/feature_fish.png" alt="sportsnutritionimage" />
                <div className="card-img-overlay">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-4 mt-5 mb-4 display-6 fw-bold text-center text-dark">Fish & Fish Supplies</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src="/images/Galaxy_Logo.png" alt="galaxylogo" width="50" height="50" />
                      </li>
                      <li className="d-flex align-items-center">
                        <p><NavLink className="btn btn-lg btn-warning" to="/fish">Shop Now</NavLink></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports Nutrition Feature */}
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-white border-white bg-dark bg-image rounded-5 shadow-lg">
                <img className="card-img" src="/images/home/feature_sportsnutrition.png" alt="sportsnutritionimage" />
                <div className="card-img-overlay">
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-4 mt-5 mb-4 display-6 fw-bold text-center text-dark">Sports Nutrition</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto">
                        <img src="/images/Galaxy_Logo.png" alt="galaxylogo" width="50" height="50" />
                      </li>
                      <li className="d-flex align-items-center">
                        <p><NavLink className="btn btn-lg btn-warning" to="/sportsnutrition">Shop Now</NavLink></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Page Break. */}
          <div className="row py-3 border-top border-light text-light text-center" />

          {/* Offsetted Feature. */}
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="py-3">Explore Our Selection of TV's!</h2>
              <p className="lead py-3">The difference is in the details! Our 4K TV's have four times the resolution of Full HD, lifelike color and contrast, these TV's will make your home theater experience truly cinematic!</p>
              <li className="d-flex align-items-center justify-content-center">
                <p><NavLink className="btn btn-lg btn-warning" to="/tvs">Shop Now</NavLink></p>
              </li>
            </div>
            <div className="col-md-5">
              <img src="/images/home/featurette_tv.png" alt="galaxylogo" width="500" height="500" />
            </div>
          </div>

          {/* Page Break. */}
          <div className="row my-4 border-top border-light text-light text-center" />

          {/* Offsetted Feature. */}
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-7 order-md-2 text-center">
              <h2 className="py-3">Explore Our Galaxy Store Exclusive Action Figures!</h2>
              <p className="lead py-3">Everyone is a fan of something! We carry a wide range of action figures to fulfill your nostalgic needs!</p>
              <li className="d-flex align-items-center justify-content-center">
                <p><NavLink className="btn btn-lg btn-warning" to="/actionfigures">Shop Now</NavLink></p>
              </li>
            </div>
            <div className="col-md-5">
              <img src="/images/home/featurette_actionfigure.png" alt="galaxylogo" width="500" height="500" />
            </div>
          </div>

          {/* Page Break. */}
          <div className="row my-3" />

        </div>
      </body>

    </div>
  );
};

export default Home;
