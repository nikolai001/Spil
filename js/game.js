import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import Brick from "./brick.js";
import { BuildLevel, level1 } from "./levels.js";

const GameState = {
    PAUSED:0,
    RUNNING:1,
    MENU:2,
    GAMEOVER:3
};

export default class Game {
    constructor(GameWidth,GameHeight) {
        this.GameWidth = GameWidth;
        this.GameHeight = GameHeight;

        this.GameState = GameState.MENU;

        this.gameObjects = [];

        this.lives = 2;

        this.bricks = [];

        this.ball = new Ball(this);

        this.paddle = new Paddle(this);

        new InputHandler(this.paddle, this);
    }

    start(){

        if (this.GameState !== GameState.MENU)return;

        this.bricks = BuildLevel(this,level1);

        this.gameObjects = [this.ball, this.paddle];

        this.GameState = GameState.RUNNING;

    }

    update(deltaTime){

        if(this.lives === 0) this.GameState = GameState.GAMEOVER;

        if (this.GameState === GameState.PAUSED || this.GameState === GameState.MENU || this.GameState === GameState.GAMEOVER)return;

        if(this.bricks.length === 0){

        }

        [...this.gameObjects,...this.bricks].forEach((object)=>object.update(deltaTime));

        this.bricks = this.bricks.filter(brick=>!brick.MarkedForDeletion);
    }

    draw(ctx){
        [...this.gameObjects,...this.bricks].forEach((object)=>object.draw(ctx));

        if (this.GameState === GameState.PAUSED){
            ctx.rect(0,0,this.GameWidth,this.GameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused",this.GameWidth / 2,this.GameHeight / 2);
        }

        if (this.GameState === GameState.MENU){
            ctx.rect(0,0,this.GameWidth,this.GameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Click SPACEBAR to start",this.GameWidth / 2,this.GameHeight / 2);
        }

        if (this.GameState === GameState.GAMEOVER){
            ctx.rect(0,0,this.GameWidth,this.GameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Sry loser better luck l8r",this.GameWidth / 2,this.GameHeight / 2);
        }

    }

    togglePause(){
        if(this.GameState == GameState.PAUSED){
            this.GameState = GameState.RUNNING;
        }else{
            this.GameState = GameState.PAUSED;
        }
    }

}