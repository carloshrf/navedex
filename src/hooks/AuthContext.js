import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('@Naver:token');
    const userId = localStorage.getItem('@Naver:userId');
    const email = localStorage.getItem('@Naver:email');

    if (token && userId && email) {
      return { token, userId, email }
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password
    });

    const data = response.data;

    localStorage.setItem('@Naver:token', data.token);
    localStorage.setItem('@Naver:userId', data.id);
    localStorage.setItem('@Naver:email', data.email);

    setUserData({token: data.token, userId: data.id, email: data.email});
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Naver:token');
    localStorage.setIremoveItemtem('@Naver:userId');
    localStorage.removeItem('@Naver:email');

    setUserData({});
  }, []);
  

  return (
    <AuthContext.Provider value={{ userId: userData.userId, email: userData.email, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado por dentro do AuthProvider.')
  }

  return context;
}