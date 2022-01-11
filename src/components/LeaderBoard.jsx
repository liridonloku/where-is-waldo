import React from "react";
import { StyledLeaderboard } from "./styles/Leaderboard.styled";

const LeaderBoard = ({ leaderBoard, playAgain }) => {
  console.log(leaderBoard);
  return (
    <StyledLeaderboard>
      <div className="container">
        <div className="title">
          <h2>Leaderboard</h2>
        </div>
        <div className="table">
          {leaderBoard.map((item, i) => {
            return (
              <p key={i}>
                {i + 1}. {item.name} -{" "}
                {Math.floor(item.score / 3600)
                  .toString()
                  .padStart(2, "0")}
                :
                {Math.floor((item.score % 3600) / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(item.score % 60).toString().padStart(2, "0")}
              </p>
            );
          })}
        </div>
        <button onClick={playAgain}>Play again</button>
      </div>
    </StyledLeaderboard>
  );
};

export default LeaderBoard;
