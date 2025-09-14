let x = 200;
let y = 200;
let speed = 2;
function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);


x = c


if(keyisDown(RIGHT_ARROW)){
    x += speed;
}

if(keyisDown(LEFT_ARROW)){

    x -= speed;
}

if(keyisDown(UP_ARROW)){
    y += speed;
}

if(keyisDown(DOWN_ARROW)){
    y += speed;
}

    circle(x, y, 50)
}