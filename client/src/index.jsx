import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Main_top from "./components/top_nav/main_top.jsx";
import Wishlist from "./components/store_nav/Wishlist.jsx";
import Main_sub from "./components/store_nav/Main_sub.jsx";
import Side_bar from "./components/side_bar/Side_bar.jsx";

const Main_layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* flex-flow: column wrap; */
  /* flex: wrap; */
`;

class Navbar_sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main_top />
        <Wishlist>WISHLIST</Wishlist>
        <Main_sub />
        <Main_layout>
          <Side_bar />
        </Main_layout>
      </div>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
