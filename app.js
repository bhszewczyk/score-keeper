const playToSelector = document.querySelector('#playto');
const player1Btn = document.querySelector('#p1Button');
const player2Btn = document.querySelector('#p2Button');

let playToPoints = parseInt(playToSelector.value);
let player1Score = 0;
let player2Score = 0;

playToSelector.addEventListener('click', function (e) {
	e.preventDefault();
	playToPoints = parseInt(playToSelector.value);
});

player1Btn.addEventListener('click', function (e) {
	e.preventDefault();
	player1Score = increaseScore(player1Score, 1);
	checkGameStatus(player1Score, player2Score);
});

player2Btn.addEventListener('click', function (e) {
	e.preventDefault();
	player2Score = increaseScore(player2Score, 1);
	checkGameStatus(player1Score, player2Score);
});

function increaseScore(playerScore, points) {
	// console.log(event);
	// e.preventDefault();
	playerScore += points;

	console.log(playerScore);

	return playerScore;
}

function checkGameStatus(playerScore) {
	console.log('checkGameStatus');
	if (player1Score === playToPoints) {
		console.log('Player 1 wins');
		reset();
	} else if (player2Score === playToPoints) {
		console.log('Player 2 wins');
		reset();
	} else {
		return playerScore;
	}
}

function reset() {
	player1Score = 0;
	player2Score = 0;
	playToSelector.value = 3;
}
