import React from "react";
import classes from "./Features.module.scss";
import Icon from "../SvgIcon/Icon";

const Features = () => (
  <section className={classes.Features}>
    <div className={classes.Feature}>
      <Icon name="global" />
      <div className={classes.Content}>
        <h4>World's best luxury homes</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          explicabo minus, magnam praesentium.
        </p>
      </div>
    </div>
    <div className={classes.Feature}>
      <Icon name="trophy" />
      <div className={classes.Content}>
        <h4>Only the best properties</h4>
        <p>
          Cumque quos velit dicta facere autem aut animi vero facilis deleniti
          esse, aspernatur es.
        </p>
      </div>
    </div>
    <div className={classes.Feature}>
      <Icon name="map-pin" />
      <div className={classes.Content}>
        <h4>All homes in top locations</h4>
        <p>
          Architecto qui beatae unde minus harum temporibus. Ad, reiciendis
          illo. Dolorum, impedit tempore ex.
        </p>
      </div>
    </div>
    <div className={classes.Feature}>
      <Icon name="key" />
      <div className={classes.Content}>
        <h4>New home in one week</h4>
        <p>
          Saepe corrupti impedit laborum libero enim nemo quod eius aliquam cum
          consequuntur tenetur.
        </p>
      </div>
    </div>
    <div className={classes.Feature}>
      <Icon name="presentation" />
      <div className={classes.Content}>
        <h4>Top 1% realtors</h4>
        <p>
          Mollitia obcaecati nam animi voluptate eveniet sapiente voluptatum
          explicabo repudiandae.
        </p>
      </div>
    </div>
    <div className={classes.Feature}>
      <Icon name="lock" />
      <div className={classes.Content}>
        <h4>Secure payments</h4>
        <p>
          Modi atque sit voluptatibus laudantium rerum, iste quos amet
          similique! Possimus sit debitis.
        </p>
      </div>
    </div>
  </section>
);
export default Features;
