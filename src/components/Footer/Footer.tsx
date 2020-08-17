import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => (
  <footer className={classes.Footer}>
    <nav>
      <ul>
        <li>
          <a href="#!">Find your dream home</a>
        </li>
        <li>
          <a href="#!">Request proposal</a>
        </li>
        <li>
          <a href="#!">Download home planner</a>
        </li>
        <li>
          <a href="#!">Submit your property</a>
        </li>
        <li>
          <a href="#!">Come work with us!</a>
        </li>
        <li>
          <a href="#!">Contact us</a>
        </li>
      </ul>
    </nav>
    <div className={classes.Copyright}>
      <p>
        &copy; Copyright 2020. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Ex dolores culpa rem nobis delectus error laboriosam
        ad, eius ullam at tempore soluta cum minus, earum fugiat libero
        cupiditate nesciunt tenetur quasi eligendi sequi nihil. Veniam.
      </p>
    </div>
  </footer>
);
export default Footer;
