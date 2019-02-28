import React from "react"
import loadingStyles from "./loading.module.css"
import * as paths from "./paths"


import { shatter } from "../../styles/animations"
import { throws } from "assert";


let Snap;
let mina;
if (typeof window !== 'undefined') {
  Snap = require('snapsvg');
  mina = window.mina;
}

const sadface = paths.SAD_FACE;
const happyface = paths.HAPPY_FACE;

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.sadPath = null;
        this.circle = null;
        this.outline = null;
        this.state = {loaded: false};
        this.loadDoneAnim = this.loadDoneAnim.bind(this);
        this.loadDone = this.loadDone.bind(this);
    }
    svgRender() {
        let s = Snap("#svg");
        if (s) {
            this.circle = s.circle(0,0,45);     

            this.g = s.gradient("r(0.5, 0.5, 1)#fff-#000");
            this.circle.attr({fill: this.g, "fill-opacity": .75, transform: "scale(1)"});


            this.outline = s.circle(0,0,45);
            this.outline.attr({ fill: "none", 
                                stroke: "#ff00c1",
                                fill: "none",
                                strokeWidth: "1",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "10", 
                                strokeDasharray: "50",
                                strokeDashoffset: "450",
                                opacity: "1"
                             });

            this.sadPath = s.path(sadface);
            this.sadPath.attr({fill: "#000000", transform: "translate(-50, -50)"});

            this.group = s.group(this.circle, this.outline, this.sadPath);
            this.group.attr({transform: "translate(" + window.innerWidth/2 + ", " + (window.innerHeight/2-50) + ") scale(2)"});

            this.smile();
        }
    }   
    smile() {
            this.circle.animate({ "fill-opacity": 1, transform:  (this.props.loading ? "scale(.9)" : "")}, 1000, mina.easeinout);

            var that = this;
            if (this.props.loading) {
                Snap.animate(450,0, function( value ) {
                    that.outline.attr({ 'stroke-dashoffset': value});
                },  1000, mina.easeinout);
            }
            if (!this.props.loading) {
                Snap.animate(50,450, function( value ) {
                    that.outline.attr({'stroke-dasharray': value});
                }, 1000, mina.easeinout);
            }

            this.sadPath.animate({ d: happyface}, 1000, mina.elastic, (() => this.props.loading ? this.frown() : this.loadDoneAnim()));
    }
    frown() {
        if (this.props.loading) {
            this.circle.animate({ "fill-opacity": .75, transform: "scale(1)" }, 1000, mina.easeinout);

            var that = this;
            Snap.animate(0,450, function( value ) {
                that.outline.attr({ 'stroke-dashoffset': value});
            }, 1000, mina.easeinout);

            this.sadPath.animate({ d: sadface}, 1000, mina.easeinout, () => this.smile());
        }
    }
    loadDoneAnim() {
        this.g.attr({cx: .5, cy: .5, r: .8});
        this.g.animate({ cx: .5, cy: .5, r: .8 }, 500, mina.linear);

        this.sadPath.animate({ "fill-opacity": 0}, 1000, mina.easeinout);

        this.outline.animate({ "opacity": 0}, 1000, mina.easeinout);
       // this.group.animate({transform: "translate( rotate(180)  " + window.innerWidth/2 + ", " + window.innerHeight/2 + ")  scale(2)"}, mina.linear);

        var vheight = window.innerHeight;
        var vwidth = window.innerWidth;
        var scale = Math.ceil(Math.max(vheight/100, vwidth/100));
        this.circle.animate({transform: "scale("+scale+")"}, 1000, mina.elastic, () => this.loadDone());
    }
    loadDone() {
        console.log("load done loading");
        this.setState({loaded: true});
    }
    componentDidMount() {
        console.log("load mount. loading state and props ", this.state.loaded, this.props.loading);

        this.svgRender();
    }
    componentDidUpdate() {
        console.log("load update. loading state and props ", this.state.loaded, this.props.loading);

        if (!this.props.loading && !this.state.loaded) {
           
        }
    }
    render() {
        return (
        <div id={loadingStyles.loadContainer} className={(this.state.loaded && !this.props.loading ? loadingStyles.hide : "")}>
            <svg id="svg" className={loadingStyles.svg + (!this.props.loading ? " " + loadingStyles.flash : "")} viewBox="0 0 100% 100%"></svg>
          
                <div id={loadingStyles.loadtext} className={!this.props.loading ? loadingStyles.hide : ""}>
                    <div className={loadingStyles.text} data-text="Loading...">Loading...</div>
                </div> 
        </div>
        )
    }
}


        