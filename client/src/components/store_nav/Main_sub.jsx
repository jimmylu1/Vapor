import React from "react";
import styled from "styled-components";
import Styled_yourstore from "./Sub_yourstore.jsx";
import Styled_games from "./Sub_games.jsx";
import Styled_software from "./Sub_software.jsx";
import Styled_hardware from "./Sub_hardware.jsx";

const Layout = styled.div`
  background-color: #93b3c8;
  margin-top: 120px;
`;

const YourStore = styled.div`
  color: #c6d4df;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 15px;
  position: relative;
  /* float: left; */
  /* border-right: 1px solid;
  border-left: 1px solid; */
  &:hover {
    color: white;
  }
`;

const Games = styled.div`
  color: #c6d4df;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 0px 7px 0px 15px;
  position: relative;
  /* float: left; */
  border-right: 1px solid;
  border-left: 1px solid;
  */ &:hover {
    color: white;
  }
`;
const Software = styled.div`
  color: #c6d4df;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 0px 7px 0px 15px;
  position: relative;
  /* float: left;  */
  /* border-right: 1px solid;
  border-left: 1px solid; */
  &:hover {
    color: white;
  }
`;
const Hardware = styled.div`
  color: #c6d4df;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 0px 7px 0px 15px;
  position: relative;
  /* float: left; */
  /* border-right: 1px solid;
  border-left: 1px solid; */
  &:hover {
    color: white;
  }
`;
const News = styled.div`
  color: #c6d4df;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 0px 7px 0px 15px;
  position: relative;
  /* float: left;  */
  /* border-right: 1px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid; */
  &:hover {
    color: white;
  }
`;

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
    console.log("yourstore working show");
    this.setState({
      displayYourStore: true
    });
  }

  hideYourstore() {
    console.log("yourstore working hide");
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
              // style={{ position: "absolute" }}
            >
              Your Store
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
            </Hardware>
            {this.state.displayHardware && <Styled_hardware />}
          </div>
          <div style={{ display: "inline-block" }}>
            <News style={{ display: "inline-block" }}>News</News>
          </div>
        </Layout>
      </nav>
    );
  }
}

export default Main_sub;
