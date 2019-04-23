import React from "react"

import galleryStyle from "./videoGallery.module.scss"

class VideoGalleryContainer extends React.Component {

     //shouldComponentUpdate(nextProps, nextState){
      //  console.log("should container update ");
      //  return false;//nextProps.embed != this.props.embed;
     //}
    render() {
        //console.log("container update");

    return (
        <div id={"galleryContainer"} className={galleryStyle.galleryContainer}>
            {this.props.children}
        </div>
    
    );
  }
}

export default VideoGalleryContainer