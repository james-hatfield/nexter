import React from "react";
import classes from "./Gallery.module.scss";

const Gallery = () => (
  <section className={classes.Gallery}>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-1.jpeg")} alt="Gallery1" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-2.jpeg")} alt="Gallery2" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-3.jpeg")} alt="Gallery3" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-4.jpeg")} alt="Gallery4" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-5.jpeg")} alt="Gallery5" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-6.jpeg")} alt="Gallery6" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-7.jpeg")} alt="Gallery7" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-8.jpeg")} alt="Gallery8" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-9.jpeg")} alt="Gallery9" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-10.jpeg")} alt="Gallery10" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-11.jpeg")} alt="Gallery11" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-12.jpeg")} alt="Gallery12" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-13.jpeg")} alt="Gallery13" />
    </figure>
    <figure className={classes.ImageContainer}>
      <img src={require("../../assets/gal-14.jpeg")} alt="Gallery14" />
    </figure>
  </section>
);
export default Gallery;
