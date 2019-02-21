import React from "react"
import YouTube from 'react-youtube'

import galleryStyle from "./videoGallery.module.scss"

class Video extends React.Component {    
  shouldComponentUpdate(nextProps, nextState){
    console.log('should compontnet updatea wtf');
   return (nextProps.preview!=this.props.preview
          ||nextProps.play!=this.props.play
          ||nextProps.fullScreen!=this.props.fullScreen);
  }
  componentDidUpdate() {
    console.log("video update full screen? ", this.props.fullScreen);
    const player = this.refs.player.internalPlayer;
      if (this.props.fullScreen) {
        player.seekTo(0);
        player.unMute();
        player.playVideo();
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
        <YouTube
            ref={"player"}
            videoId={this.props.embed}
            opts={opts}
            className={this.props.fullScreen ? galleryStyle.fullScreen 
              : ((this.props.preview||this.props.play) ? galleryStyle.previewVideo 
              :  galleryStyle.hidden)}
            onReady={this._onReady}
        />
    );
  }
  _onReady(event) {
    console.log("Ready");
    event.target.mute();
    event.target.pauseVideo();
  }
}

export default Video