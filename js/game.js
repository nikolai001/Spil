import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import Brick from "./brick.js";
import { BuildLevel, level1 } from "./levels.js";

export default class Game {
    constructor(GameWidth,GameHeight) {
        this.GameWidth = GameWidth;
        this.GameHeight = GameHeight;
    }

    start(){
        this.ball = new Ball(this);

        this.paddle = new Paddle(this);

        let bricks = BuildLevel(this,level1);

        this.gameObjects = [this.ball, this.paddle,...bricks];

        new InputHandler(this.paddle);
    }

    update(deltaTime){
        this.gameObjects.forEach((object)=>object.update(deltaTime));
    }

    draw(ctx){
        this.gameObjects.forEach((object)=>object.draw(ctx));

    }

}