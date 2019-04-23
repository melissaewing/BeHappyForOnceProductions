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
      this.mouseEnter = this.mouseEnter.bind(this);
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);

      this.openTimeout = null;

    }

    componentDidUpdate(prevProps) {
      if (this.props.loading !== prevProps.loading) {
        setTimeout(() => {
          this.openNav();
          setTimeout(this.closeNav,3000);
        }, 1000);
      }
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

    mouseEnter() {
      this.openTimeout = setTimeout(() => {
         this.openNav();
      }, 200);
    }

    closeNav() {
      if (this.openTimeout) {
        clearTimeout(this.openTimeout);
      }
      this.setState({
        open: false,
        menuClass: ""
      });
    }

    render() {
        return (
        <header>
            <div className={"header-top " + this.state.menuClass}>
                <a id="toggle" className="toggle-menu" href="#" onClick={this.toggleNav}>
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
            </div>

            <div className="navHover" onMouseEnter={this.mouseEnter}></div>
            <nav onMouseLeave={this.closeNav}>
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