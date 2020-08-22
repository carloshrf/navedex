import React from 'react';

import './styles.css';

function Button({label, type, onClick, inverted=false, ...rest}) {
  return (
    <button  
      onClick={onClick} 
      type={type} 
      className={!!inverted ? 'button-component inverted' : 'button-component'}
      {...rest} 
    >
      {label}
    </button>
  );
}

export default Button;