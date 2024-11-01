// src/components/AnimatedCard.js
import React from 'react';
import { Fade } from "react-awesome-reveal";

import '../styles/service.css';

const AnimatedCard = ({ title, description, icon }) => (
   <Fade bottom>
      <div className="card bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
         {icon && <div className="card-icon mb-4">{icon}</div>}
         <h3 className="card-title text-xl font-semibold mb-2">{title}</h3>
         <p className="card-description text-gray-700">{description}</p>
      </div>
   </Fade>
);

export default AnimatedCard;
