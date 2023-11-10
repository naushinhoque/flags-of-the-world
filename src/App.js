import React, { useState, useEffect } from 'react';
import './App.css';
import FlagList from './components/FlagList';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3/all');
        setCountries(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className='App'>
        <h1 className="title">Flags Of The World</h1>
        <FlagList countries={countries} loading={loading} error={error}/>
        <Routes>
          <Route path=":countryName" element={<CountryDetail countries={countries} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
