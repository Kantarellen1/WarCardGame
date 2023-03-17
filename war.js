class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    value() {
        const values = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'Knægt': 11,
            'Dronning': 12,
            'Konge': 13,
            'Es': 14,
        };

        return values[this.rank];
    }
}

class Deck {
    constructor(maxCards = 52) {
        this.cards = [];

        const suits = ['Hjerter', 'Ruder', 'Klør', 'Spar'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knægt', 'Dronning', 'Konge', 'Es'];

        for (let suit of suits) {
            for (let rank of ranks) {
                if (this.cards.length < maxCards) {
                    this.cards.push(new Card(rank, suit));
                }
            }
        }

        this.shuffle();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }

    get length() {
        return this.cards.length;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.wins = 0;
    }

    addCard(card) {
        this.hand.push(card);
    }

    addCards(cards) {
        this.hand = this.hand.concat(cards);
    }

    playCard() {
        return this.hand.shift();
    }

    hasCards() {
        return this.hand.length > 0;
    }
}

class War {
    constructor(player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        this.deck = new Deck();
        this.dealCards();
        this.rounds = 0;
    }

    dealCards() {
        while (this.deck.length > 0) {
            this.player1.addCard(this.deck.deal());
            this.player2.addCard(this.deck.deal());
        }
    }

    playRound() {
        this.rounds++;

        const player1Card = this.player1.playCard();
        const player2Card = this.player2.playCard();

        const output = document.getElementById('output');
        const player1CardValue = document.getElementById('player1CardValue');
        const player1CardSuit = document.getElementById('player1CardSuit');
        const player2CardValue = document.getElementById('player2CardValue');
        const player2CardSuit = document.getElementById('player2CardSuit');
        const player1Wins = document.getElementById('player1Wins');
        const player2Wins = document.getElementById('player2Wins');
        const player1CardCount = document.getElementById('player1CardCount')
        const player2CardCount = document.getElementById('player2CardCount')


        player1CardValue.innerText = `Værdi: ${player1Card.rank}`;
        player1CardSuit.innerText = `Kulør: ${player1Card.suit}`;
        player2CardValue.innerText = `Værdi: ${player2Card.rank}`;
        player2CardSuit.innerText = `Kulør: ${player2Card.suit}`;

        if (player1Card.value() > player2Card.value()) {
            //Spiller 1 vinder runden
            this.player1.addCards([player1Card, player2Card]);
            output.innerText = `${this.player1.name} vinder runde ${this.rounds}`;
            this.player1.wins += 1;
            //Opdater sejre
            player1CardCount.innerText = `${this.player1.name} har ${this.player1.hand.length} kort`
            player2CardCount.innerText = `${this.player2.name} har ${this.player2.hand.length} kort`;
            player1Wins.innerText = `Sejre: ${this.player1.wins}`;
            player2Wins.innerText = `Sejre: ${this.player2.wins}`;
        } else if (player1Card.value() < player2Card.value()) {
            //Spiller 2 vinder runden
            this.player2.addCards([player1Card, player2Card]);
            output.innerText = `${this.player2.name} vinder runde ${this.rounds}`;
            this.player2.wins += 1;

            //Opdater sejre
            player1CardCount.innerText = `${this.player1.name} har ${this.player1.hand.length} kort`
            player2CardCount.innerText = `${this.player2.name} har ${this.player2.hand.length} kort`;
            player1Wins.innerText = `Sejre: ${this.player1.wins}`;
            player2Wins.innerText = `Sejre: ${this.player2.wins}`;
        } else {
            //Krig
            output.innerText = `Krig i runde ${this.rounds}!`;

            //Trækker 3 kort
            const player1Cards = [player1Card];
            const player2Cards = [player2Card];
            for (let i = 0; i < 3; i++) {
                if (this.player1.hasCards() && this.player2.hasCards()) {
                    player1Cards.push(this.player1.playCard());
                    player2Cards.push(this.player2.playCard());
                } else {
                    //Hvis en spiller ikke har nok kort til krig taber de automatisk
                    if (!this.player1.hasCards()) {
                        output.innerText = `${this.player2.name} vinder krigen i runde ${this.rounds}!`;
                        this.player2.wins++;
                        player2Wins.innerText = `Sejre: ${this.player2.wins}`;
                        player1CardCount.innerText = `${this.player1.name} har ${this.player1.hand.length} kort`
                        player2CardCount.innerText = `${this.player2.name} har ${this.player2.hand.length} kort`;
                    } else {
                        output.innerText = `${this.player1.name} vinder krigen i runde ${this.rounds}!`;
                        this.player1.wins++;
                        player1Wins.innerText = `Sejre: ${this.player1.wins}`;
                        player1CardCount.innerText = `${this.player1.name} har ${this.player1.hand.length} kort`
                        player2CardCount.innerText = `${this.player2.name} har ${this.player2.hand.length} kort`;
                    }

                    return;
                }
            }

            //Tager det sidste kort der blev trukket 
            const player1WarCard = player1Cards[player1Cards.length - 1];
            const player2WarCard = player2Cards[player2Cards.length - 1];



            if (player1WarCard.value() > player2WarCard.value()) {
                //Spiller 1 vinder krigen
                this.player1.addCards(player1Cards.concat(player2Cards));
                output.innerText = `${this.player1.name} vinder krigen i runde ${this.rounds}!`;
                this.player1.wins += 1;

            } else if (player1WarCard.value() < player2WarCard.value()) {
                //Spiller 2 vinder krigen
                this.player2.addCards(player1Cards.concat(player2Cards));
                output.innerText = `${this.player2.name} vinder krigen i runde ${this.rounds}!`;
                this.player2.wins += 1;

            } else {
                //Krig igen
                output.innerText = `Krig igen i runde ${this.rounds}!`;

                //Rekursiv funktion til at køre den igen hvis nødvendigt
                this.playRound();
            }

            //Opdater sejre
            player1CardCount.innerText = `${this.player1.name} har ${this.player1.hand.length} kort`
            player2CardCount.innerText = `${this.player2.name} har ${this.player2.hand.length} kort`;
            player1Wins.innerText = `Sejre: ${this.player1.wins}`;
            player2Wins.innerText = `Sejre: ${this.player2.wins}`;
        }


    }

}



const form = document.querySelector('form');
const player1NameHeading = document.getElementById('player1Name');
const player2NameHeading = document.getElementById('player2Name');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    player1NameHeading.textContent = player1;
    player2NameHeading.textContent = player2;

    const game = new War(player1, player2);

    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', () => {
        game.playRound();
    });

    const playButton2 = document.getElementById('playButton2');
    playButton2.addEventListener('click', () => {
        let rounds = 0;
        const maxRounds = 5000;
        while (rounds <= maxRounds) {
            game.playRound();
            rounds++;
        }
    });

});









