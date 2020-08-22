import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Naver from '../../components/Naver';

import api from '../../services/api';

import {useAuth} from '../../hooks/AuthContext';

import './styles.css';

function Home() {
  const [navers, setNavers] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);

  const { token } = useAuth();

  useEffect(() => {
    api.get('navers', {
      headers: { authorization: `Bearer ${token}`}
    }).then(response => setNavers(response.data)).catch((err) => alert('Erro ao buscar Navers', err.message));
  }, [token]);

  const deleteNaver = (id) => {
    const remainingNavers = navers.filter(naver => {
      return naver.id !== id;
    });

    setNavers(remainingNavers);
  }

  const setDeleteModalToggle = () => {
    setModalToggle(!modalToggle);
  }

  return (
    <div className="home-container">
      <Header />
      <main className="main-home">

        <div className="add-navers">
          <h1>Navers</h1>
          <Link className="create-naver" to='/create-naver'>Adicionar Naver</Link>
        </div>

        <div className="navers-list">
          {navers.length > 0 && navers.map(naver => {
            return <Naver key={naver.id} naver={naver} deleteNaverFromState={deleteNaver} setDeleteModalToggle={setDeleteModalToggle}/>
          })}

        </div>

      </main>
      
    </div>  
  );
}

export default Home;