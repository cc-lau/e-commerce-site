import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function EquipmentDisplay() {
  return (
    <div>
      <h2>Equipment</h2>
      <ProductsDisplay productType="women's clothing" />
    </div>
  );
}

export default EquipmentDisplay;
