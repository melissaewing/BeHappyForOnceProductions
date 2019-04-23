import React from "react"
import thumbStyle from "./thumb.module.scss"
import PlayButton from "../svg/playButton"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


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
  //  this.myRef.addEventListener('transitionend', this.play);
  }
  componentWillUnmount () {
  //  this.myRef.removeEventListener('transitionend', this.play);
  }
  shouldComponentUpdate(nextProps, nextState){
    return (nextProps.preview!=this.props.preview
      ||nextProps.play!=this.props.play
      ||nextProps.style!=this.props.style);
  }
  mouseEnter() {
    if (!isMobile) {
      this.props.mouseEnter();
    }
  }
  mouseLeave() {
    if (!isMobile) {
      this.props.mouseLeave();
    }
  }

  click() {
      this.props.click(this.myRef);
  }

  play(event) {
    if (this.props.play && event.target==this.myRef) {
      this.props.openFullScreen();
    }
  }

  getThumbContainerClass() {
    var className = thumbStyle.thumbContainer;
    if (isMobile) {
      className += " " + thumbStyle.mobile;
    }
    if (this.props.play) {
      className += " " + thumbStyle.play;
    } else if (this.props.preview) {
      className += " " + thumbStyle.preview;
    }
    return className;
  }

  render() {
    return (
    <div ref={ (ref) => this.myRef=ref } 
            className={this.getThumbContainerClass()}
            style={this.props.style}
            onClick={this.click}
            onTouchStart={this.mouseEnter}
            onTouchEnd={this.mouseLeave}
            onMouseEnter={(!isMobile ? this.mouseEnter : null)}
            onMouseLeave={(!isMobile ? this.mouseLeave : null)}>
       
     
        <PlayButton/>
        <div className={thumbStyle.infoBlock}>
          <div className={thumbStyle.thumbTitle}>{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default Thumb