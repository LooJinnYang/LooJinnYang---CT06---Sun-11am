let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let attempts = 0;
let randWord

function setup() {
  createCanvas(600, 400);
  background(240);

}

function draw() {

    textAlign(CENTER, CENTER)
    textSize(24)
    text("Guess the Word!", width/2, 50)
    text("Attempts: " + attempts)
    text("Hint: " + randWord)
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