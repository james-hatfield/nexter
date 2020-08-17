import React from "react";
import classes from "./HomeCard.module.scss";
import { IHome } from "../../App.types";
import Icon from "../SvgIcon/Icon";

const HomeCard = (props: IHome) => (
  <div className={classes.HomeCard}>
    <div className={classes.ImageContainer}>
      <img className={classes.Image} src={props.image} alt={props.name} />
      <Icon name="heart-full" />
      <div className={classes.HouseName}>{props.name}</div>
    </div>
    <div className={classes.InfoContainer}>
      <div className={classes.Info}>
        <Icon name="map-pin" />
        <span>{props.location}</span>
      </div>
      <div className={classes.Info}>
        <Icon name="profile-male" />
        <span>{props.rooms}</span>
      </div>
      <div className={classes.Info}>
        <Icon name="expand" />
        <span>{props.size}&sup2;</span>
      </div>
      <div className={classes.Info}>
        <Icon name="key" />
        <span>{props.price}</span>
      </div>
    </div>
    <button className={classes.Contact}>Contact Realtor</button>
  </div>
);
export default HomeCard;
