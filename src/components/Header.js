import React from "react";
import "../styles/header.scss";
import logo from "../assets/Logo_ML.png";
import searchIcon from "../assets/ic_Search.png";
const Header = () => {
  return (
    <header>
      <div className="nav">
        <form>
          <img className="logo" src={logo} alt="logo Mercado Libre" />
          <input
            aria-label="Busca lo que deseas"
            placeholder="Nunca dejes de buscar"
            type="text"
          />
          <button type="submit">
            <img src={searchIcon} alt="icono buscar" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
