import React from "react";
import { ProductsDisplay } from "../ProductsDisplay/ProductsDisplay";
import NavBarView from "../NavBar/NavBarView";
function Home() {
  return (
    <div>
      <h2>All Products</h2>
      <ProductsDisplay productType={"men's clothing"} />
    </div>
  );
}

export default Home;
