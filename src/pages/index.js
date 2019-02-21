import React from "react"

import Header from "../components/header/header"
import Title from "../components/title/title"
import GlitchVideo from "../components/video/glitchVideo"

import Arrow from "../components/svg/arrow"
import gvcStyle from "../components/video/glitchVideoContainer.module.css"

export default () => {
  return (
    <div>
        <Header></Header>
        <Title></Title>
        <Arrow/>
        <div className={gvcStyle.videoContainer}>
            <div className={gvcStyle.videoBackground}>
                <div className={gvcStyle.videoForeground}>
                    <GlitchVideo embed="_VMDl_Xi7-A"></GlitchVideo>
                </div>
            </div>
        </div>
    </div>
  )
}