import React from "react"
import { graphql } from "gatsby"
import MenuItem from "./menuItem"

import "./header.scss"

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          open: true,
          menuClass: "open-menu"
      };
      this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        if (this.state.open) {
            this.setState({
                open: false,
                menuClass: ""
            });
        } else {
            this.setState({
                open: true,
                menuClass: "open-menu"
            });
        }
    }
    render() {
        return (
        <header>
            <div className={"header-top clearfix " + this.state.menuClass}>
                <a id="toggle" className="toggle-menu" href="#" onClick={this.toggleNav}>
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
            </div>

            <nav className="hide">
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


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            embed
          }
          fields {
              slug
          }
          excerpt
        }
      }
    }
  }
`