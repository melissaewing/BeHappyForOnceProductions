import React from "react"
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Loading from "../loading/loading"
import Thumb from "./thumb"
import TV from "./TV"
import VideoGalleryContainer from "./videoGalleryContainer"
import Video from "./video"

import galleryStyle from "./videoGallery.module.scss"

class VideoGallery extends React.Component {
    constructor(props) {
        super(props);
        const style = {};
        {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
            style[node.frontmatter.embed] = { backgroundImage: `url(https://img.youtube.com/vi/${node.frontmatter.embed}/mqdefault.jpg)`}
        ))}
        this.loadVids = {};
        {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
            this.loadVids[node.frontmatter.embed] = false
        ))}
        console.log(this.loadVids);
        this.state = {style: style};
        this.state = {
            previewNode: null,
            playNode: null,
            fullScreen: false,
            style: style,
            loading: true
        };
        this.loadEnd = this.loadEnd.bind(this);
        this.openFullScreen = this.openFullScreen.bind(this);
        this.closeFullScreen = this.closeFullScreen.bind(this);
        this.handleFullScreenChange = this.handleFullScreenChange.bind(this);

    }
    componentDidMount() {
        ['fullscreenchange','msfullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange'].forEach( evt => 
          document.addEventListener(evt, this.handleFullScreenChange, false)
        );
    }
    componentWillUnmount() {
        ['fullscreenchange','msfullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange'].forEach( evt => 
          document.removeEventListener(evt, this.handleFullScreenChange, false)
        );
    }
    loadEnd(vidEmbed) {
        this.loadVids[vidEmbed] = true;
        let loaded = true;
        for (let [key, value] of Object.entries(this.loadVids)) {
            if (!value) {
                loaded = false;
                break;
            }
        }
        if (loaded) {
           this.setState({loading: false});
        }
    }
    handleMouseEnter(node) {
        this.setState({
            previewNode: node,
            playNode: null
        });
    }
    handleMouseLeave(node) {
        this.setState({
        //    previewNode: null
        });
    }
    handleClick(node, thumbContainer) {
        var tv = document.getElementById("TV");
        var galleryContainer = document.getElementById("galleryContainer");
        
        var translateX = tv.offsetLeft+tv.offsetWidth*.3 - (thumbContainer.offsetLeft+thumbContainer.offsetWidth/2);
        var translateY = tv.offsetTop+tv.offsetHeight*.9 - (thumbContainer.offsetTop+thumbContainer.offsetHeight/2) + galleryContainer.scrollTop;
        var scale = tv.offsetWidth*.3/thumbContainer.offsetWidth;

        let styles = Object.assign({}, this.state.style);
        let nodeStyle = Object.assign({}, this.state.style[node.frontmatter.embed]);
        nodeStyle.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate3d(1, 0, 0, .25turn)`;
        styles[node.frontmatter.embed] = nodeStyle;

        this.setState({
            style: styles,
            previewNode: null,
            playNode: node
        });
    }
    openFullScreen() {
        this.setState({fullScreen: true});
    }
    closeFullScreen() {
        let styles = Object.assign({}, this.state.style);
        let nodeStyle = Object.assign({}, this.state.style[this.state.playNode.frontmatter.embed]);
        delete nodeStyle.transform;
        styles[this.state.playNode.frontmatter.embed] = nodeStyle;
        this.setState({
            style: styles,
            previewNode: null,
            playNode: null,
            fullScreen: false
        });
    }
    handleFullScreenChange() {
        if (!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement !== null)) {
          if (isMobile) {
              this.closeFullScreen();
          }
        }
      }
    render() {

        console.log(this.state.previewNode);
    // console.log(this.props.previewNode.html);
    return (
    <div className={galleryStyle.container}>
        <Loading loading={this.state.loading}></Loading>
        <div className={galleryStyle.TVContainer}>
            <div className={galleryStyle.TV}>
                <div className={galleryStyle.previewVideoContainer}>
                    <TV previewNode={this.state.previewNode} playNode={this.state.playNode}></TV>
                    {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                        <Video key={node.id}
                            embed={node.frontmatter.embed}
                            preview={(node!=null&&node==this.state.previewNode)}
                            play={(node!=null&&node==this.state.playNode)}
                            fullScreen={(node!=null&&node==this.state.playNode&&this.state.fullScreen)}
                            closeFullScreen={this.closeFullScreen}
                            loadEnd={this.loadEnd}
                       >
                        </Video>
                    ))}
                </div>
                <div className={galleryStyle.description} dangerouslySetInnerHTML={{ __html: this.state.previewNode == null ? "" : this.state.previewNode.html}}></div>
            </div>
        </div>
        <VideoGalleryContainer>
        {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
            <Thumb key={node.id} 
                   mouseEnter={() => this.handleMouseEnter(node)} 
                   mouseLeave={() => this.handleMouseLeave(node)} 
                   click={(thumbContainer) => this.handleClick(node, thumbContainer)} 
                   style={this.state.style[node.frontmatter.embed]}
                   openFullScreen={this.openFullScreen}
                   preview={(node!=null&&node==this.state.previewNode)}
                   play={(node!=null&&node==this.state.playNode)}
                   title={node.frontmatter.title}>
            </Thumb>
        ))}
        </VideoGalleryContainer>
    </div>
    );
  }
}

export default VideoGallery