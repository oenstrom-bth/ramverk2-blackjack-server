"use strict";
// ♣
// ♦
// ♥
// ♠

class Card {
    constructor() {
        this.suits = [
            {name: "Hearts", abbr: "h"},
            {name: "Clubs", abbr: "c"},
            {name: "Diamonds", abbr: "d"},
            {name: "Spades", abbr: "s"}
        ];
        this.names = [
            "King", "Ace", "Two", "Three", "Four", "Five", "Six",
            "Seven", "Eight", "Nine", "Ten", "Jack", "Queen"
        ];
        this.ranks = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
    }



    getSuit(cardNumber) {
        return this.suits[Math.floor((cardNumber - 1) / 13)];
    }



    getName(cardNumber) {
        return this.names[Math.floor(cardNumber % 13)];
    }



    getRank(cardNumber) {
        return this.ranks[Math.floor(cardNumber % 13)];
    }



    getCard(cardNumber) {
        let suit = this.getSuit(cardNumber);
        let name = this.getName(cardNumber);
        let rank = this.getRank(cardNumber);
        return {suit, name, rank};
    }
}

module.exports = Card;
