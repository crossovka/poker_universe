import React from 'react';
import styles from './card.module.scss';

const getCardImagePath = (suit, value) => {
  if (suit === 'back') return '/assets/cards/default/back.png';
  if (suit === 'unknown') return '/assets/cards/default/unknown.png';
  return `/assets/cards/default/${value}${suit[0]}.png`;
};

function Card({ suit, value }) {
  const imagePath = getCardImagePath(suit, value);
  return (
    <div className={`${styles.card} -ibg`}>
      <img src={imagePath} alt={`${value || 'unknown'} of ${suit || 'unknown'}`} />
    </div>
  );
}

export default Card;