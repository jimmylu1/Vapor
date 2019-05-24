import React from "react";
import styled from "styled-components";
import Styled_yourstore from "./Sub_yourstore.jsx";
import Styled_games from "./Sub_games.jsx";
import Styled_software from "./Sub_software.jsx";
import Styled_hardware from "./Sub_hardware.jsx";

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #387197;
  margin-top: 31px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`;

const YourStore = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  /* text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25); */
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;

const Games = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid;
  border-left: 1px solid;
  /* text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25); */
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;
const Software = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid;
  /* text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25); */
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;
const Hardware = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid;
  /* text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25); */
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;
const News = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  margin: 0px 5px 0px 0px;
  position: relative;
  border-right: 1px solid;
  /* text-shadow: -1px -1px 0px rgba(0, 0, 0, 0.25); */
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;

const Searchbox = styled.input`
  position: relative;
  margin-left: 776px;
  margin-top: -35px;
  /* float: left; */
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  background-color: #316282;
  box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 2px;
  height: 26px;
  width: 180px;
  ::placeholder {
    font-family: "Motiva Sans Light", Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-style: italic;
    color: #0e1c25;
  }
`;

const Searchbutton = styled.span``;

class Main_sub extends React.Component {
  constructor() {
    super();
    this.state = {
      displayYourStore: false,
      displayGames: false,
      displaySoftware: false,
      displayHardware: false
    };
    this.showYourstore = this.showYourstore.bind(this);
    this.hideYourstore = this.hideYourstore.bind(this);
    this.showGames = this.showGames.bind(this);
    this.hideGames = this.hideGames.bind(this);
    this.showSoftware = this.showSoftware.bind(this);
    this.hideSoftware = this.hideSoftware.bind(this);
    this.showHardware = this.showHardware.bind(this);
    this.hideHardware = this.hideHardware.bind(this);
  }

  showYourstore() {
    this.setState({
      displayYourStore: true
    });
  }

  hideYourstore() {
    this.setState({
      displayYourStore: false
    });
  }

  showGames() {
    this.setState({
      displayGames: true
    });
  }

  hideGames() {
    this.setState({
      displayGames: false
    });
  }

  showSoftware() {
    this.setState({
      displaySoftware: true
    });
  }

  hideSoftware() {
    this.setState({
      displaySoftware: false
    });
  }

  showHardware() {
    this.setState({
      displayHardware: true
    });
  }

  hideHardware() {
    this.setState({
      displayHardware: false
    });
  }

  render() {
    return (
      <nav>
        <Layout>
          <div
            onMouseLeave={this.hideYourstore}
            style={{ display: "inline-block" }}
          >
            <YourStore
              style={{ display: "inline-block" }}
              onMouseEnter={this.showYourstore}
            >
              Your Store
              <span>
                <img src="https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png" />
              </span>
            </YourStore>
            {this.state.displayYourStore && <Styled_yourstore />}
          </div>
          <div
            onMouseLeave={this.hideGames}
            style={{ display: "inline-block" }}
          >
            <Games
              style={{ display: "inline-block" }}
              onMouseEnter={this.showGames}
            >
              Games
              <span>
                <img src="https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png" />
              </span>
            </Games>
            {this.state.displayGames && <Styled_games />}
          </div>
          <div
            onMouseLeave={this.hideSoftware}
            style={{ display: "inline-block" }}
          >
            <Software
              style={{ display: "inline-block" }}
              onMouseEnter={this.showSoftware}
            >
              Software
              <span>
                <img src="https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png" />
              </span>
            </Software>
            {this.state.displaySoftware && <Styled_software />}
          </div>
          <div
            onMouseLeave={this.hideHardware}
            style={{ display: "inline-block" }}
          >
            <Hardware
              style={{ display: "inline-block" }}
              onMouseEnter={this.showHardware}
            >
              Hardware
              <span>
                <img src="https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png" />
              </span>
            </Hardware>
            {this.state.displayHardware && <Styled_hardware />}
          </div>
          <div style={{ display: "inline-block" }}>
            <News style={{ display: "inline-block" }}>News</News>
          </div>
        </Layout>
        <Searchbox placeholder="search the store" />
        {/* <span> &#x1f50e;</span> */}
        {/* <Searchbutton /> */}
        <div />
      </nav>
    );
  }
}

export default Main_sub;
