let bgImg;       // Variable for the background image
let topLeftImg;  // Variable for the top left image
let topRightImg; // Variable for the top right image
let bottomCenterImg; // Variable for the bottom center image

let stageNumber = 0;

function preload() {
  // Preload images
  bgImg1 = loadImage('./asset/bg1.jpeg');
  bgImg2 = loadImage('./asset/bg2.jpeg');
  bgImg3 = loadImage('./asset/bg3.jpeg');
  topLeftImg = loadImage('./asset/p1.jpg');
  topRightImg = loadImage('./asset/p2.jpg');
  bottomCenterImg = loadImage('./asset/p3.jpg');
  sounds_piestess = [loadSound("./asset/sound_real/priestess_1.mp3"), 
                     loadSound("./asset/sound_real/priestess_1.mp3"), 
                     loadSound("./asset/sound_real/priestess_3.mp3")];
  sounds_village = [loadSound("./asset/sound_real/villager_1.mp3"), 
                    loadSound("./asset/sound_real/villager_2.mp3"), 
                    loadSound("./asset/sound_real/villager_3.mp3")];
  sounds_robinhood = [loadSound("./asset/sound_real/revolt_1.mp3"), 
                      // loadSound("./asset/sound_real/revolt_2.mp3"), 
                      loadSound("./asset/sound_real/revolt_3.mp3")];
}

function setup() {
  createCanvas(800, 600); // Create a canvas
  imageMode(CORNER); // Set image mode to CORNER for easier positioning
}

function draw() {
  if (stageNumber == 0) {
    stageDraw(bgImg1);
  } else if (stageNumber == 1) {
    stageDraw(bgImg2);
  } else if (stageNumber == 2) {
    stageDraw(bgImg3);
  }
}

function stageDraw(bgimg) {
  background(bgimg); // Display the background image

  // Display the top left image at position (0, 0)
  image(topLeftImg, 0, 0, topLeftImg.width * 0.5, topLeftImg.height * 0.5);

  // Display the top right image at the top right corner
  // Adjusted by the width of the topRightImg to align it properly
  image(topRightImg, width - topRightImg.width, 0, topRightImg.width * 0.5, topRightImg.height * 0.5);

  // Display the bottom center image at the bottom center of the canvas
  // Adjust the X position by half of the image's width for proper centering
  image(bottomCenterImg, (width - bottomCenterImg.width) / 2, height - bottomCenterImg.height,
       bottomCenterImg.width * 0.5, bottomCenterImg.height * 0.5);
}


function keyPressed() {
  if (keyCode === ENTER) {
    nextStage();
    stopCurrentSound();
  }
}

function stopCurrentSound() {
  sounds_piestess.forEach(function(sound) {
    if (sound.isPlaying()) {
      sound.stop();
    }
  });
  sounds_village.forEach(function(sound) {
    if (sound.isPlaying()) {
      sound.stop();
    }
  });
  sounds_robinhood.forEach(function(sound) {
    if (sound.isPlaying()) {
      sound.stop();
    }
  });
}

function nextStage() {
  stageNumber = (stageNumber+1) % 3;
}

function mouseMoved() {
  // when the mouse is hover over 3 person image, show hand cursor and handle clicking event.
  if (isMouseOverPerson(1, mouseX, mouseY) ||
    isMouseOverPerson(2, mouseX, mouseY) ||
    isMouseOverPerson(3, mouseX, mouseY)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  if (isMouseOverPerson(1, mouseX, mouseY)) {
    playPersonStory(1, stageNumber);
  } else if (isMouseOverPerson(2, mouseX, mouseY)) {
    playPersonStory(2, stageNumber);
  } else if (isMouseOverPerson(3, mouseX, mouseY)) {
    playPersonStory(3, stageNumber);
  }
}

function isMouseOverPerson(personIndex, mouseX, mouseY) {
  switch (personIndex) {
    case 1:
      if (mouseX > 0 && mouseX < topLeftImg.width * 0.5 &&
        mouseY > 0 && mouseY < topLeftImg.height * 0.5) {
        return true;
      } else {
        return false;
      }
      break;
    case 2:
      if (mouseX > width - topRightImg.width && mouseX < width - topRightImg.width * 0.5 &&
        mouseY > 0 && mouseY < topRightImg.height * 0.5) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      minX = (width - bottomCenterImg.width) / 2;
      minY = height - bottomCenterImg.height;
      maxX = minX + bottomCenterImg.width * 0.5;
      maxY = minY + bottomCenterImg.height * 0.5;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
  }
}

function playPersonStory(personIndex, currentStage) {
  switch (personIndex) {
    case 1: // piestess
      switch (currentStage) {
        case 0:
          sounds_piestess[0].play();
          sounds_piestess[0].onended(nextStage);
          break;
        case 1:
          sounds_piestess[1].play();
          sounds_piestess[1].onended(nextStage);
          break;
        case 2:
          sounds_piestess[2].play();
          sounds_piestess[2].onended(nextStage);
          break;
      }
      break;
    case 2: // village
      switch (currentStage) {
        case 0:
          sounds_village[0].play();
          sounds_village[0].onended(nextStage);
          break;
        case 1:
          sounds_village[1].play();
          sounds_village[1].onended(nextStage);
          break;
        case 2:
          sounds_village[2].play();
          sounds_village[2].onended(nextStage);
          break;
      }
      break;
    case 3: // robinhood
      switch (currentStage) {
        case 0:
          sounds_robinhood[0].play();
          sounds_robinhood[0].onended(nextStage);
          break;
        case 1:
          sounds_robinhood[1].play();
          sounds_robinhood[1].onended(nextStage);
          break;
        case 2:
          sounds_robinhood[2].play();
          sounds_robinhood[2].onended(nextStage);
          break;
      }
      break;
  }
}