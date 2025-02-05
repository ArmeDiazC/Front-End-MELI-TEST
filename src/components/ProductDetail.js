import React from "react";
import "../styles/productDetail.scss";
import { connect } from "react-redux";
import { product, category, clearList, clearSearch } from "../actions/index";
import { withRouter } from "react-router-dom";

class ProductDetail extends React.Component {
  componentDidMount() {
    if (!this.props.productActive) {
      const productId = this.props.location.pathname.match(/\w+$/g);
      this.props.product(productId[0]);
      this.props.category(productId[0]);
    }
  }
  renderProduct() {
    return (
      <div className="productDetail">
        <div className="detailImage">
          <img
            src={this.props.productData.picture}
            alt={this.props.productData.title}
          />
        </div>
        <div className="detailInfo">
          <span className="detailState">
            {this.props.productData.condition === "new" ? "Nuevo" : "Usado"}
            {this.props.productData.sold_quantity === 0
              ? ""
              : ` - ${this.props.productData.sold_quantity} vendidos`}
          </span>
          <h1>{this.props.productData.title}</h1>

          <span className="detailPrice">
            ${" "}
            {new Intl.NumberFormat("es-Es").format(
              this.props.productData.price.amount
            )}
            <span className="decimalPrice">
              {this.props.productData.price.decimals === 0
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
    if (this.props.loadingProduct || !this.props.productActive) {
      return <div className="loadingSpinner"></div>;
    }
    return <>{this.renderProduct()}</>;
  }

  componentWillUnmount() {
    this.props.clearList();
  }
}

const mapStateToProps = (state) => {
  return {
    productData: state.productDetail,
    loadingProduct: state.loadingProduct,
    productActive: state.productActive,
  };
};

export default withRouter(
  connect(mapStateToProps, { product, clearList, clearSearch, category })(
    ProductDetail
  )
);
