/**
 * @jest-environment jsdom
 */

// We'll call game game and then require game.js
const { game } = require("../game");

// add a beforeAll function and we're going to load the index.html file  into Jests mock DOM.
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