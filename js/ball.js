export default class Ball {
    constructor() {
        this.image = document.querySelector("#imgBall");

        this.Speed = {
            x: 10, y: 10};

        this.position = {x: 10, y: 10};

        this.Size = 32;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.Size, this.Size)
    }

    update(deltaTime){
        this.position.x += this.Speed.x;
        this.position.y += this.Speed.y;
    }
}