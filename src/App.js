import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent";
import StartGameModal from "./components/StartGameModal";
import { useState, useEffect } from "react";

function App() {
  const [startGameModal, setStartGameModal] = useState(true);
  const [time, setTime] = useState(0);
  const [keepTime, setKeepTime] = useState(false);
  const [foundCharacters, setfoundCharacters] = useState([]);
  const [gameEnd, setgameEnd] = useState(false);

  useEffect(() => {
    if (gameEnd) {
      console.log(
        `Game over! Your time: ${Math.floor(time / 3600)
          .toString()
          .padStart(2, "0")}:${Math.floor((time % 3600) / 60)
          .toString()
          .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`
      );
    }
    checkGameEnd();
  });

  const checkGameEnd = () => {
    if (foundCharacters.length === 3) {
      setKeepTime(false);
      setgameEnd(true);
    }
  };

  setTimeout(() => {
    keepTime && setTime(time + 1);
  }, 1000);

  const findCharacter = (character) => {
    if (!foundCharacters.includes(character)) {
      setfoundCharacters([...foundCharacters, character]);
    }
  };

  const startGame = () => {
    //remove modal
    setStartGameModal(false);
    //reset timer
    setTime(0);
    //start timer
    setKeepTime(true);
  };

  return (
    <>
      <Header time={time} />
      <ImageComponent
        findCharacter={findCharacter}
        foundCharacters={foundCharacters}
      />
      {startGameModal && <StartGameModal startGame={startGame} />}
    </>
  );
}

export default App;
