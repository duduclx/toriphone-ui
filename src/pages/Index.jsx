import React from 'react'

import { useAuth } from '../services/AuthProvider'
import { ApiProvider } from '../services/ApiProvider';

import Login from './Login';
import Main from '../components/main/Main';

const Index = () => {
    const {user} = useAuth();

  return (
    <div>
        {user ? 
        <ApiProvider>
          <Main /> 
        </ApiProvider>
        : <Login />}
    </div>
  )
}

export default Index