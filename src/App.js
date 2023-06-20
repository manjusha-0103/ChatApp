
import './App.css';
import Enroll from './pages/enroll'
import Chatscreen from './pages/chat-screen'
import { Routes,Route } from 'react-router-dom';
import Confirmation from './pages/confirmation'

import 'react-chatbot-kit/build/main.css'
import React from 'react';
function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Enroll/>}/>
        <Route path='/chatbot' element={<Chatscreen/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
    </>
  );
}

export default App;
