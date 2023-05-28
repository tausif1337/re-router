import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Contact } from './App';
import { About } from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);