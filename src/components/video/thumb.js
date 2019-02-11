import React from "react"
import thumbStyle from "./thumb.module.css"

class Thumb extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    window.location.assign(this.props.slug);
  }
  render() {
    return (
      <button onClick={this.handleClick} className={thumbStyle.thumbContainer}>
        <img src={'https://img.youtube.com/vi/' + this.props.embed + "/mqdefault.jpg" } />
        <div className={thumbStyle.infoBlock}>
          <span className={thumbStyle.thumbTitle}>{this.props.title}</span>
        </div>
      </button>
    );
  }
}

export default Thumb