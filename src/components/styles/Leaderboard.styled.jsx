import styled from "styled-components";

export const StyledLeaderboard = styled.div`
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
    padding: 10px 5px;
    min-height: 300px;
    max-height: 900px;
    height: 90vh;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: #011627;
    border: 2px solid black;
    box-shadow: 0 0 10px black;
    color: #f6f7f8;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }

  .table {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }

  .entry {
    width: 90%;
    display: flex;
    padding: 8px 0;
  }

  .entry > h3 {
    padding: 0 5px;
  }

  .player-name {
    flex-grow: 1;
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

  @media (max-width: 610px) {
    .container {
      width: 95%;
      min-height: 50%;
      max-height: 90%;
    }
  }
`;
