


import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useNavigate } from 'react-router-dom';



const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  console.log(children.props.children.props)
  
  const checker = children.props.children.props.state.checker;
  
  
  const navigate = useNavigate();
  
  


  
 const initialAction = () => {
    const message = createClientMessage('Got it!',{
      delay:3000,
    })
    const botmessage = createChatBotMessage('Pick a slot!',{
      delay:2000,
      widget:'calendar',
    })
    
    updateState(message,"firstcheck");
    updateState(botmessage,"firstcheck");

 }


 const aftercalendar = () => {
 
  // Create a chatbot message with the selected date
  const botmessage = createChatBotMessage('Select one of the time slot!',{
    delay:2000,
    widget:'slots'
  })

  // Update the global state calendarslot with the selected date
  setState((prev) => ({
    ...prev,
   
    messages: [...prev.messages, botmessage],
    checker: "slot",
  }));
}

const afterslot = (calenderslot,timeslot) =>{
  const message = createClientMessage(`${calenderslot},${timeslot}`,{
    delay:3000,
  }) 
  setState((prev)=>({
    
    ...prev,
    messages: [...prev.messages, message],
    checker: "time",

  }))

  const botmessage = createChatBotMessage('Enter your name!',{
    delay:1000,
    
  })
  updateState(botmessage,"name");

  
}


const afterNameMessage = () =>{
  const botmessage = createChatBotMessage(`Select your age`,{
    widget:'agepicker'
  })
 

  updateState(botmessage,"age")

 

  
}

const afterage = (age) => {
  const name = children.props.children.props.state.userData.name;
  const message = createClientMessage(`${age}`);
  const botmessage = createChatBotMessage('Thank you!')
  updateState(message, "agemessage");
  updateState(botmessage, "agemessage");

  const botmessage1 = createChatBotMessage('5....4.....3....2....1..', {
    delay: 2000,
  });
  updateState(botmessage1, "redirect");

  setTimeout(() => {
    navigate(`/thankyou?name=${name}&age=${age}`);
    console.log('Navigation completed.');
  }, 5000);
}




 

//  const afterGotit=() =>{
//   const botmessage = createChatBotMessage("Pick a slot!",{
//     delay:3000,
//     widget:'Morningslot'
    
//   });
//   updateState(botmessage,"slot");
//  }

    
  const updateState = (message, checker="") =>{
    setState((prev)=>({
      ...prev,
      
      messages:[...prev.messages, message] ,
      checker, 
    }))
  }
  
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            aftercalendar,
            afterslot,
            afterNameMessage,
            afterage,
        
          
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
 
