import React from 'react';
import styles from './header.module.scss';

function Header({ title, imageUrl, loading = false }) {
	return (
		<header className={styles.header}>
			<a className='-ibg_contain' style={{width: '40px', height: '40px'}} href="https://reactjs.org" target="_blank" rel="noreferrer">
				<img src="img/logo192.png" alt="Logotype" />
			</a>
			<h1>Hello React</h1>
		</header>
	);
}

export default Header;
