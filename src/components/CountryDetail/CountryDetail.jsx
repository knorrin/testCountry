function CountryDetail({ country }) {
  return (
    <div className='card border-primary mb-3' style={{ maxWidth: '20rem' }}>
      <div className='card-header text-white bg-primary'>{country.name.common}</div>
      <div className='card-body'>
        <h4 className='card-title'>{country.name.official}</h4>
        {country.capital && <p className='card-text'>Столица: {country.capital}</p>}
        <img
          src={country.flags.svg}
          alt={`Флаг ${country.name.common}`}
          className='img-fluid rounded mx-auto d-block mt-3'
        />
      </div>
    </div>
  );
}

export default CountryDetail;
