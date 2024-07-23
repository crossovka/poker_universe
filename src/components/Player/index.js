import React from 'react';
import styles from './player.module.scss';
import Card from '../Card';

function Player({ name, chips, cards, combination }) {
	return (
		<div className={styles.player}>
			<div className={styles.avatar}></div>
			<div className={styles.info}>
				<h3>{name}</h3>
				<p>Фишки: {chips}</p>
				<p>Комбинация: {combination}</p>
			</div>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<Card
						key={index}
						suit={card.suit}
						value={card.value}
						isBack={card.isBack} // Если карта скрыта, то показываем рубашку
					/>
				))}
			</div>
		</div>
	);
}

export default Player;
