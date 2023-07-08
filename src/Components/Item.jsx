import React from "react";
import avatar from "../Assets/avatar.png";
import darkavatar from "../Assets/avatar-dark.png";

const Item = () => {
  const randomTextArray = [avatar, darkavatar];

  const modifiedArray = randomTextArray.map((text) => {
    return `${text}`;
  });

  return (
    <>
      {modifiedArray.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </>
  );
};

export default Item;
