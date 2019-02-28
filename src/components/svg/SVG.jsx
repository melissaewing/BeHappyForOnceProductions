import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  position: ${props => props.position};
  stroke: currentColor;
  ${props => props.hiddenMobile/* && hidden*/};
  color: ${props => props.stroke};
  width: ${props => props.width};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  text: {
    shape: (
      <text 
        stroke='white'
        className="spinText" 
        x="0" y="55" 
        stroke="white" 
        strokeWidth=".1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit="10" 
        fontSize="58px" 
        fontFamily="'Above', Verdana, Tahoma">
          <tspan>Get in</tspan>
          <tspan x="0" y="113">Touch</tspan>
        </text>
    ),
    viewBox: '0 0 200 120',
  },
  aboutText: {
    shape: (
      <text 
        stroke='white'
        x="0" y="45" 
        stroke="white" 
        strokeWidth=".1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit="10" 
        fontFamily="'Above', Verdana, Tahoma">
          <tspan fontSize="35px" >Be Happy For Once</tspan>
          <tspan fontSize="55px" x="0" y="100">Productions</tspan>
        </text>
    ),
    viewBox: '0 0 390 110',
  },
  triangle: {
    shape: (
      <polygon
        fill="none" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit="10" 
        points="70,70,140,105,70,140 "
      />
    ),
    viewBox: '0 0 200 200',
  },
  circle: {
    shape: (
    <>
      <rect 
        className="spin"
        fill="none"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit="10" 
        x="1" y="5" rx="40" ry="40" width="198" height="100"/>
/>
      <rect 
        className="border"
        fill="none"
        stroke="white"
        strokeWidth="1"
        x="1" y="5" rx="40" ry="40" width="198" height="100"/>
      <text className="spinText" x="29" y="68" stroke="white" fontSize="40px" fontFamily="'Above', Verdana, Tahoma">Submit</text>
      </>
      ),
    viewBox: '0 0 200 110',
  },
  arrowRight: {
    shape: (
        <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"/>
    ),
    viewBox: '0 0 32 32',
  },
  smCircle: {
    shape: (
        <circle cx="16" cy="16" r="15"/>
    ),
    viewBox: '0 0 32 32'
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
}

const SVG = ({ position, stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    position={position}
    stroke={stroke}
    fill={fill}
    svgWidth="200" //icons[icon].svgWidth}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  position: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['text', 'aboutText', 'triangle', 'circle', 'arrowRight', 'smCircle', 'arrowUp', 'upDown', 'box', 'hexa']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  position: 'absolute',
  stroke: 'transparent',
  width: 7,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
