import React from 'react';
import { motion } from 'framer-motion';
const Node = ({ value, size, distance, shouldAnimate, delay }) => {
    const centreX = distance;
    const strokeWidth = size / 8;
    if (shouldAnimate) {
        console.log(delay);
        const variants = {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: [0, 1, 1],
                transition: {
                    delay: delay,
                    duration: 1.5,
                    times: [0, 0.67, 1]
                }
            }
        }
        return (
            <>
                <motion.circle fill='transparent' strokeWidth={strokeWidth} cx={centreX} cy={size} r={size - strokeWidth / 2} variants={variants} initial='initial' animate='animate' />
                <motion.text x={centreX} y={size} fontSize={`${size / 20}rem`} fontFamily='Georgia' dominantBaseline='middle' textAnchor='middle' variants={variants} initial='initial' animate='animate'>{value}</motion.text>
            </>
        )
    } else { 
        return (
            <>
                <circle fill='transparent' strokeWidth={strokeWidth} cx={centreX} cy={size} r={size - strokeWidth / 2} />
                <text x={centreX} y={size} fontSize={`${size / 20}rem`} fontFamily='Georgia' dominantBaseline='middle' textAnchor='middle'>{value}</text>
            </>
        )
    }
}

export default Node
