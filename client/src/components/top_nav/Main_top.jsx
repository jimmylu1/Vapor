import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper.jsx";
import Styled_store from "./SubStore.jsx";
import Styled_community from "./SubCommunity.jsx";
import Styled_user from "./SubUser.jsx";
import { notif } from "./notif.png";

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
  right: 555px;
  /* right: 604px; */
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
  right: 430px;
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

const Install = styled.button`
  color: #e5efdc;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 11px;
  text-align: center;
  background: #616a72;
  padding: 4px 9px 0px 35px;
  position: absolute;
  top: 14px;
  right: 130px;
  height: 19px;
  &:hover {
    color: white;
  }
`;

const Notif = styled.button`
  color: #ffffff;
  background: #262625;
  margin: 0px 3px 0px 8px;
  padding: 0px 8px;
  position: absolute;
  top: 14px;
  right: 20px;
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
      <nav>
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
          <Install
            as="a"
            href="https://store.steampowered.com/about/"
            style={{ textDecoration: "none" }}
          >
            Install Steam
          </Install>
        </Wrapper>
      </nav>
    );
  }
}

export default Main_top;
