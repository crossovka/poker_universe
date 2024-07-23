// src/pages/GameRoom/index.js
import React from 'react';
import Table from '../../components/Table';
import useGameLogic from '../../hooks/useGameLogic';
import styles from './gameroom.module.scss';
// in public/img/tables/1.png
import tableImage from '../../assets/tables/1.png';

function GameRoom() {
  const { state } = useGameLogic();

  // Пример данных, пока нет подключения к настоящей игре
  const players = [
    { name: 'Player 1', chips: 1000, cards: [{ value: 'A', suit: '♠' }, { value: 'K', suit: '♦' }], combination: 'Pair' },
    { name: 'Player 2', chips: 800, cards: [{ value: 'Q', suit: '♠' }, { value: 'J', suit: '♦' }], combination: 'High Card' },
    // { name: 'Player 3', chips: 600, cards: [{ value: '10', suit: '♠' }, { value: '9', suit: '♦' }], combination: 'Straight' },
    // { name: 'Player 4', chips: 500, cards: [{ value: '8', suit: '♠' }, { value: '7', suit: '♦' }], combination: 'Flush' },
    // { name: 'Player 5', chips: 400, cards: [{ value: '6', suit: '♠' }, { value: '5', suit: '♦' }], combination: 'Full House' },
  ];

  const communityCards = [
    { value: '4', suit: '♠' },
    { value: '3', suit: '♦' },
    { value: '2', suit: '♠' },
    { value: 'J', suit: '♣' },
    { value: '10', suit: '♥' },
  ];

  return (
    <main className={styles.gameroom}>
			<div className={styles.gameroom__top}></div>

			<Table players={players} pot={state.pot} communityCards={communityCards} tableImage={tableImage} />

			<div className={styles.gameroom__controls}></div>
    </main>
  );
}

export default GameRoom;
