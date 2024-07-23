// src/components/Card/index.js
import React from 'react';
import styles from './card.module.scss';

function Card({ suit, value }) {
  return (
    <div className={styles.card}>
      <span>{value}</span>
      <span>{suit}</span>
    </div>
  );
}

export default Card;