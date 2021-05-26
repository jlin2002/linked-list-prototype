import React from 'react';
import { motion } from 'framer-motion';
import { getRadius, getArrowSize, getOffsetDistance } from '../backend';
import Arrow from './Arrow'

const Guides = ({ howMany }) => {
    const nodeSize = getRadius(howMany);
    const arrowSize = getArrowSize(howMany);
    const offset = getOffsetDistance(howMany);
    const strokeWidth = nodeSize / 8;
    const keyframesDist = [];
    const keyframesTime = [0];
    const keyframesOpac = [];
    for (let i = 0; i < howMany; i++) {
        keyframesDist.push(i * offset);
        keyframesDist.push(i * offset);
        keyframesDist.push(i * offset);
        keyframesDist.push(i * offset);
        keyframesTime.push(i / howMany);
        keyframesTime.push(i / howMany);
        keyframesTime.push((i + 1) / howMany); 
        keyframesTime.push((i + 1) / howMany);
        keyframesOpac.push(0);
        keyframesOpac.push(1);
        keyframesOpac.push(1);
        keyframesOpac.push(0);
    }
    
    console.log(keyframesDist)
    console.log(keyframesTime)
    console.log(keyframesOpac)

    return (
        <motion.g stroke='red' fill='red' initial={{ x: 0 }} animate={{ x: [0, ...keyframesDist], opacity: [0, ...keyframesOpac] }} transition={{ duration: howMany, times: keyframesTime }}>
            <circle fill='transparent'strokeWidth={strokeWidth} cx={nodeSize} cy={nodeSize} r={nodeSize - strokeWidth / 2} />
            <Arrow distance={2 * nodeSize} which={0} radius={nodeSize} size={arrowSize}/>
        </motion.g>
    )
}

export default Guides
