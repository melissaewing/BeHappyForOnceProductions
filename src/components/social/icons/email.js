import React, { Component} from 'react';

export default class EmailIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="button is-outlined is-rounded email" >
		<span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={this.props.isMobile ? "35" : "24"}
            height={this.props.isMobile ? "35" : "24"}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-email"
          >
            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
          </svg>
        </span>
        </div>
         );
    }
}