import React from "react"
import x from '../../images/x.gif'

import styled from 'styled-components'
import closeBtnStyle from "./closeBtn.module.css"


const Close = styled.div `
background: url(${x});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
transition: background-color 1s;
position: fixed;
right: 0;
top: 0;
width: 25px !important;
height: 25px !important;
margin: 5px;
cursor: pointer;
opacity: 0;
z-index: 1000;
&:hover {
  opacity: 1;
}
&:before {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: inherit;
  content: ' ';
}
`
class CloseBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          showCloseBtn: true
        };
        this.mouseEnterCloseBtn = this.mouseEnterCloseBtn.bind(this);
        this.mouseOutCloseBtn =this.mouseOutCloseBtn.bind(this);
      
    }

    mouseEnterCloseBtn() {
      this.setState({showCloseBtn: true});
      console.log("enter");
    }

    mouseOutCloseBtn() {
     /* setTimeout(
        function() {
            this.setState({position: 1});
        }
        .bind(this),
        3000
      );*/
      this.setState({showCloseBtn: false});
      console.log("out");
    }

    render() {
    return (
        <Close onClick={this.closeFullScreen} 
             onMouseEnter={this.mouseEnterCloseBtn} 
             onMouseOut={this.mouseOutCloseBtn} 
             id={"closeBtn"}
             className={this.state.showCloseBtn ? closeBtnStyle.show : ""}>
        </Close>
    );
  }
}

export default CloseBtn