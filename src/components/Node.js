import React from 'react';

const Node = ({ value, size, distance }) => {
    const centreX = distance;
    const strokeWidth = size / 8;
    return (
        <>
            <circle fill='transparent' strokeWidth={strokeWidth} cx={centreX} cy={size} r={size - strokeWidth / 2} />
            <text x={centreX} y={size} fontSize={`${size / 20}rem`} fontFamily='Georgia' dominantBaseline='middle' textAnchor='middle'>{value}</text>
        </>
    )
}

export default Node
