import React from "react";
import { StyledLeaderboard } from "./styles/Leaderboard.styled";

const LeaderBoard = ({ leaderBoard, playAgain }) => {
  return (
    <StyledLeaderboard>
      <div className="container">
        <div className="title">
          <h2>Leaderboard</h2>
        </div>
        <div className="table">
          {leaderBoard.map((item, i) => {
            return (
              <div className="entry" key={i}>
                <h3 className="position">{i + 1}.</h3>
                <h3 className="player-name">{item.name}</h3>
                <h3 className="time">
                  {Math.floor(item.score / 3600)
                    .toString()
                    .padStart(2, "0")}
                  :
                  {Math.floor((item.score % 3600) / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(item.score % 60).toString().padStart(2, "0")}
                </h3>
              </div>
            );
          })}
        </div>
        <button onClick={playAgain}>Play again</button>
      </div>
    </StyledLeaderboard>
  );
};

export default LeaderBoard;
