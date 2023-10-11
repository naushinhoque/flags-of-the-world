import React from 'react';
import './App.css';
import FlagList from './components/FlagList';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1 className="title">Flags Of The World</h1>
        <FlagList />
        <Routes>
          <Route path=":countryName" element={<CountryDetail countries={countries} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
