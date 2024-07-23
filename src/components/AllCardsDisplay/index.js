import React from 'react';
import Card from '../Card';
import { allCards } from '../../utils/deck'; // Убедитесь, что путь правильный

import styles from './AllCardsDisplay.scss';

function AllCardsDisplay() {
  return (
    <div className="allCards">
      {allCards.map((card, index) => (
        <Card key={index} suit={card.suit} value={card.value} />
      ))}
    </div>
  );
}

export default AllCardsDisplay;
