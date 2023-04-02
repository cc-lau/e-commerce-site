import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";

function PluginsDisplay() {
  return (
    <div>
      <h2 className="page-header">Plugins</h2>
      <ProductsDisplay productType={"jewelery"} />
    </div>
  );
}

export default PluginsDisplay;
