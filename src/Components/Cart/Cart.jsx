import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <div>
      <h2>Cart: </h2>
      <div className="product-cards">
        <ul>
          {cart.cartItems.map((cartItems) => (
            <li key={cartItems.product.id}>
              <Link to={`/product/${cartItems.product.id}`}>
                <img
                  className="product-img"
                  src={cartItems.product.image}
                ></img>
                {cartItems.product.title + " "}
                {"$" + cartItems.product.price}
                {" Quantity " + cartItems.qty}
              </Link>
            </li>
          ))}
        </ul>
        <Link to={"/checkout"} className="check-out-button">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
