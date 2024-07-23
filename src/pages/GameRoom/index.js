import React, { useEffect } from 'react';
import useGameLogic from '../../hooks/useGameLogic';
import Table from '../../components/Table';

import styles from './gameroom.module.scss';
// in public/img/tables/1.png
import tableImage from '../../assets/tables/1.png';

function GameRoom() {
	const { state, startGame, placeBet, dealCommunityCard } = useGameLogic();

	useEffect(() => {
		startGame();
	}, []);

	const handleBet = (playerId, amount) => {
		placeBet(playerId, amount);
	};

	return (
		<main className={styles.gameroom}>
			<div className={styles.gameroom__top}></div>
			<Table
				players={state.players}
				pot={state.pot}
				communityCards={state.communityCards}
				tableImage={tableImage}
			/>
			<button onClick={() => dealCommunityCard()}>Deal Community Card</button>

			<div className={styles.gameroom__controls}></div>
		</main>
	);
}

export default GameRoom;
