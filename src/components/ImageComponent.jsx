import React from "react";
import game from "../images/game.jpg";
import { StyledImageContainer } from "./styles/ImageComponent.styled";
import { useState } from "react";
import CharacterModal from "./CharacterModal";

const ImageComponent = ({ findCharacter, foundCharacters }) => {
  const characters = {
    arthur: {
      xMin: 0.212,
      xMax: 0.2458,
      yMin: 0.3466,
      yMax: 0.3763,
    },
    drake: {
      xMin: 0.5959,
      xMax: 0.6308,
      yMin: 0.6777,
      yMax: 0.7152,
    },
    kratos: {
      xMin: 0.5886,
      xMax: 0.6359,
      yMin: 0.5413,
      yMax: 0.5672,
    },
  };
  const [currentCoords, setcurrentCoords] = useState({});
  const [characterModal, setcharacterModal] = useState(false);

  const handleImageClick = (e) => {
    setcurrentCoords(getCoordinates(e));
    setcharacterModal(!characterModal);
  };

  const handleCharacterClick = (e) => {
    setcharacterModal(false);
    let character = e.target.getAttribute("character");
    checkMatch(currentCoords, character);
  };

  const checkMatch = (coordinates, character) => {
    if (
      coordinates.xInPercent >= characters[character].xMin &&
      coordinates.xInPercent <= characters[character].xMax &&
      coordinates.yInPercent >= characters[character].yMin &&
      coordinates.yInPercent <= characters[character].yMax
    ) {
      findCharacter(character);
      console.log(`Congratulations! You found ${character}`);
    } else {
      console.log("Keep trying!");
    }
  };

  const getCoordinates = (e) => {
    let xCoord = e.nativeEvent.offsetX;
    let yCoord = e.nativeEvent.offsetY;
    let imgWidth = e.target.offsetWidth;
    let imgHeight = e.target.offsetHeight;
    let xInPercent = xCoord / imgWidth;
    let yInPercent = yCoord / imgHeight;
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
      {characterModal && (
        <CharacterModal
          coords={currentCoords}
          handleCharacterClick={handleCharacterClick}
          foundCharacters={foundCharacters}
        />
      )}
    </StyledImageContainer>
  );
};

export default ImageComponent;
