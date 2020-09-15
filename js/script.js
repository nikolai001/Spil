import Game from "./game.js";

let canvas = document.querySelector("#GameScreen");
let ctx = canvas.getContext("2d");

const GameWidth = 800;

const GameHeight = 600;

let game = new Game(GameWidth,GameHeight);

game.start();

let lastTime = 0;

function GameLoop(timestamp) {
    let deltaTime = timestamp -lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,GameWidth, GameHeight);

    game.update(deltaTime);

    game.draw(ctx);

    requestAnimationFrame(GameLoop);

}

requestAnimationFrame(GameLoop);

