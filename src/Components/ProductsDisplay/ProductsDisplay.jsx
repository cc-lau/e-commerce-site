import { Link } from "react-router-dom";
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
      <div className="products-container">
        {product.loading && <div>Loading...</div>}
        {!product.loading && product.error ? (
          <div>Error: {product.error}</div>
        ) : null}
        {!product.loading && product.products.length ? (
          <div className="product-cards">
            {product.products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <img className="product-img" src={product.image}></img>
                {product.title + " "}
                {"$" + product.price}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
