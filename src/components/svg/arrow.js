import React from "react"
import arrowStyle from "../svg/arrow.module.scss"

export default ({
    style = { arrowStyle },
    fill = '#fff',
    width = '32',
    height = '32',
    className = "arrowSVG",
    viewBox = '0 0 32 32',
  }) => 
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={arrowStyle.arrowSVG}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path className={arrowStyle.arrow} d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"/>
      <circle className={arrowStyle.circle} cx="16" cy="16" r="15"/>
    </svg>;
