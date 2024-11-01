import React from 'react';
import { FaUserNurse, FaChalkboardTeacher, FaConciergeBell, FaHandsHelping } from 'react-icons/fa';
import styles from '../styles/service.css';

const servicesData = [
  { name: 'Female House Maid', icon: <FaUserNurse /> },
  { name: 'Private Teacher', icon: <FaChalkboardTeacher /> },
  { name: 'Support Worker', icon: <FaHandsHelping /> },
  { name: 'House Waiter', icon: <FaConciergeBell /> },
  // Add more professions here
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>Our Domestic Professions</h2>
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            {service.icon}
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
