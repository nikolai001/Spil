import Paddle from "./paddle.js";

import InputHandler from "./input.js";

import Ball from "./ball.js";

let canvas = document.querySelector("#GameScreen");
let ctx = canvas.getContext("2d");

const GameWidth = 800;

const GameHeight = 600;

let paddle = new Paddle(GameWidth,GameHeight);

let ball = new Ball();

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

function GameLoop(timestamp) {
    let deltaTime = timestamp -lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,GameWidth, GameHeight);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);

    requestAnimationFrame(GameLoop);

}

requestAnimationFrame(GameLoop);

