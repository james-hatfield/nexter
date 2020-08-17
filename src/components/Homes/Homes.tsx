import React from "react";
import classes from "./Homes.module.scss";
import { homes } from "../../App.data";
import HomeCard from "../HomeCard/HomeCard";

const Homes = () => (
  <section className={classes.Homes}>
    {homes.map((h, i) => (
      <HomeCard key={i} {...h} />
    ))}
  </section>
);
export default Homes;
