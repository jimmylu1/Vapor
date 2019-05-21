import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper.jsx";
import Styled_store from "./SubStore.jsx";

const Store = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
  }
`;

const Community = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
  }
`;

const User = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
  }
`;

const Chat = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
  }
`;

const Support = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
  }
`;

class Main_top extends React.Component {
  constructor() {
    super();
    this.state = {
      displayStore: false
    };
    this.showStore = this.showStore.bind(this);
    this.hideStore = this.hideStore.bind(this);
  }

  showStore() {
    this.setState({
      displayStore: true
    });
  }

  hideStore() {
    this.setState({
      displayStore: false
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <img
            src="https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016"
            width="176"
            height="44"
            position="absolute"
          />
          <div onMouseLeave={this.hideStore}>
            <Store
              style={{ display: "inline-block" }}
              onMouseEnter={this.showStore}
            >
              STORE
            </Store>
            {this.state.displayStore && <Styled_store />}
          </div>
          <Community style={{ display: "inline-block" }}>COMMUNITY</Community>
          <User style={{ display: "inline-block" }}>USER</User>
          <Chat style={{ display: "inline-block" }}>CHAT</Chat>
          <Support style={{ display: "inline-block" }}>SUPPORT</Support>
        </Wrapper>
      </div>
    );
  }
}

export default Main_top;
