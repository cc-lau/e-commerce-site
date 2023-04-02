import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../ProductsDisplay/ProductsSlice";
import "./ProductViewStyles.scss";
import { addToCart } from "../Cart/CartSlice";

function ProductView() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let { productId } = useParams();

  const cart = useSelector((state) => state.cart);

  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    /* console.log(product); */
  }, []);

  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <div className="view-container">
      {product.loading && <div>Loading...</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.products ? (
        <div className="view-card">
          <img className="view-img" src={product.products.image}></img>
          <div className="product-info">
            <p className="view-title"> {product.products.title}</p>
            <p className="view-price"> {"$" + product.products.price}</p>
            <p className="view-description">{product.products.description}</p>
            <input
              className="qty-input"
              type="number"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            ></input>
            <Link className="add-to-cart-btn" to="/cart">
              <button
                onClick={() =>
                  dispatch(addToCart({ product: product.products, qty: qty }))
                }
              >
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default ProductView;
