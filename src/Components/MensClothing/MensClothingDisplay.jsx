import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function MensClothingDisplay() {
  return (
    <div>
      <h2 className="page-header">Men's Clothing</h2>
      <ProductsDisplay productType={"men's clothing"} />
    </div>
  );
}

export default MensClothingDisplay;
