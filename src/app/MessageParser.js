import React from 'react';
import { useState } from 'react';

const MessageParser = ({ children, actions }) => {
  const [count,setCount] = useState();
  const test=(e)=>{
    var regex = '^[0-9]{1,2}[:.,-]?$';
    return regex.match(e);
  }
  
  const parse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('hello')){
      actions.handleName();
      setCount.count =1;
      console.log(msg, setCount.count);
    }

    if(setCount.count === 1 && msg != 'hello'){
      actions.handleAge();
      setCount.count = setCount.count+1;
      console.log(msg, setCount.count);
    }

    if(setCount.count === 2 && test(msg)){
      actions.handleInfo();
      setCount.count = 0;
      console.log(msg, setCount.count);
    }

    if(msg.includes('got it!')){
      actions.handleName();
      console.log(msg);
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