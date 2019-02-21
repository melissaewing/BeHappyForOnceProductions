import React from "react"
import YouTube from 'react-youtube'

import galleryStyle from "./videoGallery.module.scss"

class Video extends React.Component {    
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
   return (nextProps.preview!=this.props.preview
          ||nextProps.play!=this.props.play
          ||nextProps.fullScreen!=this.props.fullScreen);
  }
  componentDidUpdate() {
    const player = this.refs.player.internalPlayer;
      if (this.props.fullScreen) {
        player.seekTo(0);
        player.unMute();
        player.playVideo();
        var iframe = document.getElementById("player_"+this.props.embed);

        var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
       console.log(requestFullScreen);
        if (requestFullScreen) {
        requestFullScreen.bind(iframe)();
       }
      } else if (this.props.play||this.props.preview) {
        player.mute();
        player.playVideo();
      } else {
        player.pauseVideo();
      }
  }
  render() {
    const opts = {
        height: '390',
        width: '640', 
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
      <div>
        <YouTube
            id={"player_"+this.props.embed}
            ref={"player"}
            videoId={this.props.embed}
            opts={opts}
            className={this.props.fullScreen ? galleryStyle.fullScreen 
              : ((this.props.preview||this.props.play) ? galleryStyle.previewVideo 
              :  galleryStyle.hidden)}
            onReady={this._onReady}
            onPause={this._onPause}
            onPlay ={this._onPlay}
        />
      {/*  <a className={(this.props.fullScreen ? galleryStyle.closeButton : galleryStyle.hidden)} href="#" onClick={this.closeFullScreen} onTouchEnd={this.closeFullScreen}>
          <i></i>
          <i></i>
          <i></i>
        </a>*/}
    </div>
    );
  }
  _onReady(event) {
    event.target.mute();
    event.target.pauseVideo();
  }
  _onPause(event) {

  }
  _onPlay(event) {

  }
}

export default Video