import { Link } from 'react-router-dom';

function CountryList({ countries }) {
  return (
    <div className='list-group'>
      {countries &&
        countries.map((country, index) => (
          <Link
            key={index}
            to={`/country/${country.name.common}`}
            className='list-group-item list-group-item-action d-flex justify-content-start align-items-center'
          >
            <img
              src={country.flags.svg}
              alt={`Флаг ${country.name.common}`}
              width='50'
              className='img-thumbnail mr-2'
            />
            {country.name.common}
          </Link>
        ))}
    </div>
  );
}

export default CountryList;
