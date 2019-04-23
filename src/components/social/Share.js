import React from 'react';
import {
	FacebookShareButton,
	EmailShareButton,
} from 'react-share';
import InstagramIcon from "./icons/instagram";
import FacebookIcon from "./icons/facebook";
import YoutubeIcon from "./icons/youtube";
import EmailIcon from "./icons/email";
import {isMobile} from 'react-device-detect';

import './share.scss';

class Share extends React.Component {
  render() {
    return(
    <div className="post-social">
        <span className="shareText">Share this video</span>
      <InstagramIcon isMobile={window.innerWidth < 700 && isMobile}></InstagramIcon>
    
		<FacebookShareButton url={'https://www.youtube.com/watch?v='+this.props.embed}>
      <FacebookIcon isMobile={window.innerWidth < 700 && isMobile}></FacebookIcon>
		</FacebookShareButton>
		<EmailShareButton url={'https://www.youtube.com/watch?v='+this.props.embed}>
      <EmailIcon isMobile={window.innerWidth < 700 &&  isMobile}></EmailIcon>
		</EmailShareButton>		
	</div>
    );
  }
}

export default Share