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
    const TVContainer = styled.div `
        height: auto;
        width: 100%;
        margin: 0px auto;
        display: block;
        position: relative;
    `
    const TVImg = styled.img `
        width: 100%;
        height: auto;
    `
    return (
            <TVContainer id="TV">
                <TVImg src={tv}></TVImg>
                <Static className={galleryStyle.static}></Static>
            </TVContainer>   
    );
  }
}

export default TV