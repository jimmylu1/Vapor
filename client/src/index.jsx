import React from "react";
import ReactDOM from "react-dom";

class Navbar_sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>NAVBAR_SIDEBAR</h2>
      </div>
    );
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar_sidebar"));
