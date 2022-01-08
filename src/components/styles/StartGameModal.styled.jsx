import styled from "styled-components";

export const StyledStartGameModal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f6f7f8;

  h1,
  h3 {
    text-align: center;
  }

  .container {
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #011627;
    border: 2px solid black;
    box-shadow: 0 0 10px black;
    color: #f6f7f8;
  }

  .left {
    height: 100%;
  }

  .left > img {
    border-radius: 10px 0 0 10px;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }

  .right {
    height: 100%;
    width: 40%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .character {
    width: 100%;
    height: 25%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .character > .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 90%;
  }

  .character > .image-container > img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  .character > p {
    width: 40%;
    text-align: center;
  }

  .start {
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .start > button {
    padding: 10px 30px;
    font-weight: bold;
    font-size: 20px;
    border: none;
    background-color: #20a4f3;
    color: #f6f7f8;
    border-radius: 20px;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .container {
      width: 95%;
    }
  }
`;
