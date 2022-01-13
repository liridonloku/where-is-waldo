import styled from "styled-components";

export const StyledCharacterModal = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.87);
  color: white;
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  padding: 2px;

  .character {
    display: flex;
    align-items: center;
    padding: 3px 10px 3px 0;
    cursor: pointer;

    &:hover {
      background-color: #20a4f3;
    }
  }

  .character > img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    cursor: pointer;
  }

  .character > p {
    flex-grow: 1;
    text-align: center;
  }
`;
