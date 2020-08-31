import React, { useState, useEffect } from "react";
import "../styles/header.scss";
import logo from "../assets/Logo_ML.png";
import searchIcon from "../assets/ic_Search.png";
import { search } from "../actions/index";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    setTerm(props.productSearch);
  }, [props.productSearch]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.search(term);
    props.history.push(`/items?search=${term}`);
  };

  return (
    <header>
      <div className="nav">
        <form onSubmit={onFormSubmit}>
          <Link to="/">
            <img className="logo" src={logo} alt="logo Mercado Libre" />
          </Link>
          <input
            aria-label="Busca lo que deseas"
            placeholder="Nunca dejes de buscar"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <img src={searchIcon} alt="icono buscar" />
          </button>
        </form>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return { productSearch: state.productSearch };
};

export default withRouter(connect(mapStateToProps, { search })(Header));
