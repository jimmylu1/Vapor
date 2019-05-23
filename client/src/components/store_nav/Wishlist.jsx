import React from "react";
import styled from "styled-components";

const Wishlist = styled.button`
  font: "Arial", Helvetica;
  font-size: 11px;
  background: rgba(62, 126, 167, 0.8);
  border-radius: 1px;
  border: 1px black;
  color: white;
  margin: 0px 1px;
  padding: 0px 25px;
  position: absolute;
  right: 30px;
  top: 140px;
  height: 20px;
  &:hover {
    color: #62696e;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export default Wishlist;
