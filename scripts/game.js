let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    // An array for the different choices.
    choices: ["button1", "button2", "button3", "button4"]
};

// we'll be exporting more than one object and function from this file,
// so we need to put them in curly braces. 
module.exports = { game };