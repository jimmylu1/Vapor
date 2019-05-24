import React from "react";
import styled from "styled-components";
import Friends_box from "./Friends_box.jsx";
import Player_box from "./Player_box.jsx";

const Side_layout = styled.div`
  display: flex;
  flex-direction: column;
`;

class Side_bar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Side_layout>
        <Friends_box />
        <br />
        <Player_box />
      </Side_layout>
    );
  }
}

export default Side_bar;
