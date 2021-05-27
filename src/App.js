import React, { useState } from 'react';
import Visualiser from './components/Visualiser'
import NodeForm from './components/NodeForm'


const App = () => {
  const [nodes, setNodes] = useState([1, 2, 3]);
  const [arrows, setArrows] = useState([1, 1]);
  return (
    <>
      <NodeForm setNodes={setNodes} setArrows={setArrows} />
      <Visualiser nodes={nodes} arrows={arrows} />
    </>
  );
}

export default App;
