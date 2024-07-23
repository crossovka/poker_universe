let playerIdCounter = 0;

class Player {
	constructor(name) {
		this.id = playerIdCounter++;
		this.name = name;
		this.chips = 1000; // Начальное количество фишек
		this.cards = [];
		this.currentBet = 0;
	}

	placeBet(amount) {
		if (amount > this.chips) {
			throw new Error('Not enough chips');
		}
		this.chips -= amount;
		this.currentBet += amount;
		return amount;
	}
}

export default Player;