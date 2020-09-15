export default class Ball {
    constructor(game) {
        this.image = document.querySelector("#imgBall");

        this.position = {x: 10, y: 10};
        this.Speed = {x: 5, y: 5};


        this.Size = 16;

        this.GameWidth = game.GameWidth;

        this.GameHeight = game.GameHeight;

        this.game = game;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.Size, this.Size)
    }

    update(deltaTime){
        this.position.x += this.Speed.x;
        this.position.y += this.Speed.y;

        //Wall

        if(this.position.x + this.Size > this.GameWidth || this.position.x < 0){
            this.Speed.x = -this.Speed.x
        }

        if(this.position.y + this.Size > this.GameHeight || this.position.y < 0){
            this.Speed.y = -this.Speed.y
        }

        //Paddle

        let BottomOfBall = this.position.y + this.Size;

        let TopOfPaddle = this.game.paddle.position.y;

        let LeftSidePaddle = this.game.paddle.position.x;
        let RightSidePaddle = this.game.paddle.position.x + this.game.paddle.width;

        if(BottomOfBall >= TopOfPaddle && this.position.x >= LeftSidePaddle && this.position.x + this.Size <= RightSidePaddle){
            this.Speed.y = -this.Speed.y;
            this.position.y= this.game.paddle.position.y - this.Size;
        }
    }
}