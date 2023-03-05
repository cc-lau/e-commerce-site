import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../ProductsDisplay/ProductsSlice";

function ProductView() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    console.log(product);
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
            {product.products.title + " "}
            {"$" + product.products.price}

            <button>Add to cart</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default ProductView;
