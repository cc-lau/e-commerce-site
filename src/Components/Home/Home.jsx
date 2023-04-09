import React from "react";
import "./HomeStyles.scss";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import mpic1 from "../../images/Mens-pics/pic1.jpg";
import mpic2 from "../../images/Mens-pics/pic2.jpg";
import mpic3 from "../../images/Mens-pics/pic3.jpg";
import mpic4 from "../../images/Mens-pics/pic4.jpg";
import wpic1 from "../../images/womens-pics/w1.jpg";
import wpic2 from "../../images/womens-pics/w2.jpg";
import wpic3 from "../../images/womens-pics/w-3.jpg";
import wpic4 from "../../images/womens-pics/w-4.jpg";
import jpic from "../../images/jewelry-pics/j-1.jpg";

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
                  <img src={mpic1}></img>
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
                  <img src={mpic2}></img>
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
                  <img src={mpic3}></img>
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
                  <img src={mpic4}></img>
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
                  <img src={wpic1}></img>
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
                  <img src={wpic2}></img>
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
                  <img src={wpic3}></img>
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
                  <img src={wpic4}></img>
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
            <img className="j-img" src={jpic}></img>
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
