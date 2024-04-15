import React, { createContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss'
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider

  >
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Context.Provider>
);
