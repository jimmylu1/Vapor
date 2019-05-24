import React from "react";
import styled from "styled-components";

const Player_layout = styled.div`
  display: flex;
  flex-direction: column;
`;

class Player_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Player_box>
          <div>PLAYER</div>
          <div>HELLO</div>
        </Player_box>
      </div>
    );
  }
}

export default Player_box;
