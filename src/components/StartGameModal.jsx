import React from "react";
import { StyledStartGameModal } from "./styles/StartGameModal.styled";
import arthur from "../images/arthur.png";
import drake from "../images/drake.png";
import kratos from "../images/kratos.png";
import game from "../images/game.jpg";

const StartGameModal = ({ startGame }) => {
  return (
    <StyledStartGameModal>
      <h1>Where's Waldo? PS4 Edition!</h1>
      <h3>Find these Charactersin the shortest time possible.</h3>
      <div className="container">
        <div className="left">
          <img src={game} alt="game" />
        </div>
        <div className="right">
          <div className="character">
            <div className="image-container">
              <img src={arthur} alt="arthur" />
            </div>
            <p>Arthur</p>
          </div>
          <div className="character">
            <div className="image-container">
              <img src={drake} alt="drake" />
            </div>
            <p>Drake</p>
          </div>
          <div className="character">
            <div className="image-container">
              <img src={kratos} alt="kratos" />
            </div>
            <p>Kratos</p>
          </div>
          <div className="start">
            <button onClick={startGame}>Start</button>
          </div>
        </div>
      </div>
    </StyledStartGameModal>
  );
};

export default StartGameModal;
