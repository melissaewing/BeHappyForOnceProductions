import React from "react"
import YouTube from 'react-youtube'
import {
  isMobile
} from "react-device-detect";

import styled from 'styled-components'
import x from '../../images/x.gif'

import fullScreenStyle from "./fullScreenVideo.module.css"

const CloseButton = styled.div `
  background: rgba(0,0,0,.5) url(${x});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 1s;
  position: fixed;
  right: 0;
  top: 0;
  width: 35px !important;
  height: 35px !important;
  margin: 5px;
  z-index: 200;
  cursor: pointer;
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


class FullScreenVideo extends React.Component {
    constructor(props) {
        super(props);
        this.closeFullScreen = this.closeFullScreen.bind(this);
    }

    closeFullScreen() {
      this.props.closeFullScreen();
    }

    render() {
    const videoId = (this.props.playNode ? this.props.playNode.frontmatter.embed : "");
   
    let update_width  = window.innerWidth;
    let update_height = window.innerWidth*9/16;
    
 /*   if (update_height + 40 >= window.innerHeight) {
      update_height = window.innerHeight-40;
      update_width = update_height*16/9;
    }*/
   
    const opts = {
        width: update_width,
        height: update_height,
        playerVars: { 
            showinfo: 1, 
            controls: 1,
            autoplay: 0,
            version: 3,
            playlist: videoId,
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
      <div className={this.props.playNode ? fullScreenStyle.fullScreenOverlay : fullScreenStyle.hidden}>
        <YouTube 
            ref={"player"}
            videoId={this.props.embed}
            id={this.props.id}
            className={fullScreenStyle.fullScreenPlayer}
            opts={opts}
            onReady={this._onReady}
        />
        <CloseButton onClick={this.closeFullScreen} className={isMobile ? fullScreenStyle.hidden : ""}></CloseButton>
      </div>
    );
  }
  _onReady(event) {
     
  }
}

export default FullScreenVideo