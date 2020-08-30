import React, { useState } from "react";
import "../styles/header.scss";
import logo from "../assets/Logo_ML.png";
import searchIcon from "../assets/ic_Search.png";
import { search } from "../actions/index";
import { connect } from "react-redux";

const Header = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.search(term);
  };

  return (
    <header>
      <div className="nav">
        <form onSubmit={onFormSubmit}>
          <img className="logo" src={logo} alt="logo Mercado Libre" />
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

export default connect(null, { search })(Header);
