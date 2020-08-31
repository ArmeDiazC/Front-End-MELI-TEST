import React from "react";
import "../styles/productList.scss";
import { connect } from "react-redux";
import { product, search } from "../actions/index";
import { withRouter } from "react-router-dom";
class ProductList extends React.Component {
  componentDidMount() {
    if (this.props.list.length === 0) {
      const searchTerm = this.props.location.search.match(/[^=]*$/g);
      this.props.search(searchTerm[0]);
    }
  }
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
    if (this.props.loadingList || this.props.list.length === 0) {
      return <div className="loadingSpinner"></div>;
    }
    return <>{this.renderList()}</>;
  }

  clickProductList(productSelected) {
    this.props.product(productSelected);
    this.props.history.push(`item/${productSelected}`);
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
    search,
  })(ProductList)
);
