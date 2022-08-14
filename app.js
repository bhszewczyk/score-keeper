const playToSelector = document.querySelector('#playto');
const player1Btn = document.querySelector('#p1Button');
const player2Btn = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');

const player1Display = document.querySelector('#p1Display');
const player2Display = document.querySelector('#p2Display');
const endResultDisplay = document.querySelector('#result');

const resetBar = document.querySelector('#reset-progress');
const resetText = document.querySelector('#reset-text');

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

	resetBar.classList.add('progress');
	const moveBar = moveProgressBar(3000);
	resetText.innerText = 'Reseting...';
	resetText.style.color = 'black';

	setTimeout(function () {
		resetBtn.disabled = false;
		resetBar.classList.remove('progress');
		clearInterval(moveBar);
		reset();
	}, 3000);
}

function reset() {
	player1Score = 0;
	player2Score = 0;
	playToPoints = parseInt(playToSelector.value);
	resetBar.classList.remove('progress');

	player1Display.innerText = player1Score;
	player2Display.innerText = player2Score;
	endResultDisplay.innerText = '';
	resetText.innerText = '';

	playToSelector.disabled = false;
	player1Btn.disabled = false;
	player2Btn.disabled = false;
	resetBtn.disabled = false;
}

function moveProgressBar(time) {
	let width = 100;
	let tick = 1000 / 60;
	let decreaseBarBy = 100 / (time / tick);
	const moveBar = setInterval(updateProgressBar, tick);

	function updateProgressBar() {
		if (width > 0) {
			console.log(width);
			width -= decreaseBarBy;
			resetBar.style.width = width + '%';
		}
	}

	return moveBar;
}
