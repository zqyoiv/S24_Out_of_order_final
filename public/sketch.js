let bgImg;       // Variable for the background image
let priestessImg;  // Variable for the top left image
let villagerImg; // Variable for the top right image
let rebelImg; // Variable for the bottom center image

let stageNumber = 0;
let totalNumberOfStages = 5;

function preload() {
  // Preload images
  bgImg1 = loadImage('./asset/bg1.jpeg');
  bgImg2 = loadImage('./asset/bg2.jpeg');
  bgImg3 = loadImage('./asset/bg3.jpeg');
  priestessImg = loadImage('./asset/p1.png');
  villagerImg = loadImage('./asset/p2.png');
  rebelImg = loadImage('./asset/p3.png');
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
  createCanvas(windowWidth, windowHeight); // Create a canvas
  imageMode(CORNER); // Set image mode to CORNER for easier positioning
}

function draw() {
  if (stageNumber == 0) {
    drawStart();
  } else if (stageNumber == 1) {
    drawStage1();
  } else if (stageNumber == 2) {
    drawStage2();
  } else if (stageNumber == 3) {
    drawStage3();
  } else if (stageNumber == 4) {
    drawEnd();
  }
}



function isMouseOverIntro() {

}

function drawStart() {
  background(bgImg1);
  textSize(26); // Set the text size
  textAlign(CENTER, CENTER); 
  let line1 = "Three voices simmer from a pot.";
  let line2 = "What’s true? What’s false?";
  let line3 = "Is there even such a thing as truth?";
  let line4 = "Or are they all just stories?";
  let line5 = "Tap the pot to explore.";

  fill(255);
  rect(width / 2 - textWidth(line3) / 2 - 32, height / 4 - 32, 
       textWidth(line3) + 64,  32 * 6);

  fill(0);
  text(line1, width / 2, height / 4);
  text(line2, width / 2, height / 4 + 32);
  text(line3, width / 2, height / 4 + 64);
  text(line4, width / 2, height / 4 + 96);
  text(line5, width / 2, height / 4 + 128);
}

function drawStage1() {
  background(bgImg1);
  sizeParam1 = 0.16;
  sizeParam2 = 0.15;
  sizeParam3 = 0.18;
  image(priestessImg, 0.73 * windowWidth, 0.35 * windowHeight, 
        priestessImg.width * sizeParam1, priestessImg.height * sizeParam1);
  image(villagerImg, 0.55 * windowWidth, 0.54 * windowHeight, 
        villagerImg.width * sizeParam2, villagerImg.height * sizeParam2);
  image(rebelImg, 0.17 * windowWidth, 0.4 * windowHeight,
       rebelImg.width * sizeParam3, rebelImg.height * sizeParam3);
}

function drawStage2() {
  background(bgImg2);
  sizeParam1 = 0.18;
  sizeParam2 = 0.2;
  sizeParam3 = 0.16;
  image(priestessImg, 0.1 * windowWidth, 0.24 * windowHeight, 
    priestessImg.width * sizeParam1, priestessImg.height * sizeParam1);
  image(villagerImg, 0.65 * windowWidth, 0.15 * windowHeight, 
    villagerImg.width * sizeParam2, villagerImg.height * sizeParam2);
  image(rebelImg, 0.35 * windowWidth, 0.57 * windowHeight,
    rebelImg.width * sizeParam3, rebelImg.height * sizeParam3);
}

function drawStage3() {
  background(bgImg3);
  sizeParam1 = 0.16;
  sizeParam2 = 0.2;
  sizeParam3 = 0.2;
  image(priestessImg, 0.42 * windowWidth, 0.07 * windowHeight, 
    priestessImg.width * sizeParam1, priestessImg.height * sizeParam1);
  image(villagerImg, 0.65 * windowWidth, 0.15 * windowHeight, 
    villagerImg.width * sizeParam2, villagerImg.height * sizeParam2);
  image(rebelImg, 0.2 * windowWidth, 0.45 * windowHeight,
    rebelImg.width * sizeParam3, rebelImg.height * sizeParam3);
}

function drawEnd() {
  background(bgImg3);
  textSize(26); // Set the text size
  textAlign(CENTER, CENTER); 
  let line1 = "What do you think?";
  let line2 = "Want to explore the stories again?";
  let line3 = "Tap the pot to return to the voices.";

  fill(255);
  rect(width / 2 - textWidth(line2) / 2 - 32, height / 4 - 32, 
       textWidth(line2) + 64,  32 * 4);

  fill(0);
  text(line1, width / 2, height / 4);
  text(line2, width / 2, height / 4 + 32);
  text(line3, width / 2, height / 4 + 64);
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
  stageNumber = (stageNumber+1) % totalNumberOfStages;
}

function mouseMoved() {
  if (stageNumber == 0) {
    if (isMouseOverIntro(mouseX, mouseY)) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  } else {
    // when the mouse is hover over 3 person image, show hand cursor and handle clicking event.
    if (isMouseOverPerson(1, mouseX, mouseY) ||
      isMouseOverPerson(2, mouseX, mouseY) ||
      isMouseOverPerson(3, mouseX, mouseY)) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}

function mousePressed() {
  let xPercent = (mouseX / windowWidth) * 100;  
  let yPercent = (mouseY / windowHeight) * 100; 
  console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
  
  if (isMouseOverPerson(1, mouseX, mouseY)) {
    stopCurrentSound();
    playPersonStory(1, stageNumber);
  } else if (isMouseOverPerson(2, mouseX, mouseY)) {
    stopCurrentSound();
    playPersonStory(2, stageNumber);
  } else if (isMouseOverPerson(3, mouseX, mouseY)) {
    stopCurrentSound();
    playPersonStory(3, stageNumber);
  }
}

function isMouseOverPerson(personIndex, mouseX, mouseY) {
  switch (personIndex) {
    case 1:
      if (mouseX > 0 && mouseX < priestessImg.width * 0.5 &&
        mouseY > 0 && mouseY < priestessImg.height * 0.5) {
        return true;
      } else {
        return false;
      }
      break;
    case 2:
      if (mouseX > width - villagerImg.width && mouseX < width - villagerImg.width * 0.5 &&
        mouseY > 0 && mouseY < villagerImg.height * 0.5) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      minX = (width - rebelImg.width) / 2;
      minY = height - rebelImg.height;
      maxX = minX + rebelImg.width * 0.5;
      maxY = minY + rebelImg.height * 0.5;
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
        case 1:
          sounds_piestess[0].play();
          sounds_piestess[0].onended(nextStage);
          break;
        case 2:
          sounds_piestess[1].play();
          sounds_piestess[1].onended(nextStage);
          break;
        case 3:
          sounds_piestess[2].play();
          sounds_piestess[2].onended(nextStage);
          break;
      }
      break;
    case 2: // village
      switch (currentStage) {
        case 1:
          sounds_village[0].play();
          sounds_village[0].onended(nextStage);
          break;
        case 2:
          sounds_village[1].play();
          sounds_village[1].onended(nextStage);
          break;
        case 3:
          sounds_village[2].play();
          sounds_village[2].onended(nextStage);
          break;
      }
      break;
    case 3: // robinhood
      switch (currentStage) {
        case 1:
          sounds_robinhood[0].play();
          sounds_robinhood[0].onended(nextStage);
          break;
        case 2:
          sounds_robinhood[1].play();
          sounds_robinhood[1].onended(nextStage);
          break;
        case 3:
          sounds_robinhood[2].play();
          sounds_robinhood[2].onended(nextStage);
          break;
      }
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size when window is resized
}