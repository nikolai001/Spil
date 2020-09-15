export function detectCollision(ball, gameObject){

    //Paddle

    let BottomOfBall = ball.position.y + ball.Size;

    let TopOfBall = ball.position.y;

    let TopOfGameObject = gameObject.position.y;

    let BottomOfGameObject = gameObject.position.y + gameObject.height;

    let LeftSideGameObject = gameObject.position.x;
    let RightSideGameObject = gameObject.position.x + gameObject.width;

    if(BottomOfBall >= TopOfGameObject
        && TopOfBall <= BottomOfGameObject
        && ball.position.x >= LeftSideGameObject
        && ball.position.x + ball.Size <= RightSideGameObject){
        return true;
    }else{
        return false;
    }
}