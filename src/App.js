import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
// import SideMenu from './pages/SideMenu';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Screen5 from './pages/Screen5';
import Screen6 from './pages/Screen6';
import Screen7 from './pages/Screen7';

function App() {
 // src/Routes.js


  return (
    <div className="app">]
    {/* Main content goes here */}
    <Router>
    <Sidebar /> {/* Include the Sidebar component */}
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/screen2" element={<Screen2/>} />
      <Route path="/screen3" element={<Screen3/>} />
      <Route path="/screen4" element={<Screen4/>} />
      <Route path="/screen5" element={<Screen5/>} />
      <Route path="/screen6" element={<Screen6/>} />
      <Route path="/screen7" element={<Screen7/>} />

      </Routes>
      <Footer/>
      </Router>
    </div>
  );




}

export default App;
