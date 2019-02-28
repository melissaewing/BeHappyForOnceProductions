import React from "react"
import Header from "../components/header/header"
import AboutContent from "../components/about/aboutContent";
import Social from "../components/social/social"
export default ({ data }) => {

  return (
    <div>
        <Header></Header>
        <AboutContent></AboutContent>
        <Social></Social>
    </div>
  )
}