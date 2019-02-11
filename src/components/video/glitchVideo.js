import React from "react"
import YouTube from 'react-youtube'

import "./glitchVideo.scss"

class GlitchVideo extends React.Component {
    constructor(props) {
        super(props);
        this.activate = this.activate.bind(this);
    }
    componentDidMount() {
        const elm = document.getElementById(this.props.id);
        elm.addEventListener('animationend', this.activate);
    }
    componentWillUnmount () {
      const elm = document.getElementById(this.props.id);
      elm.removeEventListener('animationend', this.activate);
    }
    activate() {
        if (this.props.className=="scrollin") {
            this.refs.player.internalPlayer.playVideo();

        } else {
           this.refs.player.internalPlayer.pauseVideo();
        }
    }
    render() {
    const opts = {
        width: '480',
        height: '270',
        playerVars: { 
            showinfo: 0, 
            autoplay: 1,
            loop: 1,
            start: 10,
            fs: 0,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 0,
            modestbranding: 1
        }
    };
    return (
        <YouTube 
            ref={"player"}
            videoId={this.props.embed}
            id={this.props.id}
            className={this.props.className}
            opts={opts}
            onReady={this._onReady}
        />
    );
  }
  _onReady(event) {
      event.target.mute();
  }
}

export default GlitchVideo