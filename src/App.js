import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent";
import StartGameModal from "./components/StartGameModal";
import LeaderBoard from "./components/LeaderBoard";
import NamePrompt from "./components/NamePrompt";
import { useState, useEffect } from "react";
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
  const [player, setplayer] = useState("");
  const [displayNamePrompt, setdisplayNamePrompt] = useState(false);
  const [leaderBoard, setleaderBoard] = useState([]);
  const [displayLeaderboard, setdisplayLeaderboard] = useState(false);

  useEffect(() => {
    checkGameEnd();
  });

  const playAgain = () => {
    setfoundCharacters([]);
    setplayer("");
    setdisplayLeaderboard(false);
    setdisplayNamePrompt(false);
    setStartGameModal(true);
  };

  const addToLeaderboard = async (player, name) => {
    await addNameAndScore(player, name);
    const leaderBoard = await getLeaderboard();
    setdisplayNamePrompt(false);
    setleaderBoard(leaderBoard);
    setdisplayLeaderboard(true);
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
      await addEndTime(player);
      setdisplayNamePrompt(true);
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
      {displayNamePrompt && (
        <NamePrompt addToLeaderboard={addToLeaderboard} player={player} />
      )}
      {displayLeaderboard && (
        <LeaderBoard leaderBoard={leaderBoard} playAgain={playAgain} />
      )}
    </>
  );
}

export default App;
