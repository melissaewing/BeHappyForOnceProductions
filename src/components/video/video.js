import React from "react"
import YouTube from 'react-youtube'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import styled from 'styled-components'

import x from '../../images/x.gif'

import galleryStyle from "./videoGallery.module.scss"

const CloseButton = styled.div `
  background: rgba(0,0,0,.5) url(${x});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 1s;
  position: fixed;
  right: 0;
  top: 0;
  width: 35px;
  height: 35px;
  margin: 10px;
  z-index: 200;
  &:hover {
    background-color: rgba(0,0,0,0);
  }
  &:before {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: inherit;
    content: ' ';
  }
`

class Video extends React.Component {    
  constructor(props) {
    super(props);
    this.loadEnd = this.props.loadEnd.bind(this,this.props.embed);
    this.closeFullScreen = this.closeFullScreen.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState){
    const update = (nextProps.preview!=this.props.preview
      ||nextProps.play!=this.props.play
      ||nextProps.fullScreen!=this.props.fullScreen);
    //console.log("should component updatte??? ", update);
   return update;
  }
  componentDidUpdate() {
    const player = this.refs.player.internalPlayer;
      if (this.props.fullScreen) {
        player.unMute();
      } else if (this.props.play) {

        player.seekTo(0);
        player.pauseVideo();
        player.setPlaybackQuality('hd1080');

      } else if (this.props.preview) {
        player.setPlaybackQuality('small');
        player.mute();
        player.playVideo();
      } else {
        player.setPlaybackQuality('small');
        player.pauseVideo();
      }
  }
  closeFullScreen() {
    this.props.closeFullScreen();
  }
  render() {
    const opts = {
        height: '390',
        width: '640', 
        playerVars: {
          showinfo: 0, 
          modestbranding: 1,
          controls: 0, 
          rel: 0,
          autoplay: 1,
          loop: 1,
          start: 10,
          fs: 1,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 1,
          suggestedQuality: 'small'
        }

    };
    return (
      <div className={(this.props.fullScreen && !isMobile ? galleryStyle.fullScreenOverlay : galleryStyle.videoContainer)}>
        <YouTube
            ref={"player"}
            videoId={this.props.embed}
            opts={opts}
            className={this.props.fullScreen ? (!isMobile ? galleryStyle.fullScreen : galleryStyle.previewVideo)
              : ((this.props.preview||this.props.play) ? galleryStyle.previewVideo : galleryStyle.hidden)}
            loadEnd={this.loadEnd}
            onReady={this._onReady}
        />
        <CloseButton onClick={this.closeFullScreen} className={(this.props.fullScreen && !isMobile) ? "" : galleryStyle.hidden}></CloseButton>
      </div>
    );
  }
  _onReady(event) {
    this.loadEnd();
    event.target.mute();
    event.target.pauseVideo(); 
  }
}

export default Video