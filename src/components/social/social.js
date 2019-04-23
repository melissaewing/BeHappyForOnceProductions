import React from 'react';
import InstagramIcon from "./icons/instagram";
import FacebookIcon from "./icons/facebook";
import YoutubeIcon from "./icons/youtube";
import EmailIcon from "./icons/email";
import {isMobile} from 'react-device-detect';
import { FacebookProvider, Like } from 'react-facebook';


import './share.scss';

class Social extends React.Component {
  render() {
    return(
    <div className={"link-social " + (isMobile ? "mobile " : " ") + (this.props.bottom != null ? "bottom" : "")}>
      <span className="shareText">Follow me</span>
      <a href="https://www.instagram.com/behappyforonceproductions/" target="_blank">
        <InstagramIcon isMobile={window.innerWidth < 700 && isMobile}></InstagramIcon>
      </a>
      <a href="https://www.facebook.com/behappyforonce" target="_blank">
        <FacebookIcon isMobile={window.innerWidth < 700 && isMobile}></FacebookIcon>
      </a>
      <a href="https://www.youtube.com/user/Daecilius" target="_blank">
        <YoutubeIcon isMobile={window.innerWidth < 700 && isMobile}></YoutubeIcon>
      </a>
	</div>
    );
  }
}

export default Social