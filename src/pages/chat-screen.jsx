
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit'
import config from '../app/config.js';
import MessageParser from '../app/MessageParser.js';
import ActionProvider from '../app/ActionProvider.js';
import './chat-screen.css'

const ChatScreen = () => {
  return (
    <div className='screen'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
      />
    </div>
  )

}
export default ChatScreen;
/*const ChatScreen = () => {
  const history = useNavigate();
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleGotIt = () => {
    const botMessage = 'Hello, Welcome to student info system!';
    setMessages([botMessage]);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, `User: ${name}`]);
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, `User: ${age}`]);
    setTimeout(() => {
      history('/confirmation');
    }, 5000);
  };

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      {messages.length === 0 && (
        <button onClick={handleGotIt}>Got it!</button>
      )}
      {messages.length === 1 && (
        <form onSubmit={handleNameSubmit}>
          <label>Enter your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {messages.length === 2 && (
        <form onSubmit={handleAgeSubmit}>
          <label>Enter your Age:</label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Select Age</option>
            {Array.from({ length: 23 }, (_, i) => i + 18).map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ChatScreen;*/