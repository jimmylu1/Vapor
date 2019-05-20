import React from "react";

class SubStore extends React.Component {
  render() {
    return (
      <ul className="nav_submenu" style={{ display: "table-row" }}>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> Featured</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> Explore</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> Curators</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a>Wishlist</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> News</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> Stats</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> About</a>
        </li>
      </ul>
    );
  }
}

class Store extends React.Component {
  constructor() {
    super();

    this.state = {
      showStore: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    console.log("hover store works");
    this.setState({
      showStore: true
    });
  }

  hideMenu() {
    this.setState({
      showStore: false
    });
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav_menu">
          <li
            className="nav_menu_item"
            onMouseLeave={this.hideMenu}
            style={{ listStyleType: "none" }}
          >
            <a onMouseEnter={this.showMenu}>Store</a>
            {this.state.showStore && <SubStore />}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Store;
