let game = {
    currentGame: [], // an array
    playerMoves: [], // an array
    score: 0,
    // An array for the different choices.
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

// to export objects into the test file.
// we'll be exporting more than one object and function from this file,
// so we need to put them in curly braces. 
module.exports = { game, newGame, showScore, addTurn, lightsOn };

