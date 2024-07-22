import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GameRoom from './pages/GameRoom';
import { GameProvider } from './contexts/GameContext';

function App() {
	return (
		<GameProvider>
			<Router>
				<Header title="Poker University" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/game" element={<GameRoom />} />
				</Routes>
				<Footer />
			</Router>
		</GameProvider>
	);
}

export default App;
