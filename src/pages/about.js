import React from "react"
import Header from "../components/header/header"

export default ({ data }) => {
  const aboutStyle = {
    padding: '10%',
    maxWidth: '500px'
  };
  return (
    <div>
        <Header></Header>
        <div style={aboutStyle}>Be Happy For Once is a production collective for musicians, performance artists, and media artists located in Brooklyn, NY.
        </div>
    </div>
  )
}