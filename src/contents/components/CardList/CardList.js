import React from "react";
import Card from "../Card/Card";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((x) => (
        <Card key={x.id} {...x} />
      ))}
    </div>
  );
};

export default CardList;
