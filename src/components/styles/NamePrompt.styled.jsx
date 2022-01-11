import styled from "styled-components";

export const StyledNamePrompt = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f6f7f8;

  .container {
    padding: 30px 15px 10px 15px;
    width: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #011627;
    border: 2px solid black;
    box-shadow: 0 0 10px black;
    color: #f6f7f8;
  }

  input {
    margin-bottom: 20px;
    height: 30px;
    font-size: 20px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    padding: 10px 30px;
    font-weight: bold;
    font-size: 20px;
    border: none;
    background-color: #20a4f3;
    color: #f6f7f8;
    border-radius: 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #116ea6;
  }

  @media (max-width: 400px) {
    .container {
      width: 90%;
    }
  }
`;
