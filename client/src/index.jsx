import React from "react";
import ReactDOM from "react-dom";
import Main_top from "./components/top_nav/Main_top.jsx";

class Navbar_sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main_top />
      </div>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
