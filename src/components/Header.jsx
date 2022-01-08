import React from "react";
import { StyledHeader } from "./styles/Header.styled";

const Header = ({ time }) => {
  let displayTime = `${Math.floor(time / 3600)
    .toString()
    .padStart(2, "0")}:${Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <StyledHeader>
      <h1>Where's Waldo? PS4 Edition</h1>
      <p>{displayTime}</p>
    </StyledHeader>
  );
};

export default Header;
