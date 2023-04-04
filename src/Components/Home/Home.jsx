import React from "react";
import "./HomeStyles.scss";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div>
      <div className="content-container">
        <div className="mens-container">
          <h3 className="content-quote">THE BALANCE OF OPPOSITES</h3>
          <ul className="list">
            <li>
              <NavLink to="/mens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/Mens-pics/pic1.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>MEN'S NEW ARRIVALS</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/Mens-pics/pic2.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>MEN'S PANTS</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/Mens-pics/pic3.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>MEN'S TEES</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/Mens-pics/pic4.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>MEN'S SPORT</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="camera-ad">
          <div className="text-overlay">
            <h2>NEW CAMERAS</h2>
            <h3>BETTER PHOTOS ARE ON THE WAY</h3>
            <NavLink className="camera-button" to="/electronics">
              <button>SHOP NOW</button>
            </NavLink>
          </div>
        </div>
        <div className="womens-container">
          <ul className="list">
            <li>
              <NavLink to="/womens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/womens-pics/w1.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>WOMEN'S NEW ARRIVALS</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/womens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/womens-pics/w2.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>WOMEN'S PANTS</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/womens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/womens-pics/w-3.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>WOMEN'S TEES</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/womens_clothing">
                <div className="h-img-container">
                  <img src="/src/assets/womens-pics/w-4.jpg"></img>
                </div>
                <div className="c-title">
                  <h4>WOMEN'S SPORT</h4>
                  <a>SHOP NOW &gt;</a>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="jewelry-ad">
          <div className="j-img-container">
            <img className="j-img" src="/src/assets/jewelry-pics/j-1.jpg"></img>
          </div>
          <div className="j-text">
            <h2>THUG ROSE X DEFER COLLECTION</h2>
            <h3>
              INSPIRED BY THE BEST. BOLDLY UNMATCHED. A CHAMPION SPORT COMBAT
              RANGE DEDICATED TO GRIT AND STYLE IN THE RING, AT THE GYM, OR ON
              THE STREETS.
            </h3>
            <NavLink className="jewelry-button" to="/jewelry">
              <button>SHOP ROSE X DEFER</button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
