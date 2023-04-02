import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function SynthesizersDisplay() {
  return (
    <div>
      <h2 className="page-header">Synthesizers</h2>
      <ProductsDisplay productType="electronics" />
    </div>
  );
}

export default SynthesizersDisplay;
