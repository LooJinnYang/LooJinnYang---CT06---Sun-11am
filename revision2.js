// let array = ["pizza", "something", "someone", "somewhere"];
//     function setup(){
//     createCanvas(600, 600);

//     fill('orange');
//     textSize(24);
//     textAlign(CENTER, CENTER);
//     }
// function draw(){
//     background(0);

//     for(let i = 0; i < array.length; i++){
//         text(array[i], width/2, 250 + i * 50);
//     }
// }

let x = 300;
let y = 200;
let size = 50;
let speedX = 2;
let speedY = 2;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background('lightblue');

x -= speedX;
y -= speedY;

if(x - size/2 <= 0 || x + size/2 >= width){
    speedX *= -1;
}

if(y - size/2 <= 0 || y + size/2 >= height){
    speedY *= -1;
}

noStroke();
fill('red');
circle (x,y,size);
}