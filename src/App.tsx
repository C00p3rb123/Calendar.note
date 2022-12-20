import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/Pages/Home'

function App() {

//TODO: task component for day component - currently working out best way to implement the task component
//TODO: suggestions component - thinking coloumn sturucture - bored API
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
