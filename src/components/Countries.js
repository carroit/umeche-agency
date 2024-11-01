
import React from 'react';
import styles from '../styles/service.css';

const countriesData = [
  { name: 'Dubai', flag: '/flags/dubai.png' },
  { name: 'Saudi Arabia', flag: '/flags/saudi-arabia.png' },
  { name: 'Kuwait', flag: '/flags/kuwait.png' },
];

const Countries = () => {
  return (
    <div className={styles.countries}>
      <h2>Countries We Send To</h2>
      <div className={styles.grid}>
        {countriesData.map((country, index) => (
          <div key={index} className={styles.countryItem}>
            <img src={country.flag} alt={`${country.name} flag`} />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
