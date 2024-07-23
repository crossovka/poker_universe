// src/components/Table/index.js
import React from 'react';
import Dealer from '../Dealer';
import Player from '../Player';
import Card from '../Card';
import styles from './table.scss';

function Table({ players, pot, communityCards, tableImage }) {
	return (
		<div className="gameroom__table table">
			<div className="table__content -ibg_contain">
				<img className="table__img" src={`${tableImage}`} alt="стол" />
				{/* <Dealer /> */}
				<div className='pot'>Банк: {pot}</div>
				<div className='communityCards'>
					{communityCards.map((card, index) => (
						<Card key={index} suit={card.suit} value={card.value} />
					))}
				</div>
			</div>
				<div className='players'>
					{players.map((player, index) => (
						<Player key={index} {...player} />
					))}
				</div>
		</div>
	);
}

export default Table;
