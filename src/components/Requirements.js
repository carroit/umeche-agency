import React from 'react';
import styles from '../styles/service.css';

const Requirements = () => {
  return (
    <div className={styles.requirements}>
      <h2>Requirements for Registration</h2>
      <ul>
        <li>Valid Passport</li>
        <li>Government ID Card</li>
        <li>COC Certificate</li>
        <li>Minimum Age: 18 years</li>
      </ul>
    </div>
  );
};

export default Requirements;

