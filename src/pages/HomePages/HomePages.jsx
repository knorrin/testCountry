import { useState, useEffect } from 'react';
import CountryList from '../../components/CountryList/CountryList';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all',{method:'GET'})
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCountries(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-3">
      <h1>Список стран</h1>
      <CountryList countries={countries} />
    </div>
  );
}

export default HomePage;