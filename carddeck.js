// 
// Blackjack
// By: Mel Rush
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven',
              'six', 'five', 'four', 'three', 'two'];
              

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

//return string of card dealt
function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

function getNextCard() {
  return deck.shift();  
}

let deck = createDeck();

/*
//print out entire deck
for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}
*/

let playerCards = [ getNextCard(), getNextCard() ];
a

console.log('Welcome to BlackJack!');
console.log('You were dealt ' + getCardString(playerCards[0]));
console.log('and ' + getCardString(playerCards[1]));



