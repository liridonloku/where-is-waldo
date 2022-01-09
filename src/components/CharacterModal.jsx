import React from "react";
import arthur from "../images/arthur.png";
import drake from "../images/drake.png";
import kratos from "../images/kratos.png";
import { StyledCharacterModal } from "./styles/CharacterModal.styled";

const CharacterModal = ({ coords, handleCharacterClick, foundCharacters }) => {
  return (
    <StyledCharacterModal
      style={{
        //position the box left/right/up/down of click position, to prevent overflow
        top:
          coords.imgHeight - coords.yCoord > 170
            ? coords.yCoord
            : coords.yCoord - 170,
        left:
          coords.imgWidth - coords.xCoord > 170
            ? coords.xCoord
            : coords.xCoord - 170,
      }}
    >
      {!foundCharacters.includes("arthur") && (
        <div
          className="character"
          character="arthur"
          onClick={(e) => handleCharacterClick(e)}
        >
          <img src={arthur} alt="arthur" character="arthur" />
          <p character="arthur">Arthur Morgan</p>
        </div>
      )}
      {!foundCharacters.includes("drake") && (
        <div
          className="character"
          character="drake"
          onClick={(e) => handleCharacterClick(e)}
        >
          <img src={drake} alt="drake" character="drake" />
          <p character="drake">Nathan Drake</p>
        </div>
      )}
      {!foundCharacters.includes("kratos") && (
        <div
          className="character"
          character="kratos"
          onClick={(e) => handleCharacterClick(e)}
        >
          <img src={kratos} alt="kratos" character="kratos" />
          <p character="kratos">Kratos</p>
        </div>
      )}
    </StyledCharacterModal>
  );
};

export default CharacterModal;
