

const coin = document.querySelector('#coin');
const button = document.querySelector('#flips');
const heads = document.querySelector('#betheads');
const tails = document.querySelector('#bettails');
const betResult = document.querySelector('#betResult');
const chooseBet = document.querySelector('#chooseBet');
const reload = document.querySelector('#reload');
const player1ScoreElement = document.querySelector('#player1Score');
const player2ScoreElement = document.querySelector('#player2Score');let bet= "";
const replay = document.querySelector('#restart');
let player1Score = 0;
let player2Score = 0;

function blabla(shin, abe) {
    setTimeout(shin, abe);
}

function processResult(result) {

    if (bet == "") {
        betResult.innerHTML = '<br>Please choose a bet!';
    } else {
        if (result == bet) {
            betResult.innerHTML = '<span class="wincolor"><br>Player 1 wins <span class="colorlose"><br>Player 2 loses</span>';
            player1Score++;
        } else {
            betResult.innerHTML = '<span class="losecolor"><br>Player 1 loses <span class="colorwin"><br>Player 2 wins';
            player2Score++;
        }

        player1ScoreElement.textContent = player1Score;
        player2ScoreElement.textContent = player2Score;

        reload.style.visibility = 'visible';

    }
}

function flipCoin() {
    coin.setAttribute('class', '');
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';

    blabla(function () {
        coin.setAttribute('class', 'animate-' + result);
        blabla(processResult.bind(null, result), 2900);
    }, 100);
}

function betTails() {
    bet = "tails";
    chooseBet.innerHTML = 'Player 1 bet tails | PLayer 2 bet heads';
}

function betHeads() {
    bet = "heads";
    chooseBet.innerHTML = 'Player 1 bet heads | PLayer 2 bet tails';
}

function restartGame() {
    bet = "";
    player1Score = 0;
    player2Score = 0;
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    betResult.innerHTML = "";
    chooseBet.innerHTML = "";
    reload.style.visibility = 'hidden';
    coin.setAttribute('class', '');
}

button.addEventListener('click', flipCoin);
tails.addEventListener('click', betTails);
heads.addEventListener('click', betHeads);
replay.addEventListener('click', restartGame);