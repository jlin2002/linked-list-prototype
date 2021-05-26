import React from 'react'

const Arrow = ({ radius, size, distance }) => {
    const offsetX1 = distance;
    const offsetX2 = offsetX1 + size;
    const thickness = size / 20;
    const triangleVertices = `${offsetX2}, ${radius} ${offsetX2 - 2 * thickness}, ${radius - 2 * thickness} ${offsetX2 - 2 * thickness}, ${radius + 2 * thickness}`
    return (
        <>
            <line x1={offsetX1} y1={radius} x2={offsetX2 - 2 * thickness} y2={radius} strokeWidth={thickness}/>
            <polygon points={triangleVertices} ></polygon>
        </>
    )
}

export default Arrow
