import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/Pages/Home'

function App() {

//TODO: task component for day component - currently working out best way to implement the task component
//TODO: suggestions component - thinking coloumn sturucture - bored API
//TODO: Intergration with openAi CHat: https://chat.openai.com/backend-api/moderations, 
//conversation_id
//: 
//"caa8fe6c-4ce6-4974-ba17-c7f8b1e78625"
//input
//: 
//"hello\n\nHello! How can I help you today?\n\nwhat is 1+1\n\n1 + 1 is equal to 2. It is a basic arithmetic operation that involves adding two numbers together. The result of the operation depends on the values of the numbers being added. In this case, since 1 and 1 are both equal to 1, the result is 2. "
//message_id
//: 
//"5e47de12-8c76-4294-a630-e64b405b4a2b"
//model
//: 
//"text-moderation-playground"
//TODO: Highlight current day
//TODO: Choose Colour for task
//TODO: Create DB functionality with login
//TODO: Make Day type and transform month displaydats to useMemo
//TODO: Filter by day, month, year
//TODO: Optimise for mobile 
//TODO: Create Clock functionality - stopwatch and timer
//TODO: Importing of google calendar/exporting to google calendar or something with google api
//TODO: Dashboard
//TODO: messaging? 
//TODO: ChatGPT3 to organise your day





//thoughts - maybe a dashboard - weather/crypto/finance/news/sport
//thoughts could turn into productivity app rather than just calendar for eg calendar would be a page, mail would be another, news would be another, 


  return (         
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter> 

  );
}

export default App;
