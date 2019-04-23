import React from "react"
import {
    isMobileOnly
  } from "react-device-detect";

import Loading from "../loading/loading"
import Thumb from "./thumb"
import TV from "./TV"
import VideoGalleryContainer from "./videoGalleryContainer"
import Video from "./video"
import FullScreenVideo from "./fullScreenVideo"
import Share from "../social/Share"

import styled from 'styled-components'
import fsouter from '../../images/fullscreenouter.png'
import fsinner from '../../images/fullscreeninner.png'
import PlayButton from "../svg/playButton"

import galleryStyle from "./videoGallery.module.scss"

import Description from "../description/description"

const FullScreenOuter = styled.div `
  background: url(${fsouter});
`;

const FullScreenInner = styled.div `
  background: url(${fsinner});
`;


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
        this.state = {style: style};
        this.state = {
            previewNode: null,
            playNode: null,
            fullScreen: false,
            style: style,
            loading: true,
            pause: false
        };
        this.loadEnd = this.loadEnd.bind(this);
        this.openFullScreen = this.openFullScreen.bind(this);
        this.closeFullScreen = this.closeFullScreen.bind(this);
        this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
        this.playFromPreview = this.playFromPreview.bind(this);
        this.mouseOutOverlay = this.mouseOutOverlay.bind(this);
        this.mouseEnterOverlay = this.mouseEnterOverlay.bind(this);

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

        if (isMobile && (this.state.previewNode == null || this.state.previewNode != node)) {
            this.handleMouseEnter(node);
            
        } else {
       /* var tv = document.getElementById("TV");
        var galleryContainer = document.getElementById("galleryContainer");
        
        var translateX = tv.offsetLeft+tv.offsetWidth*.3 - (thumbContainer.offsetLeft+thumbContainer.offsetWidth/2);
        var translateY = tv.offsetTop+tv.offsetHeight*.9 - (thumbContainer.offsetTop+thumbContainer.offsetHeight/2) + galleryContainer.scrollTop;
        var scale = tv.offsetWidth*.3/thumbContainer.offsetWidth;

        let styles = Object.assign({}, this.state.style);
        let nodeStyle = Object.assign({}, this.state.style[node.frontmatter.embed]);
        nodeStyle.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate3d(1, 0, 0, .25turn)`;
        styles[node.frontmatter.embed] = nodeStyle;
*/
        this.setState({
         //   style: styles,
            previewNode: null,
            playNode: node,
            pause: false,
            fullScreen: true
        });
        }
    }

    playFromPreview() {
        const previewNode = this.state.previewNode;
        this.setState({
            previewNode: null,
            playNode: previewNode,
            pause: false,
            fullScreen: true
        });
    }

    mouseOutOverlay() {
        this.setState({
            pause: false
        });
    }

    mouseEnterOverlay() {
        this.setState({
            pause: true
        });
    }

    openFullScreen() {
        this.setState({fullScreen: true});

    }

    closeFullScreen() {
     //   let styles = Object.assign({}, this.state.style);
     //   let nodeStyle = Object.assign({}, this.state.style[this.state.playNode.frontmatter.embed]);
    //    delete nodeStyle.transform;
    //    styles[this.state.playNode.frontmatter.embed] = nodeStyle;
        this.setState({
      //      style: styles,
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
        console.log("playnode", this.state);
    return (
    <div>
    <Loading loading={this.state.loading}></Loading>

    <FullScreenVideo playNode={this.state.playNode} closeFullScreen={this.closeFullScreen}></FullScreenVideo>

    <div className={galleryStyle.container}>
        <div className={galleryStyle.TVContainer}>
            <div className={galleryStyle.TV}>
                <div className={galleryStyle.previewVideoContainer}>
                    <TV previewNode={this.state.previewNode} playNode={this.state.playNode}></TV>
                    {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id+'previewContainer'}>
                            <Video key={node.id}
                                embed={node.frontmatter.embed}
                                preview={(node!=null&&node==this.state.previewNode)}
                                pause={this.state.pause}
                                play={(node!=null&&node==this.state.playNode)}
                                fullScreen={(node!=null&&node==this.state.playNode&&this.state.fullScreen)}
                                loadEnd={this.loadEnd}
                            >
                            </Video>
                            <div key={node.id+'preview'} className={this.state.previewNode ? galleryStyle.previewHoverOverlay : galleryStyle.hidden} 
                                 onClick={()=>this.playFromPreview()} 
                                 onMouseEnter={this.mouseEnterOverlay} 
                                 onMouseOut={this.mouseOutOverlay}>
                                <FullScreenOuter className={galleryStyle.fsouter}></FullScreenOuter>
                                <FullScreenInner className={galleryStyle.fsinner}></FullScreenInner>
                            </div>
                            
                        </div>
                    ))}
                </div>
                
                <div className={galleryStyle.description}> 
                {!isMobileOnly &&
                   <Description previewNode={this.state.previewNode}></Description>
                }
                </div>
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
        <div className={galleryStyle.description}> 
            {isMobileOnly &&
               <Description previewNode={this.state.previewNode}></Description>
            }
        </div>
    </div>
    </div>
    );
  }
}

export default VideoGallery