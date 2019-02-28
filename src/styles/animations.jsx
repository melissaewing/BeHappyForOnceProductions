import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const shatter = keyframes`
  from {
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    opacity: 0.3;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
`

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeInAnimation = css`
  ${fadein} 2s ease-out 1 normal;
`

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`

const shatterAnimation = css`
  ${shatter} 3s ease-in-out 1 alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
`

export const Shatter = styled.div`
  animation: ${shatterAnimation};
`

export const FadeIn = styled.div`
  animation: ${fadeInAnimation};
`

export const Spin = styled.div`
    .spin {
        -webkit-transition: all 0.5s ease-in-out;
        stroke-dasharray: 650;
        stroke-dashoffset: 650;
        opacity: 0.3;
    }
    .spinText{
        fill: transparent;
        -webkit-transition: all 0.5s ease-in-out;
        
    }
    .border {
        opacity: 1;
        -webkit-transition: all 0.5s ease-in-out;
    }
    &:hover {
        .spin {
            stroke-dashoffset: 0;
            opacity: 1;
        }
        .spinText { 
            fill: white;
        }
        
    }
    button {
        &:focus {
            .spin {        
                stroke-dasharray: 650;
                stroke-dashoffset: 650;
                opacity: 0.3;

            }
            .spinText {
                fill: transparent;
                stroke-dasharray: 650;
                stroke-dashoffset: 650;   
            }
            .border {
                opacity: 0;
            }
        }
    }
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`
