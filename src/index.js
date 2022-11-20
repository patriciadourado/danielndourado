import React from 'react';
import ReactDOM from 'react-dom/client';
import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";

import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Intro from './Pages/Intro';
import HeaderOpen from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Colors />
    <Reset />
    
    <HeaderOpen />
    <Intro />
    <About />
    <Blog />
    <Contact />
  </React.StrictMode>
);
