import React from "react";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import "./styles/layout.scss";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <ContentWrapper />
    </div>
  );
}

export default App;
