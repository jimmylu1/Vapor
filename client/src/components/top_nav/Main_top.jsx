import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper.jsx";
import Styled_store from "./SubStore.jsx";
import Styled_community from "./SubCommunity.jsx";
import Styled_user from "./SubUser.jsx";

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
  position: absolute;
  top: 20px;
  right: 6px;
  &:hover {
    color: white;
  }
`;

const Chat = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: absolute;
  top: 20px;
  right: 553px;
  &:hover {
    color: white;
  }
`;

const Support = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: absolute;
  top: 20px;
  right: 475px;
  &:hover {
    color: white;
  }
`;

class Main_top extends React.Component {
  constructor() {
    super();
    this.state = {
      displayStore: false,
      displayCommunity: false,
      displayUser: false
    };
    this.showStore = this.showStore.bind(this);
    this.hideStore = this.hideStore.bind(this);
    this.showCommunity = this.showCommunity.bind(this);
    this.hideCommunity = this.hideCommunity.bind(this);
    this.showUser = this.showUser.bind(this);
    this.hideUser = this.hideUser.bind(this);
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

  showCommunity() {
    this.setState({
      displayCommunity: true
    });
  }

  hideCommunity() {
    this.setState({
      displayCommunity: false
    });
  }

  showUser() {
    this.setState({
      displayUser: true
    });
  }

  hideUser() {
    this.setState({
      displayUser: false
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
          <div
            onMouseLeave={this.hideStore}
            style={{ display: "inline-block" }}
          >
            <Store
              style={{ display: "inline-block" }}
              onMouseEnter={this.showStore}
            >
              STORE
            </Store>
            {this.state.displayStore && <Styled_store />}
          </div>
          <div
            onMouseLeave={this.hideCommunity}
            style={{ display: "inline-block" }}
          >
            <Community
              style={{ display: "inline-block" }}
              onMouseEnter={this.showCommunity}
            >
              COMMUNITY
            </Community>
            {this.state.displayCommunity && <Styled_community />}
          </div>
          <div onMouseLeave={this.hideUser} style={{ display: "inline-block" }}>
            <User
              style={{ display: "inline-block" }}
              onMouseEnter={this.showUser}
            >
              USER
            </User>
            {this.state.displayUser && <Styled_user />}
          </div>
          <Chat style={{ display: "inline-block" }}>CHAT</Chat>
          <Support style={{ display: "inline-block" }}>SUPPORT</Support>
        </Wrapper>
      </div>
    );
  }
}

export default Main_top;
