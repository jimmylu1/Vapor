import React from "react";
import styled from "styled-components";

const Sub_user = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 12px;
  padding: 5px 7px 7px;
  &:hover {
    color: white;
  }
`;

const Styled_user = () => (
  <div>
    <Sub_user>ACTIVITY</Sub_user>
    <Sub_user>PROFILE</Sub_user>
    <Sub_user>FRIENDS</Sub_user>
    <Sub_user>GROUPS</Sub_user>
    <Sub_user>CONTENT</Sub_user>
    <Sub_user>BADGES</Sub_user>
    <Sub_user>INVENTORY</Sub_user>
  </div>
);

export default Styled_user;
