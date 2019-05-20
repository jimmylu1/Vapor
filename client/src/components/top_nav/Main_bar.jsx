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
          <a> FEATURED</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> EXPLORE</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> CURATORS</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a>WISHLIST</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> NEWS</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> STATS</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> ABOUT</a>
        </li>
      </ul>
    );
  }
}

class SubCommunity extends React.Component {
  render() {
    return (
      <ul className="nav_submenu" style={{ display: "table-row" }}>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> HOME</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> DISCUSSIONS</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> WORKSHOP</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a>MARKET</a>
        </li>
        <li
          style={{ display: "table-cell" }}
          style={{ verticalAlign: "middle" }}
          style={{ listStyleType: "none" }}
        >
          <a> BROADCAST</a>
        </li>
      </ul>
    );
  }
}

class Main_bar extends React.Component {
  constructor() {
    super();

    this.state = {
      showStore: false,
      showCommunity: false
    };

    this.showStoreMenu = this.showStoreMenu.bind(this);
    this.hideStoreMenu = this.hideStoreMenu.bind(this);
    this.showCommunityMenu = this.showCommunityMenu.bind(this);
    this.hideCommunityMenu = this.hideCommunityMenu.bind(this);
  }

  showStoreMenu() {
    console.log("hover store works");
    this.setState({
      showStore: true
    });
  }

  hideStoreMenu() {
    this.setState({
      showStore: false
    });
  }

  showCommunityMenu() {
    console.log("hover community works");
    this.setState({
      showCommunity: true
    });
  }

  hideCommunityMenu() {
    this.setState({
      showCommunity: false
    });
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav_menu">
          <li
            className="nav_menu_item"
            onMouseLeave={this.hideStoreMenu}
            style={{ listStyleType: "none" }}
          >
            <a onMouseEnter={this.showStoreMenu}>STORE</a>
            {this.state.showStore && <SubStore />}
          </li>
          <li
            className="nav_menu_item"
            onMouseLeave={this.hideCommunityMenu}
            style={{ listStyleType: "none" }}
          >
            <a onMouseEnter={this.showCommunityMenu}>COMMUNITY</a>
            {this.state.showCommunity && <SubCommunity />}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Main_bar;
