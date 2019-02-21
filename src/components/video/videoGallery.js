import React from "react"
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Thumb from "./thumb"
import TV from "./TV"
import VideoGalleryContainer from "./videoGalleryContainer"
import Video from "./video"

import galleryStyle
 from "./videoGallery.module.scss"

class VideoGallery extends React.Component {
    constructor(props) {
        super(props);
        const style = {};
        {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
            style[node.frontmatter.embed] = { backgroundImage: `url(https://img.youtube.com/vi/${node.frontmatter.embed}/mqdefault.jpg)`}
        ))}
        this.state = {style: style};
        this.state = {
            previewNode: null,
            playNode: null,
            fullScreen: false,
            style: style
        };
        this.openFullScreen = this.openFullScreen.bind(this);
        this.closeFullScreen = this.closeFullScreen.bind(this);
    }

    handleMouseEnter(node) {
        console.log("handle mouse enter");
        this.setState({
            previewNode: node,
            playNode: null
        });
    }
    handleMouseLeave(node) {
        console.log("handle mouse leave");
        this.setState({
            previewNode: null
        });
    }
    handleClick(node, thumbContainer) {
        console.log("handle click");
        var tv = document.getElementById("TV");
        var galleryContainer = document.getElementById("galleryContainer");
        
        console.log(thumbContainer);
        console.log(tv);
        console.log(galleryContainer);
        var translateX = tv.offsetLeft+tv.offsetWidth*(9/20) - (thumbContainer.offsetLeft+thumbContainer.offsetWidth/2);
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
        console.log("close full screen!");
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
    render() {
    return (
    <div>
        <TV previewNode={this.state.previewNode} playNode={this.state.playNode}>
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                <Video key={node.id} className={galleryStyle}
                   embed={node.frontmatter.embed}
                   preview={(node!=null&&node==this.state.previewNode)}
                   play={(node!=null&&node==this.state.playNode)}
                   fullScreen={(node!=null&&node==this.state.playNode&&this.state.fullScreen)}
                   closeFullScreen={this.closeFullScreen}>
                </Video>
            ))}
        </TV>
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