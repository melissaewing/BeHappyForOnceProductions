import React from "react"
import { graphql } from "gatsby"
import MenuItem from "./menuItem"

import "./header.scss"

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          open: false,
          menuClass: ""
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
    }

    componentDidUpdate(prevProps) {
    }

    toggleNav() {
      if (this.state.open) {
        this.closeNav();
      } else {
         this.openNav();
      }
    }

    openNav() {
      this.setState({
        open: true,
        menuClass: "open-menu"
      });
    }

    closeNav() {
      this.setState({
        open: false,
        menuClass: ""
      });
    }

    render() {
        return (
        <header >
            <div className={"toggle-btn " + this.state.menuClass} onClick={this.toggleNav}>
                <a id="toggle" className="toggle-menu" href="#">
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
            </div>

            <nav className={this.state.menuClass}>
                <ul id="menu">
                    <MenuItem to="/" name="home"/>
                    <MenuItem to="/about" name="about"/>
                    <MenuItem to="/gallery" name="gallery"/>
                    <MenuItem to="/contact" name="contact"/>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header
