import React from 'react'
import { motion } from 'framer-motion'
const Arrow = ({ radius, size, distance, shouldAnimate, delay }) => {
    const offsetX1 = distance;
    const offsetX2 = offsetX1 + size;
    const thickness = size / 20;
    const triangleVertices = `${offsetX2}, ${radius} ${offsetX2 - 2 * thickness}, ${radius - 2 * thickness} ${offsetX2 - 2 * thickness}, ${radius + 2 * thickness}`
    if (shouldAnimate) {
        const variants = {
            initial: {
                opacity: 0
            }, 
            animate: {
                opacity: 1,
                transition: {
                    delay: delay,
                    duration: 0 
                }
            }
        }
        return (
            <>
                <motion.line x1={offsetX1} y1={radius} x2={offsetX2 - 2 * thickness} y2={radius} strokeWidth={thickness} variants={variants} opacity={0} initial='initial' animate='animate'/>
                <motion.polygon points={triangleVertices} opacity={0} variants={variants} initial='initial' animate='animate'></motion.polygon>
            </>
        )
    } else {
        return (
            <>
                <line x1={offsetX1} y1={radius} x2={offsetX2 - 2 * thickness} y2={radius} strokeWidth={thickness}/>
                <polygon points={triangleVertices} ></polygon>
            </>
        )
    }
}

export default Arrow
