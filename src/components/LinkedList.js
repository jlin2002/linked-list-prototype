import React from 'react'
import Nodes from './Nodes'
import Arrows from './Arrows'
import Guides from './Guides'
const LinkedList = ({ nodes, arrows }) => {
    return (
        <g transform='translate(0, 150)'>
            <Nodes nodes={nodes}/>
            <Arrows arrows={arrows}/>
            <Guides howMany={nodes.length}/>
        </g>
    )
}

export default LinkedList
