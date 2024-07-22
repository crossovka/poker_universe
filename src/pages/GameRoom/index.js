import React from 'react';
import Table from '../../components/Table';
import useGameLogic from '../../hooks/useGameLogic';
import styles from './gameroom.module.scss';

function GameRoom() {
	const { state } = useGameLogic();

	return (
		<main className={styles.gameroom}>
			<Table players={state.players} pot={state.pot} />
		</main>
	);
}

export default GameRoom;
