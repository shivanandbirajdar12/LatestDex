import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import './Assets/Main.css'
import '../src/index.css'
import App from './App';
import Dropdownstate from './Component/DrodownState';


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Dropdownstate>
      <App />
    </Dropdownstate>

  </BrowserRouter>
);