import React from "react";
import "../styles/contentWrapper.scss";
import BreadCumb from "./Breadcumb";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const ContentWrapper = () => {
  return (
    <div className="contentWrapper">
      <div className="breadcumb">
        <BreadCumb />
      </div>
      <ProductList />
      {/* <ProductDetail /> */}
    </div>
  );
};

export default ContentWrapper;
