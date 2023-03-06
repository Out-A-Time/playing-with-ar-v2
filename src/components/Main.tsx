import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div>
      <div className="gallery-list">
        Card List here:
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
