import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.scss';

function Home() {
	const navigate = useNavigate();

	const handlePlayClick = () => {
		navigate('/game');
	};

	return (
		<main className={styles.home}>
			<div className={styles.home__container}>
				<h2>Добро пожаловать в poker universe</h2>
				<button onClick={handlePlayClick}>Играть ( Проиграть :) )</button>
			</div>
		</main>
	);
}

export default Home;
