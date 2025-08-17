// write your codes here

// let shapeColour =  'blue'
// let circleSize = 5;

// function setup(){
//     createCanvas(400, 400);
//     background(220);
//     noStroke();
// }

// function mousePressed(){
// shapeColour = color(random(255), random(255),random(255));
// circleSize = 5;
// }

// function mouseDragged(){
// fill(shapeColour);
// ellipse(mouseX, mouseY, circleSize, circleSize);
// circleSize += 0.5;
// }

// let rectSize =50;

// function setup(){
//     createCanvas(400,400);
// }

// function draw(){
//     background(220);

//     let centerX = width/2;
//     let centerY = height/2;


//     let topLeftX = centerX -rectSize/2
//     let topLeftY = centerY -rectSize/2



//     rect(topLeftX , topLeftY , rectSize, rectSize)
// }

function setup(){
     createCanvas(400, 400);
     background(220);
     noStroke();
}

function keyPressed(){
    let count = floor(random(5, 21));
    for(let i=0; i<count; i++){
    let size = random(10, 80);
    let x = random(size/2, width)
    fill(random(255), random(255), random(255))
    ellipse(x, y, size, size)
    }
}

function keyReleased(){
    background(220);
}