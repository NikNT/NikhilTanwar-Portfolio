import React from "react";
import Flickity from "react-flickity-component";

import styles from "./Carousel.module.css";

import darkAvatar from "../Assets/avatar-dark.png";
import avatar from "../Assets/avatar.png";
import book from "../Assets/book.gif";

const flickityOptions = {
  initialIndex: 2,
  // prevNextButtons: true,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={avatar} alt="" />
      <img src={darkAvatar} alt="" />
      <img src={book} alt="" />
    </Flickity>
  );
}

export default Carousel;
