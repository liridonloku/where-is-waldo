import styled from "styled-components";

export const StyledCharacterModal = styled.div`
  position: absolute;
  background-color: darkslategray;
  color: white;
  box-shadow: 0 0 5px black;
  padding: 2px;

  .character {
    display: flex;
    padding-right: 10px;
    cursor: pointer;

    &:hover {
      background-color: black;
    }
  }

  .character > img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .character > p {
    flex-grow: 1;
    text-align: center;
  }
`;
