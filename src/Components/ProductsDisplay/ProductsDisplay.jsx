import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./ProductsSlice";
import "./ProductsDisplayStyle.scss";
import Footer from "../Footer/Footer";
export const ProductsDisplay = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let productType = props.productType;

  function truncateString(str) {
    if (str.length <= 60) {
      return str;
    }
    return str.slice(0, 60) + "...";
  }

  useEffect(() => {
    dispatch(fetchProducts(productType));
  }, []);

  return (
    <div>
      <div className="products-view">
        <div className="products-container">
          {product.loading && <div>Loading...</div>}
          {!product.loading && product.error ? (
            <div>Error: {product.error}</div>
          ) : null}
          {!product.loading && product.products.length ? (
            <div className="product-cards">
              {product.products.map((product) => (
                <Link
                  className="product-card"
                  key={product.id}
                  to={`/product/${product.id}`}
                >
                  <div className="img-container">
                    <img className="product-img" src={product.image}></img>
                  </div>
                  <div className="product-desc">
                    <p className="product-title">
                      {truncateString(product.title) + " "}
                    </p>
                    <p className="product-price">{"$" + product.price}</p>
                    <p className="product-category">{product.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};
