import React from "react"
import loadingStyles from "./loading.module.css"
import * as paths from "./paths"
import Snap from 'snapsvg'
import { throws } from "assert";

const mina = window.mina;
const sadface = paths.SAD_FACE;
const happyface = paths.HAPPY_FACE;

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.sadPath = null;
        this.circle = null;
        this.state = {loaded: false};
        this.loadDoneAnim = this.loadDoneAnim.bind(this);
        this.loadDone = this.loadDone.bind(this);
    }
    svgRender() {
        let s = Snap("#svg");
        if (s) {
            this.circle = s.circle(500,500,450);
            this.circle.attr({fill: "white", "fill-opacity": 1, transform: "scale(1)"});
            this.sadPath = s.path(sadface);
            this.sadPath.attr({fill: "#000000", transform: "translate(45, 100)"});
            this.smile();
        }
    }   
    smile(){
        if (this.props.loading) {
            this.circle.animate({ "fill-opacity": .5, transform: "scale(.9)"}, 800, mina.easeinout);
            this.sadPath.animate({ d: happyface}, 800, mina.easeinout, () => this.frown());
        }
    }
    frown() {
        console.log("frown" , this);
        
        if (this.props.loading) {
            this.circle.animate({ "fill-opacity": 1, transform: "translate(-50, -50) scale(1)" }, 5000, mina.easeinout);
            this.sadPath.animate({ d: sadface}, 5000, mina.easeinout, () => this.smile());
        }
    }
    loadDoneAnim() {
        this.circle.animate({ "fill-opacity": 1, transform: "translate(0,0) scale(5)" }, 5000, mina.easeinout, () => this.loadDone());
    }
    loadDone() {
        this.setState({loaded: true});
    }
    componentDidMount() {
        this.svgRender();
    }
    componentDidUpdate() {
        if (!this.props.loading && !this.state.loaded) {
            this.loadDoneAnim();
            console.log("loading end anim");
        }
    }
    render() {
        return (
        <div id={loadingStyles.loadContainer} className={(this.state.loaded ? loadingStyles.hide : "")}>
        <div id={loadingStyles.load}>
            <svg id="svg" className={loadingStyles.svg} width="250" height="250" viewBox="0 0 1000 1000"></svg>
            <div id={loadingStyles.loadtext}>
                <h1 className={loadingStyles.text} data-text="Loading...">Loading...</h1>
            </div> 
        </div>

        </div>
        )
    }
}


        