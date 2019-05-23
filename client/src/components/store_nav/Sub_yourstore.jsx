import React from "react";
import styled from "styled-components";

const Sub_yourstore = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 10px
  background-color: #c6d4df;
  box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba( 16, 21, 25, 0.3);
  border-left: 1px solid rgba( 16, 21, 25, 0.3);
  &:hover {
    color: white;
    background-color: #171a21;
  }
`;

const Styled_yourstore = () => (
  <div style={{ position: "absolute" }}>
    <Sub_yourstore>Store Home</Sub_yourstore>
    <Sub_yourstore>Popular Among Friends</Sub_yourstore>
    <Sub_yourstore>Steam Curators</Sub_yourstore>
    <Sub_yourstore>Your Queue</Sub_yourstore>
    <Sub_yourstore>Recently Updated</Sub_yourstore>
    <Sub_yourstore>Multiplayer</Sub_yourstore>
    <Sub_yourstore>Free to play</Sub_yourstore>
    <Sub_yourstore>Action</Sub_yourstore>
    <Sub_yourstore>FPS</Sub_yourstore>
    <Sub_yourstore>Co-op</Sub_yourstore>
    <Sub_yourstore>Browse all recommended tags</Sub_yourstore>
  </div>
);
export default Styled_yourstore;
