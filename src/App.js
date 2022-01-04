import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent";
import StartGameModal from "./components/StartGameModal";
import { useState } from "react";

function App() {
  const [startGameModal, setmodal] = useState(true);
  const toggleModal = () => {
    setmodal(!startGameModal);
  };
  return (
    <>
      <Header />
      <ImageComponent />
      {startGameModal && <StartGameModal />}
      <button onClick={toggleModal}>Show Modal</button>
    </>
  );
}

export default App;
