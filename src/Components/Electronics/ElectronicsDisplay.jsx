import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function ElectronicsDisplay() {
  return (
    <div>
      <h2 className="page-header">Electronics</h2>
      <ProductsDisplay productType="electronics" />
    </div>
  );
}

export default ElectronicsDisplay;
