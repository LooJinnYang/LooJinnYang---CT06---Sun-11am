let x = 200
let y = 200

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);

if(keyisDown(RIGHT_ARROW)){
    x += 2;
}

if(keyisDown(LEFT_ARROW)){

    x -= 2;
}

if(keyisDown(UP_ARROW)){
    x += 2;
}

if(keyisDown(_ARROW)){
    x += 2;
}

    circle(x, y, 50)
}