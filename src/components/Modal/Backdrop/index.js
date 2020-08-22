import React from 'react';

import './styles.css'

function Backdrop({show, clicked}) {
  return show ? 
    <div 
      id="backdrop-container" 
      onClick={clicked} 
    />
    : null
}

export default Backdrop;