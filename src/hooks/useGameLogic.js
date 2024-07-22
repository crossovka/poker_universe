import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function useGameLogic() {
  const { state, dispatch } = useContext(GameContext);

  const addPlayer = (player) => {
    dispatch({ type: 'ADD_PLAYER', payload: player });
  };

  // другие функции игры

  return {
    state,
    addPlayer,
    // другие функции
  };
}

export default useGameLogic;
