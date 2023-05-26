const hero = document.getElementById("hero");
const villain = document.getElementById("villain");
const scoreDisplay = document.getElementById("puntos");
let counter = 0;
let timeWithoutCollision = 0; 
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);
const jumpRightButton = document.getElementById("jumpRightButton");
const jumpLeftButton = document.getElementById("jumpLeftButton");
const jumpOnlyButton = document.getElementById("jumpOnlyButton");

jumpRightButton.addEventListener("click", jumpRight);
jumpLeftButton.addEventListener("click", jumpLeft);
jumpOnlyButton.addEventListener("click", jumpOnly);

function jumpRight() {
  const heroLeft = parseInt(
    window.getComputedStyle(hero).getPropertyValue("left")
  );
  if (heroLeft < 480) {
    hero.style.left = heroLeft + 50 + "px";
    jump();
  }
}

function jumpLeft() {
  const heroLeft = parseInt(
    window.getComputedStyle(hero).getPropertyValue("left")
  );
  if (heroLeft > 0) {
    hero.style.left = heroLeft - 50 + "px";
    jump();
  }
}

document.addEventListener("keydown", jump);

let isJumping = false;

function jump() {
  if (hero.classList != "jumping" && !isJumping) {
    isJumping = true;
    hero.classList.add("jumping");
    setTimeout(function () {
      if (hero.offsetTop > 50) {
        hero.style.top = hero.offsetTop - 100 + "px";
      }
      hero.classList.remove("jumping");
      isJumping = false;
      setTimeout(function () {
        hero.style.top = "150px"; 
      }, 400);
    }, 800);
  }
}

function jumpOnly() {
  const heroTop = parseInt(
    window.getComputedStyle(hero).getPropertyValue("top")
  );
  if (heroTop > 50) {
    hero.style.top = heroTop - 100 + "px";
    setTimeout(function () {
      hero.style.top = heroTop + "px";
    }, 400);
  }
}


function checkCollision() {
  const heroBox = {
    top: hero.offsetTop,
    left: hero.offsetLeft,
    right: hero.offsetLeft + hero.offsetWidth,
    bottom: hero.offsetTop + hero.offsetHeight,
  };

  const villainBox = {
    top: villain.offsetTop,
    left: villain.offsetLeft,
    right: villain.offsetLeft + villain.offsetWidth,
    bottom: villain.offsetTop + villain.offsetHeight,
  };

  if (
    heroBox.right >= villainBox.left &&
    heroBox.left <= villainBox.right &&
    heroBox.bottom >= villainBox.top &&
    heroBox.top <= villainBox.bottom
  ) {
    return true;
  } else {
    return false;
  }
}

function startGame() {
  villain.style.animation = "villain 3s infinite linear"; 
  const checkResult = setInterval(function () {
    if (checkCollision()) {
      clearInterval(checkResult);
      villain.style.animation = "none";
      alert("You Lost. Time: " + Math.floor(counter / 100));
      counter = 0;
      timeWithoutCollision = 0;
      villain.style.animation = "villain 3s infinite linear";
      checkResult = setInterval(arguments.callee, 10);
    } else {
      timeWithoutCollision++;
      if (timeWithoutCollision === 1200) {
        window.location.href = "you_won.html";
      }
      counter++;
      scoreDisplay.innerHTML = Math.floor(counter / 100);
    }
  }, 10);
}