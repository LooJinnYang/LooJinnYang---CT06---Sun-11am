let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

    let nounInput, verbInput, adjectiveInput, adverbInput, placeInput;
let storyButton, randomButton;
let storyOutput;



function setup() {
  createCanvas(600, 400);
  background(240);

  textSize(16);
  fill(0);
  text("Enter a noun:", 16, 40);
  nounInput = createInput();
  nounInput.position(150, 25);

  storyButton = createButton("Generate Story");
  storyButton.position(150, 230);
  storyButton.mousePressed(generateStory);

  storyOutput = "";
}

function draw() {
  background(240);

  fill(0);
  text("Enter a noun:", 16, 40);
  text("Enter a verb:", 16, 80);
  text("Enter an adjective:", 16, 120);
  text("Enter an adverb:", 16, 160);
  text("Enter a place:", 16, 200);

  textSize(16);
  fill(50, 0, 100);
  textWrap(WORD);
  text(storyOutput, 20, 280, 560);
}

function generateStory() {
  let noun = nounInput.value();
  let verb = verbInput.value();
  let adjective = adjectiveInput.value();
  let adverb = adverbInput.value();
  let place = placeInput.value();

  let randomIndex = floor(random(templates.length));
  let story = templates[randomIndex];

  story = story.replace("{noun}", noun)
               .replace("{verb}", verb)
               .replace("{adjective}", adjective)
               .replace("{adverb}", adverb)
               .replace("{place}", place);

  storyOutput = story;
}

function randomAll() {
  // Randomly pick one word from each array and set the input values
  nounInput.value(random(nouns));
  verbInput.value(random(verbs));
  adjectiveInput.value(random(adjectives));
  adverbInput.value(random(adverbs));
  placeInput.value(random(places));
}