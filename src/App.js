import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent";
import { useState } from "react";

function App() {
  const [modal, setmodal] = useState(true);
  const toggleModal = () => {
    setmodal(!modal);
  };
  return (
    <>
      <Header />
      <ImageComponent />
      {modal && (
        <div>
          <h2>Modal</h2>
          <button onClick={toggleModal}>close</button>
        </div>
      )}
      <button onClick={toggleModal}>Show Modal</button>
    </>
  );
}

export default App;
