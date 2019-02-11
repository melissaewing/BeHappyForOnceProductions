import React from "react"
import YouTube from 'react-youtube'

class Video extends React.Component {
  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          iv_load_policy: 3
        }
    };
    return (
        <YouTube
            videoId={this.props.embed}
            opts={opts}
            onReady={this._onReady}
        />
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
  }
}

export default Video