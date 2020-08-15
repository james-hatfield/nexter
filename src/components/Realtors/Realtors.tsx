import React from "react";
import classes from "./Realtors.module.scss";

const Realtors = () => (
  <section className={classes.Realtors}>
    <h3>Top 3 realtors</h3>
    <div className={classes.RealtorContainer}>
      <div className={classes.Realtor}>
        <img src={require("../../assets/realtor-1.jpeg")} alt="Realtor 1" />
        <div className={classes.Text}>
          <p>Erik Feinman</p>
          <span>245 house sold</span>
        </div>
      </div>
      <div className={classes.Realtor}>
        <img src={require("../../assets/realtor-2.jpeg")} alt="Realtor 2" />
        <div className={classes.Text}>
          <p>Kim Brown</p>
          <span>212 house sold</span>
        </div>
      </div>
      <div className={classes.Realtor}>
        <img src={require("../../assets/realtor-3.jpeg")} alt="Realtor 3" />
        <div className={classes.Text}>
          <p>Toby Ramsey</p>
          <span>198 house sold</span>
        </div>
      </div>
    </div>
  </section>
);
export default Realtors;
