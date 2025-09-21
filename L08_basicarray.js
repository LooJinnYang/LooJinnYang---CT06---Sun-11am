let x = 300;
let y = 200;
let size = 50;
let speedX = 1;
let speedY = 1;
let shapeColour = 255;

function setup(){
    createCanvas(600, 400);
    background(220);
}

function draw(){
x += speedX;
y += speedY;

if(x <= 0 || x + size >= width){
    speedX *= -1;
    shapeColour = color(random(255), random(255),random(255));
}

if(y <= 0 || y + size/2 >= height){
    speedY *= -1;
    shapeColour = color(random(255), random(255),random(255));
}

noStroke();
fill(shapeColour)
circle(x, y, size);
}