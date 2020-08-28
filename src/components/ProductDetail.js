import React from "react";
import "../styles/productDetail.scss";
import IMG from "../assets/02_Detalle.png";
const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="detailImage">
        <img src={IMG} alt="" />
      </div>
      <div className="detailInfo">
        <span className="detailState">Nuevo - 234 Vendidos</span>
        <h1>DECO REVERSE SOMBREORO OXFORD</h1>
        <span className="detailPrice">$ 1.980ºº</span>
        <button>Comprar</button>
      </div>
      <div className="detailDescription">
        <h2>Descripción Producto</h2>
        <p className="detailText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor
          lacus vel dapibus rhoncus. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Nunc ut turpis eu purus facilisis tincidunt.
          Integer posuere porta ultrices. Morbi augue nulla, tempus sed tortor
          posuere, condimentum aliquam tortor.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
