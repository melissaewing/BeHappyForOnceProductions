import React from 'react';
import InstagramIcon from "./icons/instagram";
import FacebookIcon from "./icons/facebook";
import YoutubeIcon from "./icons/youtube";
import {isMobile, isMobileOnly} from 'react-device-detect';


import './social.scss';

class Social extends React.Component {
  render() {
    return(
    <div className={"link-social " + (isMobile ? "mobile " : " ") + (this.props.bottom != null ? "bottom" : "")}>
      <a href="https://www.instagram.com/behappyforonceproductions/" target="_blank">
        <InstagramIcon isMobile={isMobileOnly}></InstagramIcon>
      </a>
      <a href="https://www.facebook.com/behappyforonce" target="_blank">
        <FacebookIcon isMobile={isMobileOnly}></FacebookIcon>
      </a>
      <a href="https://www.youtube.com/user/Daecilius" target="_blank">
        <YoutubeIcon isMobile={isMobileOnly}></YoutubeIcon>
      </a>
	</div>
    );
  }
}

export default Social