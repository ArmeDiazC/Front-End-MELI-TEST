import React from "react";
import { connect } from "react-redux";

const Breadcumb = ({ categories }) => {
  console.log(categories);
  if (categories.length === 0) {
    return <></>;
  }

  return categories.map((category) => <span key={category}>{category}</span>);
};
const mapStateToPros = (state) => {
  return { categories: state.categories };
};

export default connect(mapStateToPros, null)(Breadcumb);
