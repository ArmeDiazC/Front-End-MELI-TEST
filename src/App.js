import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import BreadCumb from "./components/Breadcumb";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "./styles/app.scss";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Route path="/" component={Header} />
        <div className="contentWrapper">
          <div className="breadcumb">
            <BreadCumb />
          </div>
          <Switch>
            <Route path="/items" component={ProductList} />
            <Route path="/item/:id" component={ProductDetail}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
