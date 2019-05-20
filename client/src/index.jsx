import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/top_nav/Wrapper.jsx";
import Main_bar from "./components/top_nav/Main_bar.jsx";
class Navbar_sidebar extends React.Component {
  constructor() {
    super();
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
          <Main_bar />
        </Wrapper>
      </div>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
