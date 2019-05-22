import React from "react";
import styled from "styled-components";

const Sub_hardware = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 0px 7px 0px 15px;
  background-color: #c6d4df;
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
