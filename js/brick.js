import { detectCollision } from "./collisionDetection.js"

export default class Brick {
    constructor(game,position) {
        this.image = document.querySelector("#imgBrick");

        this.width = 80;

        this.height = 24;

        this.position = position;

        this.game = game;

        this.MarkedForDeletion = false;
    }

    update(){
        if (detectCollision(this.game.ball,this)){
            this.game.ball.Speed.y = -this.game.ball.Speed.y;
            this.MarkedForDeletion = true;
        }
    }

    draw(ctx){

        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }
}