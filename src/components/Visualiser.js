import React from 'react'
import LinkedList from './LinkedList'

const Visualiser = ({ nodes, arrows }) => {
    return (
        <div className="visualiser-container">
            <svg className="visualiser-svg">
                <LinkedList nodes={nodes} arrows={arrows} />
            </svg>
        </div>
    )
}

export default Visualiser
