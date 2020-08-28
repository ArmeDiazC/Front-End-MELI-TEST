import React from "react";
import "../styles/productList.scss";
import IMG from "../assets/02_Detalle.png";

const ProductList = () => {
  return (
    <a className="productList" href="/">
      <div className="productImage">
        <img src={IMG} alt="" />
      </div>
      <div className="productData">
        <div className="productPrice">$1.980</div>
        <div className="productTitle">Apple Ipod Touch 5g 16gb</div>
      </div>
      <div className="productLocation">Capital Federal</div>
    </a>
  );
};

export default ProductList;
