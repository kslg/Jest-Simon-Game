/**
 * @jest-environment jsdom
 */

// We'll call game game and then require game.js
const { game, newGame, showScore, addTurn, lightsOn } = require("../game");

// add a beforeAll function and we're going to load the index.html file  into Jests mock DOM.
// beforeAll runs before all of the tests.
 beforeAll(() => {
    // Install the fs library, which  is part of node's default standard library. 
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });
 
 // describe ojbect
 describe("game object contains correct keys", () => {
     test("score key exists", () => {
        // Test if the game object contains a key called score, so expect score to be in game.
         expect("score" in game).toBe(true);
     });
     test("currentGame key exists", () => {
         expect("currentGame" in game).toBe(true);
     });
     test("playerMoves key exists", () => {
         expect("playerMoves" in game).toBe(true);
     });
     test("choices key exists", () => {
         expect("choices" in game).toBe(true);
     });
     test("choices contain correct ids", () => {
        // expect  the array to have the values of button1, button2, button3, and button 4. 
         expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
     });
 });

describe("newGame works correctly", () => {
    // beforeAll runs before all of the tests  
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should add one move to the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
});

describe("gameplay works correctly", () => {
    // beforeEach runs before each test is run, so  we're going to reset the state each time.
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.currentMove = [];
        addTurn();
    });
    // afterEach resets the state again after each test.
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain(game.currentGame[0] + "light");
    });
});