import React from "react"
import styled from 'styled-components'

import tv from '../../images/tv.svg'
import MovingStatic from "../movingStatic"

import galleryStyle from "./videoGallery.module.scss"

class TV extends React.Component {
    render() {

    const Static = styled.div `
        color: rgba(54, 54, 54, 0.3);
        background: url(${MovingStatic});
        display: ${(this.props.previewNode==null&&this.props.playNode==null) ? 'block' : 'none'};
    `

    return (
    <div className={galleryStyle.TVContainer}>
        <div className={galleryStyle.TV}>
            <div id="TV" className={galleryStyle.previewVideoContainer}>
                <Static className={galleryStyle.static}></Static>
                {this.props.children}
            </div>   
            <div className={galleryStyle.description} dangerouslySetInnerHTML={{ __html: this.props.previewNode == null ? "<p>hey this is a descript sdfkladsjfklsda wooooo this is longer </p><p>ok here it is her it sssssss wajekrl woooo </p> <p> tup lst paragrampsdf  </p>" : this.props.previewNode.html}}></div>
        </div>
    </div>
    );
  }
}

export default TV