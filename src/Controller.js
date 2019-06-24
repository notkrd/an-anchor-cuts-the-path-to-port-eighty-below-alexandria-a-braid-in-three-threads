import React, { Component } from 'react';
import Braid from './Braid.js';

export default class Controller extends Component {
    state = {
        h: document.documentElement.clientHeight*0.7,
        w: document.documentElement.clientWidth*0.3,
        threads: [{
            name: "History of trade centering on the Aegean and Levant",
            color: "green",
            points: [
                { "y": 0,   "x": 1/5},
                { "y": 0.1,   "x": 2/5},
                { "y": 0.2,   "x": 3/5},
                { "y": 0.3,   "x": 4/5},
                { "y": 0.4,   "x": 3/5},
                { "y": 0.5,   "x": 2/5},
                { "y": 0.6,   "x": 1/5},
                { "y": 0.7,   "x": 2/5},
                { "y": 0.8,   "x": 3/5},
                { "y": 0.9,   "x": 4/5},
                { "y": 1,   "x": 4/5},
            ]
        },
        {
            name: "Distributed computing theory, focusing on Leslie Lamport",
            color: "blue",
            points: [
                { "y": 0,   "x": 1/2},
                { "y": 0.1,   "x": 2/5},
                { "y": 0.2,   "x": 1/5},
                { "y": 0.3,   "x": 2/5},
                { "y": 0.4,   "x": 3/5},
                { "y": 0.5,   "x": 4/5},
                { "y": 0.6,   "x": 3/5},
                { "y": 0.7,   "x": 2/5},
                { "y": 0.8,   "x": 1/5},
                { "y": 0.9,   "x": 2/5},
                { "y": 1,   "x": 1/2},
            ]
        },
        {
            name: "The physical infrastructure of contemporary networks",
            color: "red",
            points: [
                { "y": 0,   "x": 4/5},
                { "y": 0.1,   "x": 4/5},
                { "y": 0.2,   "x": 3/5},
                { "y": 0.3,   "x": 2/5},
                { "y": 0.4,   "x": 1/5},
                { "y": 0.5,   "x": 2/5},
                { "y": 0.6,   "x": 3/5},
                { "y": 0.7,   "x": 4/5},
                { "y": 0.8,   "x": 3/5},
                { "y": 0.9,   "x": 2/5},
                { "y": 1,   "x": 1/5},
            ]
        }],
        heading: []
    }

    onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        return(
            <div className="controller">
            <Braid threads={this.state.threads} h={this.state.h} w={this.state.w} />
            </div>
            )
    }

    measureWindow() {
        this.setState({
            h: document.documentElement.clientHeight*0.75, 
            w: document.documentElement.clientWidth*0.3,
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.measureWindow.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.measureWindow.bind(this));
    }
}