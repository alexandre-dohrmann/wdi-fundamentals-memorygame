var cards = [
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
	},
	{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
	}
];
var cardsInPlay = [];
var score = 0;
var scoreDom = document.getElementById('score');

var resetGame = function() {
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML = '';
	createBoard();
}

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		scoreDom.innerHTML = ++score;
	} else {  
		alert("Sorry try again");
	}
};

var flipCard = function () {
	if (cardsInPlay.length === 2) {
		alert("Please reset the game.")
		return;
	}	

	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);  
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
};

var createBoard = function () {
	//CSS Tricks - https://css-tricks.com/snippets/javascript/shuffle-array///
	cards.sort(function() { return 0.5 - Math.random() });
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");	
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

document.getElementById('reset-button').addEventListener('click', resetGame);
createBoard();






    