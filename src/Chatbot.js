import React from 'react';
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';
import config from './Chatbot/config';

const ChatbotPage = () => {
    return (
      <div className="">
       
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </div>
    );
  };
  
  export default ChatbotPage;
  