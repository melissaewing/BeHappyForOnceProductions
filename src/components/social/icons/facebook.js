import React, { Component} from 'react';

export default class FacebookIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="button is-outlined is-rounded facebook" >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={this.props.isMobile ? "35" : "24"}
            height={this.props.isMobile ? "35" : "24"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </span>
        </div>
         );
    }
}