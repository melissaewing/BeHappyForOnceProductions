import React from "react"

import SVG from "../svg/SVG"
import aboutStyles from "./about.module.css"
import { Shatter, FadeIn } from "../../styles/animations";



export default ({ data }) => {

  return (
    <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.title}>
          <Shatter>
            <SVG position="relative" icon="aboutText"/>
          </Shatter>
        </div>
        
        <FadeIn className={aboutStyles.aboutText}>is a production collective for musicians, performance artists, and media artists located in Brooklyn, NY. </FadeIn>
       
    </div>
  )
}