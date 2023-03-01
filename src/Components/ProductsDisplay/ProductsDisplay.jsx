import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductsSlice";

export const ProductsDisplay = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2>List of Products</h2>
      {product.loading && <div>Loading...</div>}
      {!product.loading && product.error ? (
        <div>Error: {user.error}</div>
      ) : null}
      {!product.loading && product.products.length ? (
        <ul>
          {product.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
