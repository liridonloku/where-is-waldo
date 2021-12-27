import React from "react";
import game from "../images/game.jpg";
import { StyledImageContainer } from "./styles/ImageComponent.styled";
import { useState } from "react";
import CharacterModal from "./CharacterModal";

const ImageComponent = () => {
  const [currentCoords, setcurrentCoords] = useState({});
  const [characterModal, setcharacterModal] = useState(false);

  const handleImageClick = (e) => {
    let coordinates = getCoordinates(e);
    setcurrentCoords(coordinates);
    setcharacterModal(!characterModal);
  };

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
    return {
      xCoord,
      yCoord,
      imgWidth,
      imgHeight,
      xInPercent,
      yInPercent,
    };
  };

  return (
    <StyledImageContainer>
      <img src={game} alt="game" onClick={(e) => handleImageClick(e)} />
      {characterModal && <CharacterModal coords={currentCoords} />}
    </StyledImageContainer>
  );
};

export default ImageComponent;
