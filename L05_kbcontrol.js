// write your codes here
function setup(){
    createCanvas(400, 400);
    background(220);
    noStroke();
}

function mousePressed(){
let S = color(random(255), random(255),random(255))
fill(shapeColour)
circle(mouseX, mouseY, 50)
}