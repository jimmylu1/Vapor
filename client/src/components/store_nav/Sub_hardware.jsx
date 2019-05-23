import React from "react";
import styled from "styled-components";

const Sub_hardware = styled.div`
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

const Styled_hardware = () => (
  <div style={{ position: "absolute" }}>
    <Sub_hardware>Valve Index</Sub_hardware>
    <Sub_hardware>Steam Controller</Sub_hardware>
    <Sub_hardware>Steam Link</Sub_hardware>
    <Sub_hardware>HTC Vive</Sub_hardware>
  </div>
);
export default Styled_hardware;
