import React from 'react';

import Backdrop from './Backdrop';

import closeIcon from '../../assets/images/close-icon.svg';

import './styles.css';

function Modal({show, modalClosed, children}) {

  return !!show && (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div id="modal-container">
        <div className="close-icon">
          <button onClick={modalClosed}><img src={closeIcon} alt="Close"/></button>
        </div>
        {children}
      </div>
    </>
  );
}

export default Modal;