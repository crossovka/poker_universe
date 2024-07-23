export const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
export const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export const allCards = suits.flatMap(suit =>
  values.map(value => ({ suit, value }))
).concat({ suit: 'unknown', value: 'unknown' }) // Добавляем неизвестную карту
.concat({ suit: 'back', value: 'back' }); // Добавляем карту "back"