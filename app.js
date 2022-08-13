const playToSelector = document.querySelector('#playto');
const player1Btn = document.querySelector('#p1Button');
const player2Btn = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');

const player1Display = document.querySelector('#p1Display');
const player2Display = document.querySelector('#p2Display');
const endResultDisplay = document.querySelector('#result');

// let player1Score = 0;
// let player2Score = 0;
// playToPoints = parseInt(playToSelector.value);

reset();

playToSelector.addEventListener('click', function (e) {
	e.preventDefault();
	playToPoints = parseInt(playToSelector.value);
});

player1Btn.addEventListener('click', function (e) {
	e.preventDefault();
	player1Score = increaseScore(player1Score, 1);
	player1Display.innerText = player1Score;
	checkGameStatus(player1Score, player2Score);
});

player2Btn.addEventListener('click', function (e) {
	e.preventDefault();
	player2Score = increaseScore(player2Score, 1);
	player2Display.innerText = player2Score;
	checkGameStatus(player1Score, player2Score);
});

resetBtn.addEventListener('click', reset);

function increaseScore(playerScore, points) {
	// console.log(event);
	// e.preventDefault();
	playerScore += points;

	return playerScore;
}

function checkGameStatus(playerScore) {
	console.log('checkGameStatus');
	if (player1Score === playToPoints) {
		endResultDisplay.innerText = 'Player 1 wins!';
	} else if (player2Score === playToPoints) {
		endResultDisplay.innerText = 'Player 2 wins!';
	} else {
		return playerScore;
	}

	playToSelector.disabled = true;
	player1Btn.disabled = true;
	player2Btn.disabled = true;
	resetBtn.disabled = true;

	setTimeout(function () {
		endResultDisplay.innerText = 'Click reset to start over';
		resetBtn.disabled = false;
		// reset();
	}, 3000);
}

function reset() {
	player1Score = 0;
	player2Score = 0;
	playToPoints = parseInt(playToSelector.value);

	player1Display.innerText = player1Score;
	player2Display.innerText = player2Score;
	endResultDisplay.innerText = '';

	playToSelector.disabled = false;
	player1Btn.disabled = false;
	player2Btn.disabled = false;
	resetBtn.disabled = false;
}
