import React from "react";
import ReactDOM from "react-dom";
import Main_top from "./components/top_nav/main_top.jsx";
import Wishlist from "./components/store_nav/Wishlist.jsx";
import Main_sub from "./components/store_nav/Main_sub.jsx";

class Navbar_sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main_top />
        <Wishlist>Wishlist</Wishlist>
        <Main_sub />
      </div>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
