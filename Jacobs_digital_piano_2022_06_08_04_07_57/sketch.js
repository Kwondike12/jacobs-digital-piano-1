//global variables
let songs = ["play", "back", "forward"];
let img;

function preload() {
  // load image and sound
  img = loadImage("KEYSCALE.jpg");
  songs[1] = loadSound("LETTERC.m4a");
  songs[2] = loadSound("LETTERD.m4a");
  songs[3] = loadSound("LETTERE.m4a");
  songs[4] = loadSound("LETTERF.m4a");
  songs[5] = loadSound("LETTERG.m4a");
}

function setup() {
  //background colour and images
  createCanvas(700, 420);
  background(255, 0, 0);
  image(img, 0, 0);
}

function keyTyped() {
  //song load stop and start
  //background colour and image
  if (key === "a") {
    if (songs[1].isPlaying()) {
      songs[1].stop();
      background(255, 0, 0);
    } else {
      songs[1].play();
      background(255, 69, 0);
      image(img, 0, 0);
    }
  }
  if (key === "s") {
    //song load stop and start
  //background colour and image
    if (songs[2].isPlaying()) {
      songs[2].stop();
      background(255, 0, 0);
    } else {
      songs[2].play();
      background(138, 43, 226);
      image(img, 0, 0);
    }
  }

  if (key === "d") {
    //song load stop and start
  //background colour and image
    if (songs[3].isPlaying()) {
      songs[3].stop();
      background(255, 0, 0);
    } else {
      songs[3].play();
      background(255, 255, 0);
      image(img, 0, 0);
    }
  }
  if (key === "f") {
    //song load stop and start
  //background colour and image
    if (songs[4].isPlaying()) {
      songs[4].stop();
      background(255, 0, 0);
    } else {
      songs[4].play();
      background(139, 69, 19);
      image(img, 0, 0);
    }
  }
  if (key === "g") {
    //song load stop and start
  //background colour and image
    if (songs[5].isPlaying()) {
      songs[5].stop();
      background(255, 0, 0);
    } else {
      songs[5].play();
      background(0, 191, 255);
      image(img, 0, 0);
    }
  }
}
