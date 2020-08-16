import React from "react";
import classes from "./Story.module.scss";

const Story = () => (
  <section className={classes.Story}>
    <div className={classes.ImageContainer}>
      <img
        className={classes.Couple}
        src={require("../../assets/story-1.jpeg")}
        alt="Lovely Couple"
      />
      <img
        className={classes.Mansion}
        src={require("../../assets/story-2.jpeg")}
        alt="Manison"
      />
    </div>
    <div className={classes.UserStory}>
      <h4 className={classes.Title}>Happy customers</h4>
      <h4 className={classes.Quote}>"The best decision of our lives"</h4>
      <p className={classes.Text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        consequatur aperiam exercitationem doloremque voluptas iure voluptatum?
      </p>
      <button className={classes.Btn}>Find your own home</button>
    </div>
  </section>
);
export default Story;
