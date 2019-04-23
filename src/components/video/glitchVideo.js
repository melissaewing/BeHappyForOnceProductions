import React from "react"
import YouTube from 'react-youtube'

class GlitchVideo extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
    const videoId = this.props.embed;   
    const opts = {
        width: '480',
        height: '270',
        playerVars: { 
            showinfo: 0, 
            controls: 0,
            autoplay: 1,
            version: 3,
            playlist: videoId,
            loop: 1,
            start: 10,
            fs: 0,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 0,
            modestbranding: 1
        },
        loadEnd: this.props.loadEnd
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
      this.opts.loadEnd();
  }
}

export default GlitchVideo