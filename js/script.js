import Paddle from "./paddle.js";

import InputHandler from "./input.js";

let canvas = document.querySelector("#GameScreen");
let ctx = canvas.getContext("2d");

const GameWidth = 800;

const GameHeight = 600;

let paddle = new Paddle(GameWidth,GameHeight);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;



function GameLoop(timestamp) {
    let deltaTime = timestamp -lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    requestAnimationFrame(GameLoop);

}

GameLoop();

