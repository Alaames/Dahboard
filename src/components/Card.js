// components/Card.js
import React from "react";
import './Card.css';

const Card = ({ title, amount, percentage, color }) => {
  return (
    <div className={`card ${color}`}>
      <h3>{title}</h3>
      <p>{amount}</p>
      <span>{percentage}</span>
    </div>
  );
};

export default Card;
