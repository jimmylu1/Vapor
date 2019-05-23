import React from "react";
import styled from "styled-components";

const Sub_games = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 10px;
  background: #e3eaef;
  box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  border-left: 1px solid rgba(16, 21, 25, 0.3);
  &:hover {
    color: white;
    background-color: #171a21;
  }
`;

const Styled_games = () => (
  <div style={{ position: "absolute" }}>
    <Sub_games>Free to Play</Sub_games>
    <Sub_games>Early Access</Sub_games>
    <Sub_games>Demos</Sub_games>
    <Sub_games>Virtual Reality</Sub_games>
    <Sub_games>Steam Controller Friendly</Sub_games>
    <Sub_games>PC Café Games on Steam</Sub_games>
    <Sub_games>Action</Sub_games>
    <Sub_games>Adventure</Sub_games>
    <Sub_games>Casual</Sub_games>
    <Sub_games>Indie</Sub_games>
    <Sub_games>Massively Multiplayer</Sub_games>
    <Sub_games>Racing</Sub_games>
    <Sub_games>RPG</Sub_games>
    <Sub_games>Simulation</Sub_games>
    <Sub_games>Sports</Sub_games>
    <Sub_games>Strategy</Sub_games>
    <Sub_games>See popular tags</Sub_games>
    <Sub_games>Mac OS X</Sub_games>
    <Sub_games>SteamOS + Linux</Sub_games>
  </div>
);
export default Styled_games;
