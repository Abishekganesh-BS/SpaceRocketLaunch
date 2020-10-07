$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
       
    }, 1);
    
 
});





var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var element = document.getElementById('text');
    if (isMobile) {

      function playbutton() {
  var element = document.getElementById("maingame");
  element.classList.add("maingame");
   var element = document.getElementById("backbutton");
  element.classList.add("backbutton");
  var element = document.getElementById("hero");
  element.classList.add("hero");
  var element = document.getElementById("movefront");
  element.classList.add("movefront");
  var element = document.getElementById("moveback");
  element.classList.add("moveback");
  var element = document.getElementById("moveright");
  element.classList.add("moveright");
  var element = document.getElementById("moveleft");
  element.classList.add("moveleft");
 var element = document.getElementById("laser0");
  element.classList.add("laser");var element = document.getElementById("laser1");
  element.classList.add("laser");
  var element = document.getElementById("laser2");
  element.classList.add("laser");
  var element = document.getElementById(enemy.element);
    element.style.visibility = 'visible';
 



   

}

function backbutton(){

    var element = document.getElementById("maingame");
  element.classList.remove("maingame");
   var element = document.getElementById("backbutton");
  element.classList.remove("backbutton");var element = document.getElementById("hero");
  element.classList.remove("hero");
   var element = document.getElementById("movefront");
  element.classList.remove("movefront");
  var element = document.getElementById("moveback");
  element.classList.remove("moveback");
  var element = document.getElementById("moveright");
  element.classList.remove("moveright");
  var element = document.getElementById("moveleft");
  element.classList.remove("moveleft");
  var element = document.getElementById("laser0");
  element.classList.remove("laser");
  var element = document.getElementById("laser1");
  element.classList.remove("laser");
  var element = document.getElementById("laser2");
  element.classList.remove("laser");
  var element = document.getElementById(enemy.element);
    element.style.visibility = 'hidden';
  

  
}
        
    } 


    else {
      function playbutton() {
  var element = document.getElementById("maingame");
  element.classList.add("maingame");
   var element = document.getElementById("backbutton");
  element.classList.add("backbutton");
  var element = document.getElementById("hero");
  element.classList.add("hero");
  var element = document.getElementById("movefront");
  element.classList.add("movefront1");
  var element = document.getElementById("moveback");
  element.classList.add("moveback1");
  var element = document.getElementById("moveright");
  element.classList.add("moveright1");
  var element = document.getElementById("moveleft");
  element.classList.add("moveleft1");
  var element = document.getElementById("laser0");
  element.classList.add("laser");
  var element = document.getElementById("laser1");
  element.classList.add("laser");
  var element = document.getElementById("laser2");
  element.classList.add("laser");
  var element = document.getElementById(enemy.element);
    element.style.visibility = 'visible';
  



}

function backbutton(){

    var element = document.getElementById("maingame");
  element.classList.remove("maingame");
   var element = document.getElementById("backbutton");
  element.classList.remove("backbutton");var element = document.getElementById("hero");
  element.classList.remove("hero");
  var element = document.getElementById("movefront");
  element.classList.remove("movefront1");
  var element = document.getElementById("moveback");
  element.classList.remove("moveback1");
  var element = document.getElementById("moveright");
  element.classList.remove("moveright1");
  var element = document.getElementById("moveleft");
  element.classList.remove("moveleft1");
  var element = document.getElementById("laser0");
  element.classList.remove("laser");
  var element = document.getElementById("laser1");
  element.classList.remove("laser");
  var element = document.getElementById("laser2");
  element.classList.remove("laser");
  var element = document.getElementById(enemy.element);
    element.style.visibility = 'hidden';
   
}

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var SPACE_KEY = 32;
var HERO_MOVEMENT = 15;

var lastLoopRun = 0;
var score = 0;
var iterations = 0;

var controller = new Object();
var enemies = new Array();

function createSprite(element, x, y, w, h) {
  var result = new Object();
  result.element = element;
  result.x = x;
  result.y = y;
  result.w = w;
  result.h = h;
  return result;
}

function movef(){
   hero.y -= HERO_MOVEMENT;
}
function moveb(){
   hero.y += HERO_MOVEMENT;
}
function mover(){
   hero.x += HERO_MOVEMENT;

}
function movel(){
  hero.x -= HERO_MOVEMENT;

}

function toggleKey(keyCode, isPressed) {
  if (keyCode == LEFT_KEY) {
    controller.left = isPressed;
  }
  if (keyCode == RIGHT_KEY) {
    controller.right = isPressed;
  }
  if (keyCode == UP_KEY) {
    controller.up = isPressed;
  }
  if (keyCode == DOWN_KEY) {
    controller.down = isPressed;
  }
  if (keyCode == SPACE_KEY) {
    controller.space = isPressed;
  }  
}

function intersects(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function ensureBounds(sprite, ignoreY) {
  if (sprite.x < 0) {
    sprite.x = 0;
  }
  if (!ignoreY && sprite.y < 0) {
    sprite.y = 0;
  }
  if (sprite.x + sprite.w > 1375) {
    sprite.x = 1375 - sprite.w;
  }
  if (!ignoreY && sprite.y + sprite.h > 700) {
    sprite.y = 700 - sprite.h;
  }
}

function setPosition(sprite) {
  var e = document.getElementById(sprite.element);
  e.style.left = sprite.x + 'px';
  e.style.top = sprite.y + 'px';
}



function handleControls() {
  if (controller.up) {
    hero.y -= HERO_MOVEMENT;
  }
  if (controller.down) {
    hero.y += HERO_MOVEMENT;
  }
  if (controller.left) {
    hero.x -= HERO_MOVEMENT;
  }
  if (controller.right) {
    hero.x += HERO_MOVEMENT;
  }
  if (controller.space) {
    var laser = getFireableLaser();
    if (laser) {
      laser.x = hero.x + 73;
      laser.y = hero.y - laser.h;
    }
  }
  ensureBounds(hero);
}

function getFireableLaser() {
  var result = null;
  for (var i = 0; i < lasers.length; i++) {
    if (lasers[i].y <= -100) {
      result = lasers[i];
    }
  }
  return result;
}

function getIntersectingLaser(enemy) {
  var result = null;
  for (var i = 0; i < lasers.length; i++) {
    if (intersects(lasers[i], enemy)) {
      result = lasers[i];
      break;
    }
  }
  return result;
}

function checkCollisions() {
  for (var i = 0; i < enemies.length; i++) {
    var laser = getIntersectingLaser(enemies[i]);
    if (laser) {
      var element = document.getElementById(enemies[i].element);
      element.style.visibility = 'hidden';
      element.parentNode.removeChild(element);
      enemies.splice(i, 1);
      i--;
      laser.y = -laser.h;
      score += 100;
    } else if (intersects(hero, enemies[i])) {
      gameOver();
    } else if (enemies[i].y + enemies[i].h >= 650) {
      var element = document.getElementById(enemies[i].element);
      element.style.visibility = 'hidden';
      element.parentNode.removeChild(element);
      enemies.splice(i, 1);
      i--;
    }
  }
}

function gameOver() {
  var element = document.getElementById(hero.element);
  element.style.visibility = 'hidden';
  var element = document.getElementById('gameover');
  element.style.visibility = 'visible';
  var element = document.getElementById(enemy.element);
  element.style.visibility = 'hidden';
}

function showSprites() {
  setPosition(hero);
  for (var i = 0; i < lasers.length; i++) {
    setPosition(lasers[i]);
  }
  for (var i = 0; i < enemies.length; i++) {
    setPosition(enemies[i]);
  }
  var scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'Score: ' + score;
}

function updatePositions() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].y += 4;
    enemies[i].x += getRandom(7) - 3;
    ensureBounds(enemies[i], true);
  }
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].y -= 25;
  }
}

