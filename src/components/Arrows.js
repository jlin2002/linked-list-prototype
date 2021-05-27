import React from 'react'
import { getOffsetDistance, getArrowSize, getRadius } from '../backend'
import Arrow from './Arrow'
const Arrows = ({ arrows }) => {
    const offset = getOffsetDistance(arrows.length + 1);
    const radius = getRadius(arrows.length + 1);
    const size = getArrowSize(arrows.length + 1);
    const arrowsProps = arrows.map((arrow, i) => {
        return {
            radius: radius,
            size: size,
            distance: offset * i + 2 * radius,
        }
    })
    return (
        <g fill='black' stroke='black'>
            {
                arrowsProps.map((arrowProps, i) => {
                    const shouldAnimate = i === arrows.length - 1;
                    return (
                        <Arrow 
                            key={i}
                            {...arrowProps}
                            shouldAnimate={shouldAnimate}
                            delay={arrows.length + 1}
                        />
                    )
                })
            }
        </g>
    )
}

export default Arrows
