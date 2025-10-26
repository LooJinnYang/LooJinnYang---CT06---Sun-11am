// let x = 300;
// // let y = 200;
// // let size = bounce.length;
// let speedX = 2;
// // let speedY = 1;
// // let shapeColour = 255;

// function setup(){
//     createCanvas(600, 400);

//     textSize(24);
//     textAlign(LEFT);
// }

// function draw(){
//     background(220);

// // x += speedX;
// // y += speedY;
// // if(x - size/2 <= 0 || x + size/2 >= width){
// //     speedX *= -1;
// // }

// // if(y - size/2 <= 0 || y + size/2 >= height){
// //     speedY *= -1;
// // }

// // noStroke();
// text("Bounce!", x, height/2);
// x -=speedX

// if(x <= 0 || x>= 502){
//     speedX *= -1;
// }
// console.log(x)
// }

// function setup(){
//     createCanvas(600,400);
//     textAlign(CENTER,CENTER);
// }

// function draw(){
//     background(220);
//     let h = hour();
//     let m = minute();
//     let s = second();

//     let timeString = nf(h, 2) + " : " + nf(m, 2) + " : " + nf(s, 2)
    
//     fill(0)
//     textSize(72)
//     text(timeString, width/2, height/2)
// }

// let interval;
// countdown = 5;

// function setup(){
//     createCanvas(600,400);
//     textAlign(CENTER,CENTER);
// }

// function draw(){
//     background(220);

//     fill(0);
//     textSize(100);
//     text(countdown, width/2, height/2);

//     fill(0);
//     textSize(24);
//     text('Click to start Timer', width/2, height - 50);
// }

// function mousePressed(){
//     interval = setInterval(countdownUpdate, 1000);
// }

// function countdownUpdate(){
//     if(countdown > 0){
//         countdown -=1;
//     } else{
//         clearInterval(interval);
//     }
// }

let change;
let interval;
countdown = 5;
let bgColour = 220;


function preload(){
    sound = loadSound('assets/bossaNova.mp3')
}
function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
}

function draw(){
    background(bgColour);

    fill(0);
    textSize(100);
    text(countdown, width/2, height/2);

    fill(0);
    textSize(24);
    text('Click to start Timer', width/2, height - 50);
}

function mousePressed(){
    interval = setInterval(countdownUpdate, 1000);
}

function countdownUpdate(){
    if(countdown > 0){
        countdown -=1;
    } else{
        clearInterval(interval);
        change = setInterval(changeVar, 500);
    }
}

function changeVar(){
    bgColour = color(random(255), random(255), random(255));
    sound.play()
}

function keyPressed(){
    if(keyCode == 32){
        clearInterval(change);
        sound.stop();
    }
}