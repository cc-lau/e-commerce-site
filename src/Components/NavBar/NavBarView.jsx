import React from "react";
import "./NavBarStyles.css";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";
import { NavLink } from "react-router-dom";

function NavBarView() {
  return (
    <div>
      <div className="nav-bar">
        <NavLink className="music-store" to="/">
          Music Store
        </NavLink>
        <ul className="product-options">
          <li>
            <NavLink to="/plugins">Plugins</NavLink>
          </li>
          <li>
            <NavLink to="/synthesizers">Synthesizers</NavLink>
          </li>
          <li>
            <NavLink to="/equipment">Equipment</NavLink>
          </li>
        </ul>
        <div className="search-cart-container">
          <input
            type="search"
            className="product-search"
            id="product-search"
            placeholder="Search Products..."
          />
          <NavLink to="/cart">
            <Icon path={mdiCart} size={1} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBarView;
