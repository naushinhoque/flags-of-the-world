import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom'; 
import CountryDetail from './CountryDetail';

function FlagList() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flag-list">
      {countries.map((country) => (
        <div key={country.cca2}>
          <Link to={country.name.common}>
            <img className="flag-img" src={country.flags[0]} alt={country.name.common} />
            <p className="country-name">{country.name.common}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FlagList;




