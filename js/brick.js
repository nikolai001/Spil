export default class Brick {
    constructor(game,position) {
        this.image = document.querySelector("#imgBrick");

        this.width = 80;

        this.height = 24;

        this.position = position;

        this.game = game;
    }

    update(){

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