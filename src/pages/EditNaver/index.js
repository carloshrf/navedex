import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { format } from 'date-fns';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import backIcon from '../../assets/images/back-icon.svg';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import './styles.css';

const EditNaver = ({props}) => {
  const [naver, setNaver] = useState({
    admission_date: '',
    birthdate: '',
    job_role: '',
    name: '',
    project: '',
    url: '',
  });

  const { token } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const setEditNaver = () => {
      if (props.location.state !== undefined) {
        const naverInfo = props.location.state.naver;
    
        setNaver({
          admission_date: format(new Date(naverInfo.admission_date), 'dd/MM/yyyy'),
          birthdate: format(new Date(naverInfo.birthdate), 'dd/MM/yyyy'),
          job_role: naverInfo.job_role,
          name: naverInfo.name,
          project: naverInfo.project,
          url: naverInfo.url
        });
      }
    }
    setEditNaver();
  }, [props.location.state]);


  const handleNaverChange = (key, {value}) => {
    setNaver({...naver, [key]: value});
  }

  const handleEditNaver = async (e) => {
    e.preventDefault();

    const naverId = props.match.params.id;
    try{
      const naverExists = await api.get(`navers/${naverId}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      
      console.log({naver, naverId, naverExists});
      if (naverExists) {
        await api.put(`/navers/${naverId}`, naver, {
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        history.push('/');
      }

    } catch(err) {
      alert('Não foi possível editar o registro', err.message);
    }
  }

  return (
    <div className="add-naver-container">
      <Header />
      <main className="main-add-naver">
        <div className="add-naver-title">
          <Link to="/"><img src={backIcon} alt="voltar"/></Link>
          <span>Editar Naver</span>
        </div>

        <form onSubmit={handleEditNaver} className="add-naver-form">
          <Input className="grid-1 name" placeholder="Nome" label="Nome" value={naver.name} onChange={(e) => handleNaverChange('name', e.target)} />
          <Input className="grid-2 office" placeholder="Cargo" label="Cargo" value={naver.job_role} onChange={(e) => handleNaverChange('job_role', e.target)} />
          <Input className="grid-1 age" placeholder="idade" label="idade" value={naver.birthdate} onChange={(e) => handleNaverChange('birthdate', e.target)} />
          <Input className="grid-2 time" placeholder="Tempo de empresa" label="Tempo de empresa" value={naver.admission_date} onChange={(e) => handleNaverChange('admission_date', e.target)} />
          <Input className="grid-1 projects" placeholder="Projetos que Participou" label="Projetos que Participou" value={naver.project} onChange={(e) => handleNaverChange('project', e.target)} />
          <Input className="grid-2 photo" placeholder="URL da foto do Naver" label="URL da foto do Naver" value={naver.url} onChange={(e) => handleNaverChange('url', e.target)} />
          <Button label="Salvar" type="submit" />
        </form>
      </main>
    </div>
  );
}

export default EditNaver;