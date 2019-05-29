import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Main_top from "./components/top_nav/main_top.jsx";
import Wishlist from "./components/store_nav/Wishlist.jsx";
import Main_sub from "./components/store_nav/Main_sub.jsx";
import Side_bar from "./components/side_bar/Side_bar.jsx";
import axios from "axios";

const Background = styled.div`
  background-image: url(https://steamcdn-a.akamaihd.net/steam/apps/570/page_bg_generated_v6b.jpg?t=1557267263);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main_layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

class Navbar_sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Background>
        <Main_top />
        <Wishlist>WISHLIST</Wishlist>
        <Main_sub />
        <br />
        <Main_layout>
          <Side_bar />
        </Main_layout>
      </Background>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
