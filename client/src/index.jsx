import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/top_nav/Wrapper.jsx";
import Store from "./components/top_nav/Store.jsx";
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
          <Store />
        </Wrapper>
      </div>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
