import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import Botavatar from '../components/botavatar'
import Chatappheader from '../components/chatappheader'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Goit from '../components/goit'
import Goitmsg from '../components/goitmsg';
//import { BiArrowBack, BiMenu} from "react-icons";
const config = {
  initialMessages: [
    createChatBotMessage('Hello, Welcome to student info system!',
    
        {
          widget: 'goit',
         
        },
      )
    ],
  //customMessages: {
   //   "custom": (props) => <Goitmsg {...props} />
  //},
    widgets :[
    {
      widgetName: 'goit',
      widgetFunc: (props) => <Goit {...props} /> ,
    }
],

  customStyles:{
    botMessageBox: {
      backgroundColor: "#A8C4C4"
    },
    chatButton: {
      backgroundColor: "rgb(62, 159, 244)",
    
    }
  },
  customComponents :{
    header : () => 
      <div style ={{
          backgroundColor: 'white',
          width: '95%',
          boxShadow: '#1d1d1d -15px 20px 10px -20px',
          display: 'flex',
          gap: '74%',
          height: '49px',
          padding: '9px'
        }}
      > 
        <img style = {{height :'45px',width:'45px',marginLeft:'20px'}}src="/assets/logo.jpeg" alt="" />
        <DehazeIcon sx={{mt:1.5}}/>
      </div>,
  
    botAvatar: () => <Botavatar  />,
  }
};

export default config;