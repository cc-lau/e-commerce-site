import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function WomensClothingDisplay() {
  return (
    <div>
      <h2 className="page-header">Women's Clothing</h2>
      <ProductsDisplay productType="women's clothing" />
    </div>
  );
}

export default WomensClothingDisplay;
