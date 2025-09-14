let x = 200;
let y = 200;
let speed = 2;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);


    x = constrain(x, 25, width - 25);
    y = constrain(y, 25, height - 25);

    if(keyisDown(RIGHT_ARROW)){
       x += 2;
    }

    if(keyisDown(LEFT_ARROW)){

       x -= 2;
    }

    if(keyisDown(UP_ARROW)){
        y += 2;
    }

    if(keyisDown(DOWN_ARROW)){
        y -= 2;
    }

    circle(x, y, 50);
}