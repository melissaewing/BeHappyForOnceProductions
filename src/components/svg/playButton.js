import React from "react"
import thumbStyle from "../video/thumb.module.scss"

const PlayButton = ({
    style = { thumbStyle },
    fill = '#fff',
    width = '50%',
    className = "playBut",
    height = '100%',
    viewBox = '0 0 200 200',
  }) => 
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={thumbStyle.playBut}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon className={thumbStyle.triangle} 
                fill="none" 
                strokeWidth="7" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeMiterlimit="10" 
                points="70,70,140,105,70,140 "/>
      <circle className={thumbStyle.circle} 
                fill="none"  
                strokeWidth="7" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeMiterlimit="10" 
                cx="106.8" cy="106.8" r="103.3"cx="100" cy="100" r="90"/>
    </svg>;

export default PlayButton