import React from 'react';
import Goit from '../components/goit';
import { createClientMessage } from 'react-chatbot-kit';
  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    //this.createChatBotMessage = createChatBotMessage
    //this.setState = setState
    const handleGoit =()=>{
      const usermessage = createClientMessage('Got it!');
      console.log(usermessage);
      //setState((prev) => ({
      //  ...prev,
      //  messages: [...prev.messages, usermessage],
      
      //}));
    } 
    const handleName = () =>{
      const botrmessage1 = createChatBotMessage('Enter Your Name');
    
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botrmessage1],
      
    }));
  }
  const handleAge = () =>{
    const botrmessage2 = createChatBotMessage('Enter Your Age');
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botrmessage2],
      
  }));
  
  }
  const handleInfo=()=>{
    const info =createChatBotMessage('Name')
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGoit,
            handleName,
            handleAge,
            handleInfo},
        });
      })}
    </div>
  );
};

export default ActionProvider;