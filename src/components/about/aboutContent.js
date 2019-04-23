import React from "react"

import SVG from "../svg/SVG"
import aboutStyles from "./about.module.css"
import { Shatter, FadeIn } from "../../styles/animations";
import Social from "../social/social";
import {isMobile} from 'react-device-detect';

import drew from '../../images/drew.jpeg'
import drewMobile from '../../images/drew_mobile2.png'


export default ({ data }) => {

  return (
    <div className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.textContainer}>
        <div className={aboutStyles.title}>
          <Shatter>
            <SVG position="relative" icon="aboutText"/>
          </Shatter>
        </div>
        <FadeIn className={aboutStyles.aboutText}>Drew Rosenthal is an award winning video artist making content for Brooklyn and NYC based musicians and performance artists. His work combines alternative comedy, glitch art, and social media signifiers to create post-reality spectacles.</FadeIn>
      </div>
      <div className={aboutStyles.drewContainer}>
        <img id={aboutStyles.drew} src={isMobile ? drewMobile : drew}></img>
      </div>
    </div>
  )
}