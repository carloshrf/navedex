import React from 'react';

import './styles.css';

function Index({ label, type="text", placeholder, error, ...rest}) {
  return (
    <div className="input-block">
      <label>{label}</label>
      {console.log(!!error && 'input-error')}
      <input className={!!error ? 'input-error' : ''} placeholder={placeholder} type={type} {...rest}/>
    </div>
  );
}

export default Index;