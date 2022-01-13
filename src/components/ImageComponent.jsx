import React from "react";
import game from "../images/game.jpg";
import { StyledImageContainer } from "./styles/ImageComponent.styled";
import { useState, useEffect } from "react";
import { getCharacters } from "../firebase";
import CharacterModal from "./CharacterModal";
import alertify from "alertifyjs";

const ImageComponent = ({ findCharacter, foundCharacters }) => {
  const [characters, setCharacters] = useState({});
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
      alertify.success(`Congratulations! You found ${character}`);
    } else {
      alertify.error(`That's not ${character}. Keep trying!`);
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

  useEffect(() => {
    //Get character coordinates
    const getCharacterCoordinates = async () => {
      const characters = await getCharacters();
      setCharacters(characters);
    };
    getCharacterCoordinates();
  }, []);

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
