import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductsSlice";
import "./ProductsDisplayStyle.css";
export const ProductsDisplay = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let productType = props.productType;

  useEffect(() => {
    dispatch(fetchProducts(productType));
    console.log(product);
  }, []);

  return (
    <div>
      <div className="products-display">
        {product.loading && <div>Loading...</div>}
        {!product.loading && product.error ? (
          <div>Error: {user.error}</div>
        ) : null}
        {!product.loading && product.products.length ? (
          <ul>
            {product.products.map((product) => (
              <li key={product.id}>
                <img className="product-img" src={product.image}></img>
                {product.title + " "}
                {"$" + product.price}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
