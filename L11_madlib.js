// let textColorPicker;
// let textBox;
// let display;

// function setup(){
//     createCanvas(400, 400);

//     textBox = createInput();
//     textBox.position(50, 50);
//     textBox.size(150, 30);
//     textBox.input(displayText);

//     textColorPicker = createColorPicker();
//     textColorPicker.position(50, 100);
// }

// function draw(){
//     background(220);

//     textAlign(LEFT);
//     textSize(24);
//     fill(textColorPicker.value());
//     text(display, 50, height/2);
// }

// function displayText(){
//     display = this.value();
// }

// let textBox;
// let button;
// let displayText = "Input Shown Here";

// function setup(){
//     createCanvas(400, 400);

//     textBox = createInput();
//     textBox.position(100, 50);
//     textBox.size(150, 30);

//     button = createButton('Submit');
//     button.position(textBox.x + textBox.width + 30, 50);
//     button.mousePressed(display);
//     button.size(100, 30);
// }

// function draw(){
//     background(220);

//     textAlign(CENTER, CENTER);
//     textSize(30);
//     text(displayText, width/2, height/2);
// }

// function display(){
//     displayText = textBox.value();
// }

// let textBox1;
// let textBox2;
// let textBox3;
// let textBox4;
// let textBox5;

// let arr = ["Enter a noun:","Enter a verb:","Enter an adjective:","Enter an adverb:","Enter a place:"];
// let button;
// let displayText1, displayText2, displayText3, displayText4, displayText5 ;
// let arr2 = [];

// function setup(){
//     createCanvas(600, 600);

//     textBox1 = createInput();
//     textBox1.position(width/2-textBox1.width/2, 50);
//     textBox1.size(150, 30);

//     textBox2 = createInput();
//     textBox2.position(width/2-textBox2.width/2, 100);
//     textBox2.size(150, 30);

//     textBox3 = createInput();
//     textBox3.position(width/2-textBox3.width/2, 150);
//     textBox3.size(150, 30);

//     textBox4 = createInput();
//     textBox4.position(width/2-textBox4.width/2, 200);
//     textBox4.size(150, 30);

//     textBox5 = createInput();
//     textBox5.position(width/2-textBox5.width/2, 250);
//     textBox5.size(150, 30);


//     button = createButton('Generate Story');
//     button.position(width/2 - button.width / 2, 300);
//     button.mousePressed(display)
// }

// function draw(){
//     background(220);

//     textSize(15)
//     for(let i=0; i<arr.length; i++){
//         text(arr[i], 50, 70 + i * 50);
//     }

//     for(let i = 0; i < arr2.length; i++){
//         text(arr2[i], 50, 350 + i*50);
//     }
// }

// function display(){
//     displayText1 = "Noun: " + textBox1.value();
//     arr2.push(displayText1);

//     displayText2 = "Verb: " + textBox2.value();
//     arr2.push(displayText2);

//     displayText3 = "Adjective: " + textBox3.value();
//     arr2.push(displayText3);

//     displayText4 = "Adverb: " + textBox4.value();
//     arr2.push(displayText4);

//     displayText5 = "Place: " + textBox5.value();
//     arr2.push(displayText5);
// }

let textBox1;
let textBox2;
let textBox3;
let textBox4;
let textBox5;

let arr = ["Enter a noun:","Enter a verb:","Enter an adjective:","Enter an adverb:","Enter a place:"];
let button;
let displayText1, displayText2, displayText3, displayText4, displayText5 ;
let arr2 = [];

function setup(){
    createCanvas(600, 600);

    textBox1 = createInput();
    textBox1.position(width/2-textBox1.width/2, 50);
    textBox1.size(150, 30);

    textBox2 = createInput();
    textBox2.position(width/2-textBox2.width/2, 100);
    textBox2.size(150, 30);

    textBox3 = createInput();
    textBox3.position(width/2-textBox3.width/2, 150);
    textBox3.size(150, 30);

    textBox4 = createInput();
    textBox4.position(width/2-textBox4.width/2, 200);
    textBox4.size(150, 30);

    textBox5 = createInput();
    textBox5.position(width/2-textBox5.width/2, 250);
    textBox5.size(150, 30);


    button = createButton('Generate Story');
    button.position(width/2 - button.width / 2, 300);
    button.mousePressed(display)
}

function draw(){
    background(220);

    textSize(15)
    for(let i=0; i<arr.length; i++){
        text(arr[i], 50, 70 + i * 50);
    }

    for(let i = 0; i < arr2.length; i++){
        text(arr2[i], 50, 350 + i*50);
    }
}

function display(){
    displayText1 = textBox1.value();
    arr2.push(displayText1);

    displayText2 = "Verb: " + textBox2.value();
    arr2.push(displayText2);

    displayText3 = "Adjective: " + textBox3.value();
    arr2.push(displayText3);

    displayText4 = "Adverb: " + textBox4.value();
    arr2.push(displayText4);

    displayText5 = "Place: " + textBox5.value();
    arr2.push(displayText5);
}