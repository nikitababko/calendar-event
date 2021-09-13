import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

import './App.css';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
