import React from "react"
import thumbStyle from "./thumb.module.scss"
import PlayButton from "../svg/playButton"

class Thumb extends React.Component {
  constructor(props) {
    super(props);
    
    this.myRef = null;

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.click = this.click.bind(this);
    this.play = this.play.bind(this);
  } 
  componentDidMount() {
    this.myRef.addEventListener('transitionend', this.play);
  }
  componentWillUnmount () {
    this.myRef.removeEventListener('transitionend', this.play);
  }
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.preview!=this.props.preview
      ||nextProps.play!=this.props.play
      ||nextProps.style!=this.props.style);
  }
  mouseEnter() {
      this.props.mouseEnter();
  }
  mouseLeave() {
      this.props.mouseLeave();
  }
  click() {
      this.props.click(this.myRef);
  }

  play(event) {
    if (this.props.play && event.target==this.myRef) {
      this.props.openFullScreen();
    }
  }

  render() {
    return (
      <div ref={ (ref) => this.myRef=ref } 
            className={thumbStyle.thumbContainer+" "+(this.props.play ? thumbStyle.play : (this.props.preview ? thumbStyle.preview : ""))}
            style={this.props.style}
            onClick={this.click}
            onTouchStart={this.mouseEnter}
            onTouchEnd={this.mouseLeave}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}>
        <PlayButton/>
        <div className={thumbStyle.infoBlock}>
          <span className={thumbStyle.thumbTitle}>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Thumb