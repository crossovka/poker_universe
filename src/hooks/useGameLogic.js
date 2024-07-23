import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function useGameLogic() {
	const { state, dispatch } = useContext(GameContext);

	const startGame = () => {
		dispatch({ type: 'START_GAME' });
	};

	const placeBet = (playerId, amount) => {
		dispatch({ type: 'PLACE_BET', payload: { playerId, amount } });
	};

	const dealCommunityCard = () => {
		dispatch({ type: 'DEAL_COMMUNITY_CARD' });
	};

	return {
		state,
		startGame,
		placeBet,
		dealCommunityCard,
	};
}

export default useGameLogic;