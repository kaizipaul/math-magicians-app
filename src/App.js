/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quotes from './components/Quotes';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/calculator" element={<Calculator />} />
      <Route exact path="/quotes" element={<Quotes />} />
    </Routes>
  </div>
);

export default App;
