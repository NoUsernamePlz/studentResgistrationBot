import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import config from "./Chatbot/config";
import EnrollmentPage from "./EnrollmentPage";
import ThankYouPage from "./ThankYouPage";
import ChatbotPage from "./Chatbot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<EnrollmentPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import EnrollmentPage from './EnrollmentPage';
// import ThankYouPage from './ThankYouPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={EnrollmentPage} />
//         <Route path="/thank-you" component={ThankYouPage} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
