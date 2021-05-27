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
            {nodesProps.map((nodeProps, i) => {
                const shouldAnimate = i === nodes.length - 1;
                return (
                    <Node 
                        key={i} 
                        {...nodeProps} 
                        shouldAnimate={shouldAnimate}
                        delay={shouldAnimate? nodes.length - 1: -1}
                    /> 
                );
            }
            )}
        </g>
    )
}

export default Nodes
