import React, { createContext, useReducer } from 'react';
import Deck from '../models/Deck';
import Player from '../models/Player';

const initialState = {
  deck: new Deck(),
  players: [],
  pot: 0,
  communityCards: [],
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, new Player(action.payload)] };
    case 'START_GAME':
      state.deck.shuffle();
      const initialCards = state.players.map(player => ({
        ...player,
        cards: [state.deck.draw(), state.deck.draw()].map(card => ({ ...card, isBack: false })),
      }));
      return { ...state, communityCards: [], pot: 0, players: initialCards };
    case 'PLACE_BET':
      const updatedPlayers = state.players.map(player => {
        if (player.id === action.payload.playerId) {
          return { ...player, chips: player.chips - action.payload.amount, currentBet: action.payload.amount };
        }
        return player;
      });
      return { ...state, players: updatedPlayers, pot: state.pot + action.payload.amount };
    case 'DEAL_COMMUNITY_CARD':
      return { ...state, communityCards: [...state.communityCards, { ...state.deck.draw(), isBack: false }] };
    case 'FLIP_PLAYER_CARD':
      return {
        ...state,
        players: state.players.map(player => {
          if (player.id === action.payload.playerId) {
            return {
              ...player,
              cards: player.cards.map((card, index) =>
                index === action.payload.cardIndex ? { ...card, isBack: false } : card
              ),
            };
          }
          return player;
        }),
      };
    default:
      return state;
  }
}

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
