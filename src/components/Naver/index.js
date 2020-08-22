import React, { useState } from 'react';

import editIconImg from '../../assets/images/edit-Icon.svg'
import deleteIconImg from '../../assets/images/delete-Icon.svg'

import Modal from '../Modal';

import './styles.css';

function Naver({naver}) {
  const [toggleModal, setToggleModal] = useState(false);
  
  const modalHandler = (e) => {
    e.preventDefault();
    setToggleModal(!toggleModal);
    console.log('aaaaa')
  }

  return (
    <div id="naver-container">
      <img src={naver.url} alt={naver.name} className="naver-photo" onClick={modalHandler}/>

      <p className="naver-name">{naver.name}</p>
      <p className="naver-job">{naver.job_role}</p>

      <button className="delete-btn" ><img src={deleteIconImg} alt="Delete"/></button>
      <button className="edit-btn"><img src={editIconImg} alt="edit" /></button>

      <Modal style={{display: 'flex'}} show={toggleModal} modalClosed={modalHandler}>
          <div className="photo-container">
            <img src={naver.url} alt={naver.name} onClick={modalHandler} className="photo"/>
          </div>
          <div className="naver-content">
            <p className="modal-name">{naver.name}</p>
            <p className="modal-job-role">{naver.job_role}</p>
            <p className="modal-label">Idade</p>
            <p className="modal-detail">{naver.birthdate}</p>
            <p className="modal-label">Tempo de empresa</p>
            <p className="modal-detail">{naver.admission_date}</p>
            <p className="modal-label">Projetos que participou</p>
            <p className="modal-detail">{naver.project}</p>
          </div>
      </Modal>
    </div>
  );
}

export default Naver;