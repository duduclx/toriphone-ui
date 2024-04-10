import React from 'react'

import { useAuth } from '../services/AuthProvider'

import Login from './Login';
import Main from '../components/main/Main';

const Index = () => {
    const {user} = useAuth();

  return (
    <div>
        {user ? <Main /> : <Login />}
    </div>
  )
}

export default Index