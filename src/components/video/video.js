import React from "react"
import YouTube from 'react-youtube'

import galleryStyle from "./videoGallery.module.scss"

class Video extends React.Component {    
  constructor(props) {
    super(props);
    this.loadEnd = this.props.loadEnd.bind(this,this.props.embed);
  }
  shouldComponentUpdate(nextProps, nextState){
    const update = (nextProps.pause!=this.props.pause
      ||nextProps.preview!=this.props.preview
      ||nextProps.play!=this.props.play
      ||nextProps.fullScreen!=this.props.fullScreen);

   return update;
  }
  componentDidUpdate() {
    const player = this.refs.player.internalPlayer;
      if (this.props.fullScreen && this.props.play) {
        player.pauseVideo();
      } else {
        if (this.props.pause) {
          player.pauseVideo();
        } else if (this.props.preview) {
          player.mute();
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      }
  }

  getVideoClass() {
      if (this.props.preview || this.props.play) {
        return galleryStyle.previewVideo;
      } else { 
        return galleryStyle.hidden;
      }
  }
  getOverlayClass() {
    if (this.props.fullScreen) {
      return galleryStyle.fullScreenOverlay;
    } else { 
      return galleryStyle.videoContainer;
    }
  }

  //this.props.fullScreen ? (!isMobile ? galleryStyle.fullScreen : galleryStyle.previewVideo)
   //           : ((this.props.preview||this.props.play) ? galleryStyle.previewVideo : galleryStyle.hidden)

  render() {
    const videoId = this.props.embed;   
    const opts = {
      height: '390',
      width: '640', 
        playerVars: {
          showinfo: 0, 
          controls: 0, 
          rel: 0,
          autoplay: 0,
          version: 3,
          playlist: videoId,
          loop: 1,
          start: 10,
          fs: 1,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 1,
          modestbranding: 1,
          origin: 'https://www.behappyforonce.com'
        }

    };
    return (
      <div className={galleryStyle.videoContainer/*this.getOverlayClass()*/}>
        <YouTube
            ref={"player"}
            videoId={this.props.embed}
            opts={opts}
            className={this.getVideoClass()}
            loadEnd={this.loadEnd}
            onReady={this._onReady}
        />
      </div>
    );
  }
  _onReady(event) {
    this.loadEnd();
    event.target.mute();
    event.target.playVideo(); 
  }
}

export default Video