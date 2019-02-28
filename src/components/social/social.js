import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';
import * as LoadScript from 'react-load-script';

import socialStyles from'./social.module.css'

export default class Social extends Component {
    constructor(props) {
        super(props);
        this.state = { addThisLoaded: false }
    }

    handleScriptLoad() {
        this.setState({ addthisLoaded: true });
        window.addthis.init();
    }    
    render() {
        return (
            <div>
            <LoadScript
              url="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c745b2efea12c6a"
              onLoad={this.handleScriptLoad.bind(this)}
            />

            <div className={socialStyles.toolbox}>
                <div className="addthis_inline_follow_toolbox"></div>
            </div>
            
           {/*} <FacebookProvider appId="569782463489790">
                <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
            </FacebookProvider>*/}
            </div>
         );
    }
}