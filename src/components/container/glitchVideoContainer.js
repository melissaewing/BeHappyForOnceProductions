import React from "react"
import _ from 'lodash'

import GlitchVideo from "../../components/video/glitchVideo"
import "../../styles/glitchVideoContainer.css"

class GlitchVideoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastPlayerIndex: null,
            currentPlayerIndex: 0,
        };
        this.delayedCallback = _.throttle(this.handleWheel, 1000)
    }
    wheel(event) {
        //This will ensure that the event is not pooled
        event.persist()
        this.delayedCallback(event)
    }
    handleWheel(event) {

          //up 
          if (event.nativeEvent.wheelDelta >= 0) {
            console.log("up");
            if (this.state.currentPlayerIndex > 0) {
               this.setState({
                   lastPlayerIndex: this.state.currentPlayerIndex,
                   currentPlayerIndex: this.state.currentPlayerIndex-1
                });

             }
         } //down
         else {
            console.log("down");
            if (this.state.currentPlayerIndex < this.props.data.allMarkdownRemark.edges.length - 1) {
                this.setState({
                    lastPlayerIndex: this.state.currentPlayerIndex,
                    currentPlayerIndex: this.state.currentPlayerIndex+1
                 });

             }
         }
         console.log("last play index ", this.state.lastPlayerIndex);
         console.log("current play index ", this.state.currentPlayerIndex);
    }
    render() {
    return (
   <div className="demo-1 loading">
    <div className="videoContainer" onWheel={this.wheel.bind(this)}>
        <div className="videoBackground">
            <div className="videoForeground glitchvideo">
                {this.props.data.allMarkdownRemark.edges.map(({ node }, i) => (
                    <GlitchVideo className={i == this.state.lastPlayerIndex ? "scrollout" : (i == this.state.currentPlayerIndex ? "scrollin" : "hidden")} 
                    id={"glitchVideo"+i} key={node.id} embed={node.frontmatter.embed}></GlitchVideo>
                ))}
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default GlitchVideoContainer