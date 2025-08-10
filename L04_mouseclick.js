// write your codes here
function setup(){
    createCanvas(600, 600);
    background(220);
}

function draw(){
for (let i = 0; i < 5; i++){
    let shade = 255
    fill(0, shade, 0);
    ellipse(i * 120 + 60,i *120 + 60,120,120);
}
}