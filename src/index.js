import React from 'react';
import ReactDOM from 'react-dom/client';
import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";

import About from './Pages/About';
import Contact from './Pages/Contact';
import Intro from './Pages/Intro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Colors />
    <Reset />
    <Intro />
    <About />
    <Contact />
  </React.StrictMode>
);
