import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        secondary
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          boxShadow: "5px 5px silver",
          margin: "0px",
        }}
      >
        <Menu.Item header>JUOKSUJAOSTO</Menu.Item>
        <Menu.Item
          name="home"
          as={Link}
          to="/"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="what we do"
          active={activeItem === "what we do"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="contact us"
          active={activeItem === "contact us"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="login"
            as={Link}
            to="loginform"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Nav;
