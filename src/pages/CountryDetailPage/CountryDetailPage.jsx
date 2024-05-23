import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetail from '../../components/CountryDetail/CountryDetail';

function CountryDetailPage() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        if (!response.ok) throw new Error(`Country not found: ${name}`);
        return response.json();
      })
      .then(data => setCountry(data[0]))
      .catch(error => setError(error.message));
  }, [name]);

  if (error) return <div>Error: {error}</div>;
  if (!country) return <div>Loading...</div>;

  return <CountryDetail country={country} />;
}

export default CountryDetailPage;