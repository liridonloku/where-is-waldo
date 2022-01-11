import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent";
import StartGameModal from "./components/StartGameModal";
import LeaderBoard from "./components/LeaderBoard";
import { useState, useEffect } from "react";
import alertify from "alertifyjs";
import {
  getLeaderboard,
  addNewEntry,
  addNameAndScore,
  addEndTime,
} from "./firebase";

function App() {
  const [startGameModal, setStartGameModal] = useState(true);
  const [time, setTime] = useState(0);
  const [keepTime, setKeepTime] = useState(false);
  const [foundCharacters, setfoundCharacters] = useState([]);
  const [gameEnd, setgameEnd] = useState(false);
  const [player, setplayer] = useState("");
  const [leaderBoard, setleaderBoard] = useState([]);
  const [displayLeaderboard, setdisplayLeaderboard] = useState(false);

  useEffect(() => {
    if (gameEnd) {
      alertify.prompt(
        "Game Over",
        `Your time: ${Math.floor(time / 3600)
          .toString()
          .padStart(2, "0")}:${Math.floor((time % 3600) / 60)
          .toString()
          .padStart(2, "0")}:${(time % 60)
          .toString()
          .padStart(2, "0")}! Type your name:`,
        "Name",
        function (evt, value) {
          setgameEnd(false);
          addToLeaderboard(player, value);
          setdisplayLeaderboard(true);
          alertify.success(`Good job ${value}!`);
        },
        function () {
          alertify.error("Canceled");
        }
      );
    }
    checkGameEnd();
  });

  const playAgain = () => {
    setdisplayLeaderboard(false);
    setStartGameModal(true);
  };

  const addToLeaderboard = async (player, name) => {
    await addNameAndScore(player, name);
    const leaderBoard = await getLeaderboard();
    setleaderBoard(leaderBoard);
  };

  useEffect(() => {
    let interval = null;
    if (keepTime) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [keepTime, time]);

  const checkGameEnd = async () => {
    if (foundCharacters.length === 3) {
      setKeepTime(false);
      setgameEnd(true);
      await addEndTime(player);
    }
  };

  const findCharacter = (character) => {
    if (!foundCharacters.includes(character)) {
      setfoundCharacters([...foundCharacters, character]);
    }
  };

  const startGame = async () => {
    //remove modal
    setStartGameModal(false);
    //reset timer
    setTime(0);
    //start timer
    setKeepTime(true);
    //Add database entry and save docRef
    setplayer(await addNewEntry());
  };

  return (
    <>
      <Header time={time} />
      <ImageComponent
        findCharacter={findCharacter}
        foundCharacters={foundCharacters}
      />
      {startGameModal && <StartGameModal startGame={startGame} />}
      {displayLeaderboard && (
        <LeaderBoard leaderBoard={leaderBoard} playAgain={playAgain} />
      )}
    </>
  );
}

export default App;
