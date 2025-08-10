// write your codes here
function setup(){
    createCanvas(400, 400);
    background(220);
}

// function draw(){
// for (let i = 0; i < 5; i++){
//     let shade = i * 50 + 50
//     fill(0, shade, 0);
//     ellipse(i * 50 + 50 , i *50 + 50 , 50 , 50);
// }
// }

function draw(){
    fill(shapeColour);
    ellipse(width / 2, 200, 80, 80);
}

function mousePressed(){
let shapeColour = 'red';
}

function mouseReleased(){
let shapeColour = 'blue';
}