import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./ProductsSlice";
import "./ProductsDisplayStyle.scss";
export const AllProductsDisplay = () => {
  return <div className="products-view"></div>;
};
