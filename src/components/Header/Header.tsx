import React from "react";
import classes from "./Header.module.scss";

const Header = () => (
  <header className={classes.Header}>
    <div className={classes.NexterLogo}>
      <img src={require("../../assets/logo.png")} alt="Logo" />
    </div>
    <div className={classes.Heading}>
      <h3>Your own home:</h3>
      <h2>The ultimate personal freedom</h2>
      <button>View our properties</button>
    </div>
    <div className={classes.Companies}>
      <span className={classes.Line}></span>
      <span>As seen on</span>
      <span className={classes.Line}></span>
      <div className={classes.ImageContainer}>
        <img src={require("../../assets/logo-bbc.png")} alt="BBC logo" />
        <img src={require("../../assets/logo-forbes.png")} alt="Forbes logo" />
        <img
          src={require("../../assets/logo-techcrunch.png")}
          alt="Tech Crunch logo"
        />
        <img
          src={require("../../assets/logo-bi.png")}
          alt="Business Insider logo"
        />
      </div>
    </div>
  </header>
);
export default Header;
