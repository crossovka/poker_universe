import React from 'react';
import styles from './header.module.scss';

function Header({ title, imageUrl, loading = false,}) {
  return (
    <header className={styles.header}>
			<h1>Hello React</h1>
    </header>
  );
}

export default Header;