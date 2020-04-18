import React from "react";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "Cleaned the kitchen",
    description: "Cleaned the kitchen bench from dirt",
    meta: "30 points",
  },
];

const IntroCard = () => <Card.Group items={items} />;

export default IntroCard;
