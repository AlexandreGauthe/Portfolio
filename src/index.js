import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from'./pages/Home';
import Projet from './pages/Projet';
import Error from './pages/Error';
import "./styles/Index.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Portfolio' element={<Home />}/>
        <Route path='/projet/:projetid' element={<Projet />} />
        <Route path='*' element={<Error />} />
        <Route path='Portfolio/error' element={<Error />}/> 
      </Routes>
    </Router>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
