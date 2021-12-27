import React from "react";
import game from "../images/game.jpg";
import { StyledImageContainer } from "./styles/ImageComponent.styled";

const ImageComponent = () => {
  const getCoordinates = (e) => {
    let xCoord = e.nativeEvent.offsetX;
    let yCoord = e.nativeEvent.offsetY;
    let imgWidth = e.target.offsetWidth;
    let imgHeight = e.target.offsetHeight;
    let xInPercent = xCoord / imgWidth;
    let yInPercent = yCoord / imgHeight;
    if (
      xInPercent >= 0.212 &&
      xInPercent <= 0.2458 &&
      yInPercent >= 0.3466 &&
      yInPercent <= 0.3763
    ) {
      console.log("Congrats! You found Arthur.");
    }
    console.log(xCoord, yCoord, imgWidth, imgHeight);
  };

  return (
    <StyledImageContainer>
      <img src={game} alt="game" onClick={(e) => getCoordinates(e)} />
    </StyledImageContainer>
  );
};

export default ImageComponent;
