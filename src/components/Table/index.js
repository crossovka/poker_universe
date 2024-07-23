// src/components/Table/index.js
import React from 'react';
import Dealer from '../Dealer';
import Player from '../Player';
import Card from '../Card';
import AllCardsDisplay from '../AllCardsDisplay';
import styles from './table.scss';

function Table({ players, pot, communityCards, tableImage }) {
  console.log('Players in Table:', players);
  console.log('Community Cards:', communityCards);
  
  return (
    <div className="gameroom__table table">
      <div className="table__content -ibg_contain">
        <img className="table__img" src={`${tableImage}`} alt="стол" />
        <div className="pot">Банк: {pot}</div>
        <div className="communityCards">
          {communityCards.map((card, index) => (
            card.suit && card.value ? (
              <Card key={index} suit={card.suit} value={card.value} />
            ) : (
              <div key={index} className="unknownCard">Unknown Card</div>
            )
          ))}
        </div>
      </div>
      <div className="players">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
      <AllCardsDisplay />
    </div>
  );
}

export default Table;
