import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function JewelryDisplay() {
  return (
    <div>
      <h2 className="page-header">Jewelry</h2>
      <ProductsDisplay productType={"jewelery"} />
    </div>
  );
}

export default JewelryDisplay;
