import React from "react"
import styled from 'styled-components'

import tv from '../../images/TV.svg'
import MovingStatic from "../movingStatic"

import galleryStyle from "./videoGallery.module.scss"

class TV extends React.Component {
    render() {

    const Static = styled.div `
        color: rgba(54, 54, 54, 0.3);
        background: url(${MovingStatic});
        display: ${(this.props.previewNode==null&&this.props.playNode==null) ? 'block' : 'none'};
    `
    const TVImg = styled.div `
        background: url(${tv});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        height: 50vw;
        width: 50vw;
        margin: 0px auto;
        display: block;
        position: relative;
    `
    return (
        <div>
            <TVImg id="TV">
                <Static className={galleryStyle.static}></Static>
            </TVImg>   
            <div className={galleryStyle.description} dangerouslySetInnerHTML={{ __html: this.props.previewNode == null ? "<p>hey this is a descript sdfkladsjfklsda wooooo this is longer </p><p>ok here it is her it sssssss wajekrl woooo </p> <p> tup lst paragrampsdf  </p>" : this.props.previewNode.html}}></div>
        </div>
    );
  }
}

export default TV