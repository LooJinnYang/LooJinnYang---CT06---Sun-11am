// write your codes here

let shapeColour =  'blue'
function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
}

function mousePressed(){
let shapeColour = color(random(255), random(255),random(255));
circleSize = 5;
}

function mouseDragged(){
fill(shapeColour);
ellipse(mouseX, mouseY, circleSize, circleSize);
circleSize += 0.5;
}