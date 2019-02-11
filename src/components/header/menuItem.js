import React from "react"
import { Link } from "gatsby"


class MenuItem extends React.Component {
  render() {
    return(
      <li data-menuanchor={this.props.to}>
        <Link to={this.props.to} data-text={this.props.name}>{this.props.name}
</Link>
        
      </li>
    );
  }
}

export default MenuItem