function addenemy() {
  var interval = 50;
  if (iterations > 1500) {
    interval = 5;
  } else if (iterations > 1000) {
    interval = 20;
  } else if (iterations > 500) {
    interval = 35;
  }
  
  if (getRandom(interval) == 0) {
    var elementName = 'enemy' + getRandom(10000000);
    var enemy = createSprite(elementName, getRandom(1300), -40, 50, 50);
   

    var element = document.createElement('div');
    element.id = enemy.element;
    element.className = 'enemy'; 
    document.children[0].appendChild(element);

    
    enemies[enemies.length] = enemy;
  }
}

function getRandom(maxSize) {
  return parseInt(Math.random() * maxSize);
}

function loop() {
  if (new Date().getTime() - lastLoopRun > 40) {
    updatePositions();
    handleControls();
    checkCollisions();
    
    addenemy();
    
    showSprites();
    
    lastLoopRun = new Date().getTime();
    iterations++;
  }
  setTimeout('loop();', 2);
}

document.onkeydown = function(evt) {
  toggleKey(evt.keyCode, true);
};

document.onkeyup = function(evt) {
  toggleKey(evt.keyCode, false);
};

var hero = createSprite('hero', 500, 500, 150, 150);
var lasers = new Array();
for (var i = 0; i < 3; i++) {
  lasers[i] = createSprite('laser' + i, 0, -120, 2, 50);
}




loop();


    }
  




