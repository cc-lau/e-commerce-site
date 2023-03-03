import React from "react";
import "./NavBarStyles.css";
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";

function NavBarView() {
  return (
    <div>
      <div className="nav-bar">
        <h1>Music Store</h1>
        <ul className="product-options">
          <li>
            <a>Plugins</a>
          </li>
          <li>
            <a>Synthesizers</a>
          </li>
          <li>
            <a>Equipment</a>
          </li>
        </ul>
        <div className="search-cart-container">
          <input
            type="search"
            className="product-search"
            id="product-search"
            placeholder="Search Products..."
          />
          <Icon path={mdiCart} size={1} />
        </div>
      </div>
    </div>
  );
}

export default NavBarView;
