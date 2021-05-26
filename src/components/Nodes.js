import React from 'react'
import { getOffsetDistance, getRadius } from '../backend'
import Node from './Node'

const Nodes = ({ nodes }) => {
    const size = getRadius(nodes.length);
    const offset = getOffsetDistance(nodes.length);
    const nodesProps = nodes.map((node, i) => { 
        return { value: node, 
            size: size, 
            distance: i * offset + size
        }
    });
    return (
        <g stroke='black'>
            {nodesProps.map((nodeProps, i) => <Node key={i} {...nodeProps} /> )};
        </g>
    )
}

export default Nodes
