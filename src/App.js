import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Quote from './components/quote';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
