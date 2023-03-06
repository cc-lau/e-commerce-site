import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../ProductsDisplay/ProductsSlice";
import "./ProductViewStyles.css";
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
    <div>
      <div className="products-container">
        {product.loading && <div>Loading...</div>}
        {!product.loading && product.error ? (
          <div>Error: {product.error}</div>
        ) : null}
        {!product.loading && product.products ? (
          <div className="product-card">
            <img className="product-img" src={product.products.image}></img>
            <p> {product.products.title}</p>
            <p> {"$" + product.products.price}</p>
            <input
              className="qty-input"
              type="number"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            ></input>
            <Link to="/cart">
              <button
                onClick={() =>
                  dispatch(addToCart({ product: product.products, qty: qty }))
                }
              >
                Add to cart
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default ProductView;
