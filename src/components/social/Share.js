import React from 'react';
import {
	FacebookShareButton,
	EmailShareButton,
} from 'react-share';
import InstagramIcon from "./icons/instagram";
import FacebookIcon from "./icons/facebook";
import YoutubeIcon from "./icons/youtube";
import EmailIcon from "./icons/email";
import {isMobileOnly} from 'react-device-detect';

import './share.scss';

class Share extends React.Component {
  render() {
    return(
    <div className="post-social">
        <span className="shareText">Share this video</span>
      <InstagramIcon isMobile={isMobileOnly}></InstagramIcon>
    
		<FacebookShareButton url={'https://www.youtube.com/watch?v='+this.props.embed}>
      <FacebookIcon isMobile={isMobileOnly}></FacebookIcon>
		</FacebookShareButton>
		<EmailShareButton url={'https://www.youtube.com/watch?v='+this.props.embed}>
      <EmailIcon isMobile={isMobileOnly}></EmailIcon>
		</EmailShareButton>		
	</div>
    );
  }
}

export default Share