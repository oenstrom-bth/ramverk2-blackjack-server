"use strict";

class Deck {
    constructor(nrOfDecks) {
        this.setup(nrOfDecks);
    }



    /**
     * Setup the deck(s) of cards.
     */
    setup(nrOfDecks) {
        this.decks = nrOfDecks || 2;
        this.cards = [];

        [...Array(this.decks).keys()].map(() => {
            this.cards = this.cards.concat([...Array(52).keys()].map(i => ++i));
        });
    }



    /**
     * Restores the deck(s) and shuffle the cards.
     */
    restoreAndShuffle() {
        this.setup(this.decks);
        this.shuffle();
    }



    /**
     * Shuffle the deck(s) of cards.
     */
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }



    /**
     * Get the last card in the card array.
     */
    getCard() {
        return this.cards.pop();
    }
}

module.exports = Deck;
