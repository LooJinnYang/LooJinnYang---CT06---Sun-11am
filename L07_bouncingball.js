// let x = 200;
// let y = 200;
// let speed = 2;

// function setup(){
//     createCanvas(400, 400);
// }

// function draw(){
//     background(220);


//     x = constrain(x, 25, width - 25);
//     y = constrain(y, 25, height - 25);

//     if(keyIsDown(RIGHT_ARROW)){
//        x += 2;
//     }

//     if(keyIsDown(LEFT_ARROW)){
//        x -= 2;
//     }

//     if(keyIsDown(UP_ARROW)){
//         y -= 2;
//     }

//     if(keyIasDown(DOWN_ARROW)){
//         y += 2;
//     }

//     circle(x, y, 50);
// }

// let staticImage;
// let soundEffect;
// let x = 200;
// let y = 200;
// let speed = 2;
// let imgwidth = 80;
// let imgheight = 80;

// function preload(){
//     staticImage = loadImage('assets/pico-a.png');
//     soundEffect = loadSound('assets/pop.mp3');
// }

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
//     background('lightblue');

//     x = constrain(x, 0, width - imgwidth);
//     y = constrain(y, 0, height - imgheight);

//     if(keyIsDown(RIGHT_ARROW)){
//        x += speed;
//     }

//     if(keyIsDown(LEFT_ARROW)){
//        x -= speed;
//     }

//     if(keyIsDown(UP_ARROW)){
//         y -= speed;
//     }

//     if(keyIsDown(DOWN_ARROW)){
//         y += speed;
//     }
//     image(staticImage, x, y, imgwidth, imgheight);
// }

// function keyPressed(){
//     if(keyCode == 32){
//         imgwidth = 40;
//         soundEffect.play();
//     }
// }

// function keyReleased(){
//     imgwidth = 80;
//     soundEffect.pause();
// }

x += speedX;
y += speedY;
function keyPressed(){
    if(keyCode === UP_ARROW){
        speedX *= 1.2
        speedY *= 1.2
    }
    if(keyCode === DOWN_ARROW){
        speedX *= 1.2
        speedY *= 1.2
    }
}
if(x - size/2 <= 0 || x + size/2 >= width){
    speedX *= -1;
    shapeColour = color(random(255), random(255),random(255));
}

if(y - size/2 <= 0 || y + size/2 >= height){
    speedY *= -1;
    shapeColour = color(random(255), random(255),random(255));
}

noStroke();
fill(shapeColour)
circle(x, y, size);
}