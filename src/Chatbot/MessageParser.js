import React from 'react';
import {createClientMessage} from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
  const checker = children.props.state.checker;
  const age = children.props.state.userData.age;
  const parse = (message) => {
   
  if (checker === "name") {
      children.props.state.userData.name = message;
      actions.afterNameMessage();
  }


  if(checker === "agemessage"){
    actions.redirect();
  }

     
    



  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;