import React from "react";
import styled from "styled-components";

const Sub_store = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 12px;
  padding: 5px 7px 7px;
  &:hover {
    color: white;
  }
`;

const Styled_store = () => (
  <div>
    <Sub_store>FEATURED</Sub_store>
    <Sub_store>EXPLORE</Sub_store>
    <Sub_store>CURATORS</Sub_store>
    <Sub_store>WISHLIST</Sub_store>
    <Sub_store>NEWS</Sub_store>
    <Sub_store>STATS</Sub_store>
    <Sub_store>ABOUT</Sub_store>
  </div>
);

export default Styled_store;
