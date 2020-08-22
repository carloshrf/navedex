import React from 'react';

import './styles.css';

function Index({ label, type, placeholder, ...rest}) {
  return (
    <div className="input-block">
      <label>{label}</label>
      <input placeholder={placeholder} type={type} {...rest}/>
    </div>
  );
}

export default Index;