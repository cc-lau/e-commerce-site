import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import { removeItem } from "../Cart/CartSlice";
import { useDispatch } from "react-redux";
import "./CartStyles.scss";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="page-header">Cart</h2>
      <div className="table-container">
        <form>
          <table className="cart-table">
            <thead>
              <tr className="text-headers">
                <th className="text-left">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            {cart.cartItems ? (
              <tbody>
                {cart.cartItems.map((cartItems) => (
                  <tr className="table-row" key={cartItems.product.id}>
                    <td>
                      <div className="product-left">
                        <div className="cart-img-container">
                          <img
                            className="cart-img"
                            src={cartItems.product.image}
                          ></img>
                        </div>
                        <div className="title-container">
                          <Link to={`/product/${cartItems.product.id}`}>
                            <p className="cart-item-title">
                              {cartItems.product.title + " "}
                            </p>
                          </Link>
                          <button
                            className="remove-button"
                            onClick={() => {
                              dispatch(removeItem(cartItems));
                            }}
                          >
                            <Icon path={mdiTrashCanOutline} size={1} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>{"$" + cartItems.product.price}</td>
                    <td>
                      <div className="qty">{cartItems.qty}</div>
                    </td>
                    <td>{"$" + cartItems.product.price * cartItems.qty}</td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </form>
        <div className="checkout-container">
          <div className="subtotal">
            <p>Subtotal: </p>
            <p>{"$" + cart.total}</p>
          </div>
          <p className="text-right tax-info">
            Taxes and Shipping calculated at checkout
          </p>
          <Link to={"/checkout"} className="check-out-button">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
