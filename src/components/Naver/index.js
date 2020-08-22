import React from 'react';

import naverImg from '../../assets/images/test.png';
import editIconImg from '../../assets/images/edit-Icon.svg'
import deleteIconImg from '../../assets/images/delete-Icon.svg'

import './styles.css';

function Naver() {
  return (
    <div className="naver-container">
      <img src={naverImg} alt="Naver" className="naver-photo"/>
      
      <p className="naver-name">Juliano Reis</p>
      <p className="naver-job">Front-end Developer</p>

      <button className="delete-btn" ><img src={deleteIconImg} alt="Delete"/></button>
      <button className="edit-btn"><img src={editIconImg} alt="edit" /></button>
    </div>
  );
}

export default Naver;