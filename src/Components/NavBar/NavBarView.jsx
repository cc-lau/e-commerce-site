import React from "react";
import "./NavBarStyles.scss";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";
import { NavLink } from "react-router-dom";
import logo from "../../images/ad-pics/cstorelogopng.png";

function NavBarView() {
  return (
    <div className="container">
      <div className="nav-bar">
        <NavLink className="music-store" to="/">
          <img className="store-logo" src={logo}></img>
        </NavLink>
        <ul className="product-options">
          <li>
            <NavLink to="/mens_clothing">MEN</NavLink>
          </li>
          <li>
            <NavLink to="/womens_clothing">WOMEN</NavLink>
          </li>
          <li>
            <NavLink to="/jewelry">JEWELRY</NavLink>
          </li>
          <li>
            <NavLink to="/electronics">ELECTRONICS</NavLink>
          </li>
        </ul>
        <div className="search-cart-container">
          <NavLink to="/cart">
            <Icon path={mdiCart} size={1} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBarView;
