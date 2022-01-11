import alertify from "alertifyjs";
import React from "react";
import { StyledNamePrompt } from "./styles/NamePrompt.styled";

const NamePrompt = ({ addToLeaderboard, player }) => {
  return (
    <StyledNamePrompt>
      <div className="container">
        <label htmlFor="name">Name</label>
        <input type="text" id="player-name" />
        <div className="button-container">
          <button
            onClick={() => {
              let name = document.getElementById("player-name").value;
              if (name) {
                addToLeaderboard(player, name);
              } else {
                alertify.error("Please type a name");
              }
            }}
          >
            OK
          </button>
        </div>
      </div>
    </StyledNamePrompt>
  );
};

export default NamePrompt;
