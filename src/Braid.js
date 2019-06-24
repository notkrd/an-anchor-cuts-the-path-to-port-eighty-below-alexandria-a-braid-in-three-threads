import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Braid = (props) => {
    useEffect(() => {
        d3.select('.braid > *').remove();
        drawBraid(props);
    }, [props])
    return <div className="braid" />
}

const drawBraid = (props) => {
    d3.select('.braid > *').remove();
    
    d3.select('.braid').append('svg')
    .attr('height', props.h)
    .attr('width', props.w)
    .attr('id','svg-braid');
    
    var threadFunc = d3.line()
        .x((d) => d.x*props.w*0.9)
        .y((d) => d.y*props.h*0.9)
        .curve(d3.curveBasis);

    const svgBraid = d3.select('#svg-braid')

    function threadPath(threadDat, clr) {
        return svgBraid.append("path")
            .attr("d", threadFunc(threadDat))
            .attr("stroke", clr)
            .attr("stroke-opacity", 0.8)
            .attr("stroke-width", 50)
            .attr("fill", "none");
    }
    
    const threads = props.threads.map((t) => threadPath(t.points, t.color));    
    svgBraid.node();
}

export default Braid;