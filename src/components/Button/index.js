import React from 'react';

import './styles.css';

function Button({label}) {
  return (
    <button className="button-component">
      {label}
    </button>
  );
}

export default Button;