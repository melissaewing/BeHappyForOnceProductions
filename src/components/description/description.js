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

import descriptionStyle from "./description.module.scss"
import Share from "../social/Share"
import Social from "../social/social"


class Description extends React.Component {    
  constructor(props) {
    super(props);
  }

  getTitle() {
    var html = "";
    if (this.props.previewNode != null) {
      var title =  this.props.previewNode.frontmatter.title;
      for (var i=0;i<title.length;i++) {
        var c =  title.charAt(i);
        if (!isNaN(parseInt(c, 10))) {
          html+= "<span>"+c+"</span>";
        } else {
          html+= c;
        }
      }
    } else{
      if (isMobile) {
         html = "Click once to preview, twice to play."
      } else {
        html = "Hover to preview, click to play."
      }
    } 
    return html;
  }

  getHtml() {
    if (this.props.previewNode != null) {
      return this.props.previewNode.html;
    } else {
      return "";
    }
  }

  render() {
    return (
    <div className={descriptionStyle.descriptionContainer}>            
        <div className={descriptionStyle.title} >
          <h2 dangerouslySetInnerHTML={{ __html:  this.getTitle()}}></h2>
        </div>
        <div className={descriptionStyle.descriptionText}>
            <span dangerouslySetInnerHTML={{ __html: this.getHtml()}}></span>
        </div>
        {this.props.previewNode != null &&
        <Share embed={this.props.previewNode.frontmatter.embed} title={this.props.previewNode.frontmatter.title}></Share>
        }
         {this.props.previewNode == null &&
        <Social bottom={true}></Social>
        }
      </div>
    );
  }
}

export default Description