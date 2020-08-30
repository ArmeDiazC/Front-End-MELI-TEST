import React from "react";
import "../styles/contentWrapper.scss";
import BreadCumb from "./Breadcumb";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { connect } from "react-redux";

const ContentWrapper = (props) => {
  return (
    <div className="contentWrapper">
      <div className="breadcumb">
        <BreadCumb />
      </div>
      {props.productActive ? <ProductDetail /> : <ProductList />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { productActive: state.productActive };
};

export default connect(mapStateToProps, null)(ContentWrapper);
