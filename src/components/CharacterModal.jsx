import React from "react";
import arthur from "../images/arthur.png";
import drake from "../images/drake.png";
import kratos from "../images/kratos.png";
import { StyledCharacterModal } from "./styles/CharacterModal.styled";

const CharacterModal = ({ coords }) => {
  return (
    <StyledCharacterModal style={{ top: coords.yCoord, left: coords.xCoord }}>
      <div className="character">
        <img src={arthur} alt="arthur" />
        <p>Arthur Morgan</p>
      </div>
      <div className="character">
        <img src={drake} alt="drake" />
        <p>Nathan Drake</p>
      </div>
      <div className="character">
        <img src={kratos} alt="kratos" />
        <p>Kratos</p>
      </div>
    </StyledCharacterModal>
  );
};

export default CharacterModal;
