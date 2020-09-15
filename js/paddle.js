export default class Paddle {

    constructor(GameWidth, GameHeight) {

        this.GameWidth = GameWidth;

        this.width = 150;
        this.height = 30;

        this.MaxSpeed = 7;

        this.Speed = 0;

        this.position = {
            x: GameWidth / 2 - this.width / 2,
            y:GameHeight - this.height - 10
        };
    }

    moveLeft(){
        this.Speed = -this.MaxSpeed;
    }

    moveRight(){
        this.Speed = this.MaxSpeed;
    }

    stop(){
        this.Speed = 0;
    }

    draw(ctx){
        ctx.fillStyle = "#000040";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        if (!deltaTime) return;

        this.position.x += this.Speed;

        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.GameWidth ) this.position.x = this.GameWidth - this.width;
    }

}