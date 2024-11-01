// src/components/Register.js
import React, { useState } from 'react';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    desiredCountry: '',
    gender: '',
    maritalStatus: '',
    passport: null,
    idPhoto: null,
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and validation
    console.log(formData);
  };

  return (
    <div className={styles.register}>
      <h2>Register with Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:
          <input type="text" name="fullName" required onChange={handleChange} />
        </label>
        <label>Phone Number:
          <input type="text" name="phoneNumber" required onChange={handleChange} />
        </label>
        <label>Desired Country:
          <input type="text" name="desiredCountry" required onChange={handleChange} />
        </label>
        <label>Gender:
          <select name="gender" required onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>Passport:
          <input type="file" name="passport" required onChange={handleChange} />
        </label>
        <label>ID Photo:
          <input type="file" name="idPhoto" required onChange={handleChange} />
        </label>
        <label>Profile Photo:
          <input type="file" name="profilePhoto" required onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
