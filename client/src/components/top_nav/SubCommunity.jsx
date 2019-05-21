import React from "react";
import styled from "styled-components";

const Sub_community = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 12px;
  padding: 5px 7px 7px;
  &:hover {
    color: white;
  }
`;

const Styled_community = () => (
  <div>
    <Sub_community>HOME</Sub_community>
    <Sub_community>DISCUSSIONS</Sub_community>
    <Sub_community>WORKSHOP</Sub_community>
    <Sub_community>MARKET</Sub_community>
    <Sub_community>BROADCAST</Sub_community>
  </div>
);

export default Styled_community;
