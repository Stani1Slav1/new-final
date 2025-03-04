import React from 'react';
import {
  BrowserRouter as Router
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import News from './News';
import './App.css';

function App() {
  return <Routes>
  <nav>
    <Link to="/about">About</Link>
    <Link to="/about">Home</Link>
    <Link to="/about">News</Link>
  </nav>

  <Routes>
    <Route path="/about" element={<About/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/news" element={<News/>} />
  </Routes>
  </Routes>

}

export default App;
