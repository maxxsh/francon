import React from "react";

import { CardItem, CardIcon, CardH2, CardP } from "./CardElements";

const Card = (props) => {
  return (
    <CardItem>
      <CardIcon {...props.card.cardImgAttributes} />
      <CardH2>{props.card.cardTitle}</CardH2>
      <CardP>{props.card.cardDisc}</CardP>
    </CardItem>
  );
};

export default Card;
