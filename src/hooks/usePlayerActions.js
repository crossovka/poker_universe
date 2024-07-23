// usePlayerActions
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function usePlayerActions() {
  const { dispatch } = useContext(GameContext);

  const placeBet = (playerId, amount) => {
    dispatch({ type: 'PLACE_BET', payload: { playerId, amount } });
  };

  // другие действия игрока

  return {
    placeBet,
    // другие действия
  };
}

export default usePlayerActions;
