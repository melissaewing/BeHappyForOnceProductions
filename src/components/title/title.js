import React from "react"
import titleStyles from "./title.module.css"

export default ({ }) => (
    <div id={titleStyles.head}>
        <div id={titleStyles.headertext}>
            <h1 className={titleStyles.text} data-text="Be Happy For Once">Be Happy For Once</h1>
            <h1 className={titleStyles.glitch} data-text="Drew Rosenthal">Drew Rosenthal</h1>
        </div> 
    </div>
)
