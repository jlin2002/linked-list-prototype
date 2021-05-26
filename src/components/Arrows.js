import React from 'react'
import { getOffsetDistance, getArrowSize, getRadius } from '../backend'
import Arrow from './Arrow'
const Arrows = ({ arrows }) => {
    const offset = getOffsetDistance(arrows.length);
    const radius = getRadius(arrows.length);
    const size = getArrowSize(arrows.length);
    const arrowsProps = arrows.map((arrow, i) => {
        return {
            radius: radius,
            size: size,
            distance: offset * i + 2 * radius,
        }
    })
    return (
        <g fill='black' stroke='black'>
            {arrowsProps.map((arrowProps, i) => <Arrow key={i} {...arrowProps} />)}
        </g>
    )
}

export default Arrows
