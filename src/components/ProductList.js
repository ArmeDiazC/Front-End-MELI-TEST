import React from "react";
import "../styles/productList.scss";
import { connect } from "react-redux";
import { product } from "../actions/index";

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
              $ {new Intl.NumberFormat("de-DE").format(product.price.amount)}
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
      return <p>CARGANDO</p>;
    }
    return <>{this.renderList()}</>;
  }

  clickProductList(productSelected) {
    this.props.product(productSelected);
    console.log(productSelected);
  }
}
const mapStateToProps = (state) => {
  return { list: state.productList, loadingList: state.loadingList };
};

export default connect(mapStateToProps, { product })(ProductList);
