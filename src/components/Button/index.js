import React from 'react';

import './styles.css';

function Button({label, type, onClick, ...rest}) {
  return (
    <button  onClick={onClick} type={type} {...rest} className="button-component">
      {label}
    </button>
  );
}

export default Button;