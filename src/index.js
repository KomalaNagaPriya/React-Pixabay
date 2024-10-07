import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Login from './Pages/Login';
import Join from './Pages/Join';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <Join/> */}
    <App />
  </React.StrictMode>
);


