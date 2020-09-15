export default class Paddle {

    constructor(GameWidth, GameHeight) {
        this.width = 150;
        this.height = 30;

        this.position = {
            x: GameWidth / 2 - this.width / 2,
            y:GameHeight - this.height - 10
        };
    }

    draw(ctx){
        ctx.fillStyle = "#000040";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        if (!deltaTime) return;
        this.position.x += 5/deltaTime;
    }

}