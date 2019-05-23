import React from "react";
import styled from "styled-components";

const Sub_software = styled.div`
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

const Styled_software = () => (
  <div style={{ position: "absolute" }}>
    <Sub_software>Software Hub</Sub_software>
    <Sub_software>Animation and Modeling</Sub_software>
    <Sub_software>Audio Production</Sub_software>
    <Sub_software>Design and Illustration</Sub_software>
    <Sub_software>Education</Sub_software>
    <Sub_software>Game Development</Sub_software>
    <Sub_software>Photo Editing</Sub_software>
    <Sub_software>Utilities</Sub_software>
    <Sub_software>Video Production</Sub_software>
    <Sub_software>Web Publishing</Sub_software>
  </div>
);
export default Styled_software;
