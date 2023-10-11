// CountryDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail({ countries }) {
  const { countryName } = useParams();

  const country = countries.find((c) => c.name.common === countryName);

  if (!country) {
    return <div>Country Not Found!</div>
  }

  return (
    <div>
      <h2>{country.name.common} Details:</h2>
      <p>Offical Name: {country.name.official}</p>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
    </div>
  );
}

export default CountryDetail;
