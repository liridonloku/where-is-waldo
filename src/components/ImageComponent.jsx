import React from "react";
import game from "../images/game.jpg";

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={game} alt="game" />
    </div>
  );
};

export default ImageComponent;
