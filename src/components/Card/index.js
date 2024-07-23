import React from 'react';
import styles from './card.module.scss';

const suits = {
	hearts: 'h',
	diamonds: 'd',
	clubs: 'c',
	spades: 's',
};

function Card({ suit, value, isBack = false }) {
	const suitCode = suits[suit.toLowerCase()] || '';
	const valueCode = value.toLowerCase();
	const imageName = isBack ? 'back' : `${valueCode}${suitCode}`;

	const imagePath = `/assets/cards/default/${imageName}.png`;

	return (
		<div className={`${styles.card} -ibg`}>
			<img
				src={imagePath}
				alt={`${value} of ${suit}`}
				className={styles.cardImage}
			/>
		</div>
	);
}

export default Card;
