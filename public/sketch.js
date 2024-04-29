let stageNumber = 0;
let totalNumberOfStages = 5;
let activePersonIndex = 0;

let bgImg1, bgImg2, bgImg3, potImg, bg_start, bg_end;
let bgImg1Gray, bgImg2Gray, bgImg3Gray;
let priestessImg, villagerImg, rebelImg;
let priestessImgGray, villagerImgGray, rebelImgGray; 

function preload() {
  // Preload images
  bg_start = loadImage('./asset/bg_start.png');
  bg_end = loadImage('./asset/bg_end.png');
  bgImg1 = loadImage('./asset/bg1.png');
  bgImg2 = loadImage('./asset/bg2.png');
  bgImg3 = loadImage('./asset/bg3.png');
  potImg = loadImage('./asset/pot.gif');
  bgImg1Gray = loadImage('./asset/bg1.png');
  bgImg2Gray = loadImage('./asset/bg2.png')
  bgImg3Gray = loadImage('./asset/bg3.png');

  priestessImg = loadImage('./asset/p1.png');
  villagerImg = loadImage('./asset/p2.png');
  rebelImg = loadImage('./asset/p3.png');
  priestessImgGray = loadImage('./asset/p1.png');
  villagerImgGray = loadImage('./asset/p2.png');
  rebelImgGray = loadImage('./asset/p3.png');

  sounds_piestess = [loadSound("./asset/sound_real/priestess_1.mp3"), 
                     loadSound("./asset/sound_real/priestess_1.mp3"), 
                     loadSound("./asset/sound_real/priestess_3.mp3")];
  sounds_village = [loadSound("./asset/sound_real/villager_1.mp3"), 
                    loadSound("./asset/sound_real/villager_2.mp3"), 
                    loadSound("./asset/sound_real/villager_3.mp3")];
  sounds_robinhood = [loadSound("./asset/sound_real/revolt_1.mp3"), 
                      loadSound("./asset/sound_real/revolt_2.mp3"), 
                      loadSound("./asset/sound_real/revolt_3.mp3")];
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas
  imageMode(CORNER); // Set image mode to CORNER for easier positioning

  bgImg1Gray.filter(GRAY);
  bgImg2Gray.filter(GRAY);
  bgImg3Gray.filter(GRAY);
  priestessImgGray.filter(GRAY);
  villagerImgGray.filter(GRAY);
  rebelImgGray.filter(GRAY);
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

function drawStart() {
  background(0);
  tint(255, 127);
  image(bg_start, 0, 0, width, height);

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

  // pot image
  sizeParam = 0.6;
  tint(255, 255);
  image(potImg, 0.5 * width - potImg.width * sizeParam / 2, 
                0.6 * height - potImg.height * sizeParam / 2, 
        potImg.width * sizeParam, potImg.height * sizeParam);
}

function drawStage1() {  
  background(0);
  tint(255, 127);
  if (activePersonIndex > 0) {
    image(bgImg1Gray, 0, 0, windowWidth, windowHeight);
  } else {
    image(bgImg1, 0, 0, windowWidth, windowHeight);
  }
  tint(255, 255);
  
  sizeParam1 = 0.16;
  sizeParam2 = 0.15;
  sizeParam3 = 0.18;
  if (activePersonIndex == 0) {
    pImg = priestessImg;
    vImg = villagerImg;
    rImg = rebelImg;
  } else if (activePersonIndex == 1) {
    pImg = priestessImg;
    vImg = villagerImgGray;
    rImg = rebelImgGray;
  } else if (activePersonIndex == 2) {
    pImg = priestessImgGray;
    vImg = villagerImg;
    rImg = rebelImgGray;
  } else if (activePersonIndex == 3) {
    pImg = priestessImgGray;
    vImg = villagerImgGray;
    rImg = rebelImg;
  }
  
  image(pImg, 0.73 * windowWidth, 0.35 * windowHeight, 
        pImg.width * sizeParam1, pImg.height * sizeParam1);
  image(vImg, 0.55 * windowWidth, 0.54 * windowHeight, 
        vImg.width * sizeParam2, vImg.height * sizeParam2);
  image(rImg, 0.17 * windowWidth, 0.4 * windowHeight,
        rImg.width * sizeParam3, rImg.height * sizeParam3);
}

function drawStage2() {
  background(0);
  tint(255, 127);
  if (activePersonIndex > 0) {
    image(bgImg2Gray, 0, 0, windowWidth, windowHeight);
  } else {
    image(bgImg2, 0, 0, windowWidth, windowHeight);
  }
  tint(255, 255);

  sizeParam1 = 0.18;
  sizeParam2 = 0.2;
  sizeParam3 = 0.16;

  if (activePersonIndex == 0) {
    pImg = priestessImg;
    vImg = villagerImg;
    rImg = rebelImg;
  } else if (activePersonIndex == 1) {
    pImg = priestessImg;
    vImg = villagerImgGray;
    rImg = rebelImgGray;
  } else if (activePersonIndex == 2) {
    pImg = priestessImgGray;
    vImg = villagerImg;
    rImg = rebelImgGray;
  } else if (activePersonIndex == 3) {
    pImg = priestessImgGray;
    vImg = villagerImgGray;
    rImg = rebelImg;
  }

  image(pImg, 0.1 * windowWidth, 0.24 * windowHeight, 
    pImg.width * sizeParam1, pImg.height * sizeParam1);
  image(vImg, 0.65 * windowWidth, 0.15 * windowHeight, 
    vImg.width * sizeParam2, vImg.height * sizeParam2);
  image(rImg, 0.35 * windowWidth, 0.57 * windowHeight,
    rImg.width * sizeParam3, rImg.height * sizeParam3);

  tSize = 20;
  padSize = tSize + 4;
  textSize(tSize); // Set the text size
  textAlign(CENTER, CENTER); 
  let line1 = "Would you like to continue hearing their story,";
  let line2 = "or lend your ears to another side?";

  fill(255);
  rect(0.73 * width - textWidth(line1) / 2 - padSize, 0.84 * height - padSize, 
       textWidth(line1) + padSize * 2,  padSize * 3);

  fill(0);
  text(line1, 0.73 * width, 0.84 * height);
  text(line2, 0.73 * width, 0.84 * height + padSize);
}

function drawStage3() {
  background(0);
  tint(255, 127);
  if (activePersonIndex > 0) {
    image(bgImg3Gray, 0, 0, windowWidth, windowHeight);
  } else {
    image(bgImg3, 0, 0, windowWidth, windowHeight);
  }
  tint(255, 255);

  sizeParam1 = 0.16;
  sizeParam2 = 0.2;
  sizeParam3 = 0.2;

  if (activePersonIndex == 0) {
    pImg = priestessImg;
    vImg = villagerImg;
    rImg = rebelImg;
  } else if (activePersonIndex == 1) {
    pImg = priestessImg;
    vImg = villagerImgGray;
    rImg = rebelImgGray;
  } else if (activePersonIndex == 2) {
    pImg = priestessImgGray;
    vImg = villagerImg;
    rImg = rebelImgGray;
  } else if (activePersonIndex == 3) {
    pImg = priestessImgGray;
    vImg = villagerImgGray;
    rImg = rebelImg;
  }

  image(pImg, 0.42 * windowWidth, 0.07 * windowHeight, 
    pImg.width * sizeParam1, priestessImg.height * sizeParam1);
  image(vImg, 0.65 * windowWidth, 0.15 * windowHeight, 
    vImg.width * sizeParam2, vImg.height * sizeParam2);
  image(rImg, 0.2 * windowWidth, 0.45 * windowHeight,
    rImg.width * sizeParam3, rImg.height * sizeParam3);

  tSize = 20;
  padSize = tSize + 4;
  textSize(tSize); // Set the text size
  textAlign(CENTER, CENTER); 
  let line1 = "Would you like to continue hearing their story,";
  let line2 = "or lend your ears to another side?";

  fill(255);
  rect(0.73 * width - textWidth(line1) / 2 - padSize, 0.84 * height - padSize, 
       textWidth(line1) + padSize * 2,  padSize * 3);

  fill(0);
  text(line1, 0.73 * width, 0.84 * height);
  text(line2, 0.73 * width, 0.84 * height + padSize);
}

function drawEnd() {
  background(0);
  tint(255, 127);
  image(bg_end, 0, 0, width, height);
  tint(255, 255);

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

  sizeParam = 0.6;
  image(potImg, 0.5 * width - potImg.width * sizeParam / 2, 
                0.5 * height - potImg.height * sizeParam / 2, 
        potImg.width * sizeParam, potImg.height * sizeParam);
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (stageNumber == 0 || stageNumber == 4) {
      nextStage();
    }
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
  stageNumber = (stageNumber + 1) % totalNumberOfStages;
  activePersonIndex = 0;
}

function mouseMoved() {
  // Start and End stage.
  if (stageNumber == 0 || stageNumber == 4) {
    if (isMouseOverPot(mouseX, mouseY)) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  } else {
    // when the mouse is hover over 3 person image, show hand cursor and handle clicking event.
    if (isMouseOverPerson1(mouseX, mouseY) ||
      isMouseOverPerson2(mouseX, mouseY) ||
      isMouseOverPerson3(mouseX, mouseY)) {
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
  
  // Start and End stage.
  if (stageNumber == 0 || stageNumber == 4) {
    if (isMouseOverPot(mouseX, mouseY)) {
      nextStage();
    }
  } else {
    if (isMouseOverPerson1(mouseX, mouseY)) {
      stopCurrentSound();
      playPersonStory(1, stageNumber);
      activePersonIndex = 1;
    } else if (isMouseOverPerson2(mouseX, mouseY)) {
      stopCurrentSound();
      playPersonStory(2, stageNumber);
      activePersonIndex = 2;
    } else if (isMouseOverPerson3(mouseX, mouseY)) {
      stopCurrentSound();
      playPersonStory(3, stageNumber);
      activePersonIndex = 3;
    }
  }
  console.log(`Stage: ${stageNumber}, Active Person: ${activePersonIndex}`);
}

function isMouseOverPot(mouseX, mouseY) {
  sizeParam = 0.6;

  if (stageNumber == 0) {
    if (mouseX > 0.5 * width - potImg.width * sizeParam / 2 &&
        mouseX < 0.5 * width + potImg.width * sizeParam / 2 &&
        mouseY > 0.6 * height - potImg.height * sizeParam / 2 &&
        mouseY < 0.6 * height + potImg.height * sizeParam / 2) {
      return true;
    } else {
      return false;
    }
  } else if (stageNumber == 4) {
    if (mouseX > 0.5 * width - potImg.width * sizeParam / 2 &&
        mouseX < 0.5 * width + potImg.width * sizeParam / 2 &&
        mouseY > 0.5 * height - potImg.height * sizeParam / 2 &&
        mouseY < 0.5 * height + potImg.height * sizeParam / 2) {
      return true;
    } else {
      return false;
    }
  }
}

function isMouseOverPerson(personIndex, mouseX, mouseY) {
  switch (personIndex) {
    case 1:
      return isMouseOverPerson1(mouseX, mouseY);
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

function isMouseOverPerson1(mouseX, mouseY) {
  switch (stageNumber) {
    case 1:
      sizeParam1 = 0.16;
      minX = 0.73 * windowWidth;
      minY = 0.35 * windowHeight;
      maxX = minX + priestessImg.width * sizeParam1;
      maxY = minY + priestessImg.height * sizeParam1;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
    case 2:
      sizeParam1 = 0.18;
      minX = 0.1 * windowWidth;
      minY = 0.24 * windowHeight;
      maxX = minX + priestessImg.width * sizeParam1;
      maxY = minY + priestessImg.height * sizeParam1;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      sizeParam1 = 0.16;
      minX = 0.42 * windowWidth;
      minY = 0.07 * windowHeight;
      maxX = minX + priestessImg.width * sizeParam1;
      maxY = minY + priestessImg.height * sizeParam1;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;  
  }
}

function isMouseOverPerson2(mouseX, mouseY) {
  switch (stageNumber) {
    case 1:
      sizeParam2 = 0.15;
      minX = 0.55 * windowWidth;
      minY = 0.54 * windowHeight;
      maxX = minX + villagerImg.width * sizeParam2;
      maxY = minY + villagerImg.height * sizeParam2;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
    case 2:
      sizeParam2 = 0.2;
      minX = 0.65 * windowWidth;
      minY = 0.15 * windowHeight;
      maxX = minX + villagerImg.width * sizeParam2;
      maxY = minY + villagerImg.height * sizeParam2;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      sizeParam2 = 0.2;
      minX = 0.65 * windowWidth;
      minY = 0.15 * windowHeight;
      maxX = minX + villagerImg.width * sizeParam2;
      maxY = minY + villagerImg.height * sizeParam2;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
  }
}

function isMouseOverPerson3(mouseX, mouseY) {
  switch (stageNumber) {
    case 1:
      sizeParam3 = 0.18;
      minX = 0.17 * windowWidth;
      minY = 0.4 * windowHeight;
      maxX = minX + rebelImg.width * sizeParam3;
      maxY = minY + rebelImg.height * sizeParam3;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
    case 2:
      sizeParam3 = 0.16;
      minX = 0.35 * windowWidth;
      minY = 0.57 * windowHeight;
      maxX = minX + rebelImg.width * sizeParam3;
      maxY = minY + rebelImg.height * sizeParam3;
      if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
        return true;
      } else {
        return false;
      }
      break;
    case 3:
      sizeParam3 = 0.2;
      minX = 0.2 * windowWidth;
      minY = 0.45 * windowHeight;
      maxX = minX + villagerImg.width * sizeParam3;
      maxY = minY + villagerImg.height * sizeParam3;
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