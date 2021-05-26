import React, { useState } from 'react'
const NodeForm = ({ setNodes, setArrows }) => {
    const [num, setNum] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[0-9]+$/.test(num)) {
            setNum('');
            alert("enter a number");
            return;
        } 
        setNodes(prev => [...prev, parseInt(num)]);
        setArrows(prev => [...prev, 1]);
        setNum('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="append" onChange={(e) => { setNum((prev) => (/^[0-9]*$/.test(e.target.value)? e.target.value : prev)) }} value={num}/>
            <button>append</button>
        </form>
    )
}

export default NodeForm
