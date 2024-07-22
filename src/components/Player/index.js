import React from 'react';
import styles from './player.module.scss';

import Card from '../Card';

function Player({ name, chips, cards }) {
  return (
    <div className={styles.player}>
      <h2>{name}</h2>
      <p>Фишки: {chips}</p>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} suit={card.suit} value={card.value} />
        ))}
      </div>
    </div>
  );
}

export default Player;