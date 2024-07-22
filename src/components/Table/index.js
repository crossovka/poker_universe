import React from 'react';
import styles from './table.module.scss';
import Player from '../Player';

function Table({ players, pot }) {
  return (
    <div className={styles.table}>
      <h2>Банк: {pot}</h2>
      <div className={styles.players}>
				<h2>Игроки</h2>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

export default Table;
