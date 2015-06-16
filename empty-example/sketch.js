var w = window.innerWidth;
var h = window.innerHeight;

var song, analyzer;

function preload() {
  song = loadSound('sound/waste.mp3');
}

function setup() {

  frameRate(10);
 
createCanvas(w, h);

  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(51);

  // Get the overall volume (between 0 and 1.0)
  var vol = analyzer.getLevel();
  fill(127);
  stroke(255);

  // Draw an ellipse with size based on volume
  smooth();
  fill(255,255,255,60);

  
  noStroke();
  ellipse(mouseX, mouseY, 10+vol*400, 10+vol*400);


var y = 700;
var spacing = 10;
var len =20;
var padding= 50;

stroke(255);
noFill();

for (i=50; i<window.innerWidth-padding; i+=spacing){
  line(i,y,i,10+vol*1000)
}


if (mouseIsPressed){
  fill(79,247,99)
    stroke(127,68,97);
  ellipse(pmouseX, pmouseY, 10+vol*400, 10+vol*400);
}
  




}
