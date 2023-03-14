import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Checkout: </h2>
      {cart.cartItems ? (
        <ul className="items-list">
          {cart.cartItems.map((cartItems) => (
            <li key={cartItems.product.id}>
              <Link to={`/product/${cartItems.product.id}`}>
                <img
                  className="product-img"
                  src={cartItems.product.image}
                ></img>
                {cartItems.product.title + " "}
                {"$" + cartItems.product.price}
              </Link>
              {" Quantity " + cartItems.qty}
            </li>
          ))}
        </ul>
      ) : null}
      <div className=""></div>
    </div>
  );
}

export default Checkout;
