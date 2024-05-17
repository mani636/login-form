import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useState } from 'react';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='main'>
      <Routes>
        <Route
          path='/'
          element={isLogin ? <Home /> : <Login setIsLogin={setIsLogin} />}
        />
      </Routes>
    </div>
  );
};

export default App;
