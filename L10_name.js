// let interval;
// let bgColour = 220;

// function setup(){
//     createCanvas(400,400);
//     textAlign(CENTER,CENTER);

//     interval = setInterval(countdown, 1000);
// }

// function draw(){
//     background(bgColour);

//     s = 59 - second();
//     textSize(100);
//     text(s, width/2, height/2);
// }

// function countdown(){
//     bgColour = color(random(255), random(255), random(255))
// }

let colorPicker;
let colorTextPicker;
let inputText;
let userText = "Enter your name";
let textAge;
let userAge = "Enter your age";

function setup(){
    createCanvas(600, 400);

    colorPicker = createColorPicker('orange');
    colorPicker.position(width/2 - 50, height - 60);

    colorTextPicker = createColorPicker('black');
    colorTextPicker.position(width/2 - 50, height - 30);

    inputText = createInput();
    inputText.position(width/2-50, height - 120);
    inputText.input(updateText);

    inputAge = createInput();
    inputAge.position(width/2-50, height - 90);
    inputAge.input(textAgeUp);
}

function draw(){
    background(colorPicker.value());

    fill(0)
    textAlign(LEFT, BOTTOM);
    text("Pick a color background: ", 50, colorPicker.y+20);
    text("Pick a text color: ", 50, colorTextPicker.y+20);

    fill(255)
    rect(50, 100, 500, 160, 50);

    fill(0)
    text("Enter your name: ", 50, inputText.y + 15);
    text("Enter your age: ", 50, inputAge.y + 15);

    textAlign(CENTER, CENTER);
    fill(colorTextPicker.value());
    text(userText, width/2, height/2 - 30);
    text(userAge, width/2, height/2);
}

function updateText(){
    userText = this.value();
}

function textAgeUp(){
    userAge = this.value();
}