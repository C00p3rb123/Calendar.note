import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/Pages/Home'

function App() {

//TODO: suggestions component - thinking coloumn sturucture - bored API
//TODO: task component for day component
//TODO: Sizing of day component 
//TODO: Highlight current day
//TODO: Importing of google calendar/exporting to google calendar or something with google api
//TODO: Create Clock functionality - stopwatch and timer
//TODO: Create DB functionality with login 
//TODO: Styling of calendar 
//TODO: skip to next and previous months
//TODO: Show calendar month


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
