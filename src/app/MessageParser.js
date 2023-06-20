import React from 'react';


const MessageParser = ({ children, actions }) => {

  const parse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('hello')){
      actions.handleinfo();
    }
    if(msg.includes('got it!')){
      actions.handleinfo();
      console.log(message);
    }
    
    
   
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;