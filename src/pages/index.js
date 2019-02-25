import React from "react"

import Loading from "../components/loading/loading"
import Header from "../components/header/header"
import Title from "../components/title/title"
import GlitchVideo from "../components/video/glitchVideo"

import Arrow from "../components/svg/arrow"
import gvcStyle from "../components/video/glitchVideoContainer.module.css"

export default class Index extends React.Component {
  constructor(props) {
      super(props);
      this.state = { loading: true };
      this.loadEnd = this.loadEnd.bind(this);
  }
  loadEnd() {
    console.log("well we made it here");
    this.setState({loading: false});
  }
  render() {
    return (
    <div>
        <Loading loading={this.state.loading}></Loading>
        <Header></Header>
        <Title></Title>
        <Arrow/>
        <div className={gvcStyle.videoContainer}>
            <div className={gvcStyle.videoBackground}>
                <div className={gvcStyle.videoForeground}>
                    <GlitchVideo embed="_VMDl_Xi7-A" loadEnd={this.loadEnd}></GlitchVideo>
                </div>
            </div>
        </div>
    </div>
    )
  }
}