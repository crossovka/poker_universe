export const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
export const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export const allCards = suits.flatMap(suit =>
  values.map(value => ({ suit, value }))
).concat({ suit: 'unknown', value: 'unknown' }); // Добавляем неизвестную карту


// Использование
// import { allCards } from '../../utils/deck'; // Импортирт массива всех карт

// {/* Отображаем все карты */}
// <div className='allCards'>
// 	{allCards.map((card, index) => (
// 		<Card key={index} suit={card.suit} value={card.value} />
// 	))}
// </div>

// .allCards{
// 	display: grid;
// 	grid-template-columns: repeat(10, 1fr);
// 	gap: 20px;
// }