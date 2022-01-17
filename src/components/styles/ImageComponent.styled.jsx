import styled from "styled-components";

export const StyledImageContainer = styled.div`
  position: relative;
  overflow: auto;

  .art-by {
    position: absolute;
    bottom: 5px;
    right: 5px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: #f2f3f4;
  }

  .art-by > p > a {
    color: #f2f3f4;
  }

  & img {
    display: block;
    width: 100%;
    min-width: calc((100vh - 84px) / 2.1666667);
    min-height: calc(100vh - 84px);
    cursor: crosshair;
  }
`;
