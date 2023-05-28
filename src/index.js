import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { About} from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path='/' element={<App></App>}></Route>
    <Route path='/about' element={<About></About>}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);