import React from "react";
import "../styles/contentWrapper.scss";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const ContentWrapper = () => {
  return (
    <div className="contentWrapper">
      <div className="productBreadcumb">BreadCumb</div>
      <ProductList />
      <ProductDetail />
    </div>
  );
};

export default ContentWrapper;
