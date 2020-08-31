import React from "react";
import "../styles/productList.scss";
import { connect } from "react-redux";
import { product, clearList, clearSearch } from "../actions/index";
import { withRouter } from "react-router-dom";
class ProductList extends React.Component {
  renderList() {
    return this.props.list.map((product) => {
      return (
        <div
          className="productList"
          key={product.id}
          onClick={() => this.clickProductList(product.id)}
        >
          <div className="productImage">
            <img src={product.picture} alt="product_image" />
          </div>
          <div className="productData">
            <div className="productPrice">
              $ {new Intl.NumberFormat("es-Es").format(product.price.amount)}
            </div>
            <div className="productTitle">{product.title}</div>
          </div>
          <div className="productLocation">{product.address}</div>
        </div>
      );
    });
  }
  render() {
    if (this.props.loadingList) {
      return <div className="loadingSpinner"></div>;
    }
    return <>{this.renderList()}</>;
  }

  clickProductList(productSelected) {
    console.log(productSelected);
    this.props.product(productSelected);
    this.props.history.push(`item/${productSelected}`);
  }

  componentWillUnmount() {
    this.props.clearList();
    this.props.clearSearch();
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.productList,
    loadingList: state.loadingList,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    product,
    clearList,
    clearSearch,
  })(ProductList)
);
