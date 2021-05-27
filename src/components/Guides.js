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
    // construct keyframes for append animation
    for (let i = 0; i < howMany - 2; i++) {
        keyframesDist.push(i * offset);
        keyframesDist.push(i * offset);
        keyframesDist.push(i * offset);
        keyframesDist.push(i * offset);
        keyframesTime.push(i / (howMany + 1));
        keyframesTime.push(i / (howMany + 1));
        keyframesTime.push((i + 1) / (howMany + 1)); 
        keyframesTime.push((i + 1) / (howMany + 1));
        keyframesOpac.push(0);
        keyframesOpac.push(1);
        keyframesOpac.push(1);
        keyframesOpac.push(0);
    }
    const keyframesOpacArrow = [...keyframesOpac];
    const keyframesTimeArrow = [...keyframesTime];
    const keyframesDistArrow = [...keyframesDist];
    // account for highlight on last circle.
    keyframesOpac[keyframesOpac.length - 1] = 1;
    keyframesOpac.push(1);
    keyframesOpac.push(1);
    keyframesOpac.push(1);
    keyframesOpac.push(1);
    keyframesOpac.push(1);
    keyframesOpac.push(0);
    keyframesTime.push((howMany - 2) / (howMany + 1));
    keyframesTime.push((howMany - 2) / (howMany + 1));
    keyframesTime.push((howMany - 1) / (howMany + 1));
    keyframesTime.push((howMany - 1) / (howMany + 1));
    keyframesTime.push(1);
    keyframesTime.push(1);
    keyframesDist.push((howMany - 2) * offset);
    keyframesDist.push((howMany - 2) * offset);
    keyframesDist.push((howMany - 2) * offset);
    keyframesDist.push((howMany - 2) * offset);
    keyframesDist.push((howMany - 2) * offset);
    keyframesDist.push((howMany - 2) * offset);
    console.log(keyframesTime);
    console.log(keyframesOpac);
    return (
        <>
            <motion.g stroke='red' fill='red' initial={{ x: 0 }} animate={{ x: [0, ...keyframesDist], opacity: [0, ...keyframesOpac] }} transition={{ duration: howMany + 1, times: keyframesTime }}>
                <circle fill='transparent'strokeWidth={strokeWidth} cx={nodeSize} cy={nodeSize} r={nodeSize - strokeWidth / 2} />
            </motion.g>
            <motion.g stroke='red' fill='red' initial={{ x: 0 }} animate={{ x: [0, ...keyframesDistArrow], opacity: [0, ...keyframesOpacArrow] }} transition={{ duration: howMany + 1, times: keyframesTimeArrow }}>
                <Arrow distance={2 * nodeSize} which={0} radius={nodeSize} size={arrowSize}/>
            </motion.g>
        </>
    )
}

export default Guides
