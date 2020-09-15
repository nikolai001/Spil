import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./input";

export default class Game {
    constructor(GameWidth,GameHeight) {
        this.GameWidth = GameWidth;
        this.GameHeight = GameHeight;
    }

    start(){
        let paddle = new Paddle(this);

        let ball = new Ball(this);

        new InputHandler(paddle);
    }

}