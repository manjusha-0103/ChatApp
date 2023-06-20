import React from 'react';
import Goit from '../components/goit';
import { createClientMessage } from 'react-chatbot-kit';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //this.createChatBotMessage = createChatBotMessage
  //this.setState = setState
  const handlegoit =()=>{
    const usermessage = createClientMessage('Got it!');
    console.log(usermessage);
    //setState((prev) => ({
    //  ...prev,
    //  messages: [...prev.messages, usermessage],
    
    //}));
  } 
  const handleinfo = () =>{
    const botrmessage = createChatBotMessage('Enter Your Name');
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botrmessage],
    
  }));
}
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handlegoit,
            handleinfo},
        });
      })}
    </div>
  );
};

export default ActionProvider;