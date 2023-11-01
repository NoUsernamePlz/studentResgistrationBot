import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import Avatar from "../Avatar";
import Startbtn from "./component/Startbtn";
import CalendarWidget from "./component/CalendarWidget";
import Morningslot from "./component/Morningslot";
import Agepicker from "./component/Agepicker";

const config = {
    botName:"Student Help Section",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system! `,{
    
    delay: 3000,
    widget:'startbtn',
    // widget:'slots',
  
  }),



],

state:{
  checker:null,

  userData:{
    name:"",
    age:0,
    calenderslot:"",
    timeslot:"",
  }
},

  widgets: [
    {
      widgetName: 'startbtn',
      widgetFunc: (props) => <Startbtn {...props} />,
     
    },

    {
        widgetName: 'calendar',
        widgetFunc: (props) => <CalendarWidget {...props} />,
       
      },
      {
        widgetName: 'slots',
        widgetFunc: (props) => <Morningslot {...props} />,
       
      },
      {
        widgetName: 'agepicker',
        widgetFunc: (props) => <Agepicker {...props} />,
       
      },
],
  customComponents:{
    botAvatar:(props) => <Avatar/>
  }
}

export default config;