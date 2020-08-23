import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import editIconImg from '../../assets/images/edit-Icon.svg'
import deleteIconImg from '../../assets/images/delete-Icon.svg'

import Modal from '../Modal';
import Button from '../Button';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import './styles.css';

function Naver({naver, deleteNaverFromState}) {
  const [viewToggleModal, setViewToggleModal] = useState(false);
  const [deleteToggleModal, setDeleteToggleModal] = useState(false);
  
  const { token } = useAuth();

  const modalHandler = (e) => {
    e.preventDefault();
    setViewToggleModal(!viewToggleModal);
  }

  const deleteNaver = async () => {

    await api.delete(`navers/${naver.id}`, {
      headers: { authorization: `Bearer ${token}`}
    }).then( response => {
      console.log('Usuário deletado.')
    });


    deleteNaverFromState(naver.id);
  }

  const handleDeleteToggleModal = () => {
    setDeleteToggleModal(!deleteToggleModal);
  }

  return (
    <div id="naver-container">
      <img src={naver.url} alt={naver.name} className="naver-photo" onClick={modalHandler}/>

      <p className="naver-name">{naver.name}</p>
      <p className="naver-job">{naver.job_role}</p>

      <Link 
        to='#'
        onClick={handleDeleteToggleModal} 
        className="delete-btn" 
      >
        <img src={deleteIconImg} alt="Delete"/>
      </Link>
      
      <Link 
        to={{pathname: `/edit-naver/${naver.id}`, state: {naver}}} 
        className="edit-btn"
      >
        <img src={editIconImg} alt="edit" />
      </Link>

      <Modal show={viewToggleModal} modalClosed={modalHandler}>
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
            <div className="operation-button-group">
              <Link 
                to='#'
                onClick={handleDeleteToggleModal} 
                className="delete-btn" 
              >
              <img src={deleteIconImg} alt="Delete"/>
              </Link>
              <Link 
                to='/edit-naver'
                params={{casa: 'a'}}
                className="edit-btn"
              >
                <img src={editIconImg} alt="edit" />
              </Link>
            </div>
          </div>
          
      </Modal>

      <Modal show={deleteToggleModal} modalClosed={handleDeleteToggleModal} >
          <div id="delete-modal">
            <p className="exclude-label">Excluir Naver</p>
            <p className="exclude-warning">Tem certeza que deseja excluir esse naver?</p>
            <div className="delete-modal-button-group">
              <Button label="Cancelar" onClick={handleDeleteToggleModal} inverted />
              <Button label="Excluir" onClick={deleteNaver}  />
            </div>
          </div>
      </Modal>

    </div>
  );
}

export default Naver;