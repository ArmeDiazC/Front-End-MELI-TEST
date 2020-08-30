import React from "react";
import "../styles/productDetail.scss";
import { connect } from "react-redux";

class ProductDetail extends React.Component {
  renderProduct() {
    return (
      <div className="productDetail">
        <div className="detailImage">
          <img src={this.props.productData.picture} alt="" />
        </div>
        <div className="detailInfo">
          <span className="detailState">
            {this.props.productData.condition} -{" "}
            {this.props.productData.sold_quantity} Vendidos
          </span>
          <h1>{this.props.productData.title}</h1>
          <span className="detailPrice">
            ${" "}
            {new Intl.NumberFormat("de-DE").format(
              this.props.productData.price.amount
            )}
            .
            <span>
              {this.props.productData.price.decimals == 0
                ? "00"
                : this.props.productData.price.decimals}
            </span>
          </span>
          <button>Comprar</button>
        </div>
        <div className="detailDescription">
          <h2>Descripción Producto</h2>
          <p className="detailText">{this.props.productData.description}</p>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.loadingProduct) {
      return <p>CARGANDO</p>;
    }
    return <>{this.renderProduct()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    productData: state.productDetail,
    loadingProduct: state.loadingProduct,
  };
};

export default connect(mapStateToProps, null)(ProductDetail);
