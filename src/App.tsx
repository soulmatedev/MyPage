import React from 'react';
import MeetingPage from './components/pages/MeetingPage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import ContactsPage from "./components/pages/ContactsPage";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MeetingPage />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contacts' element={<ContactsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
