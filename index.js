document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
});

class Game {
  constructor() {
    this.hero = document.getElementById("hero");
    this.villain = document.getElementById("villain");
    this.youWon = document.getElementById("youWon");
    this.youLost = document.getElementById("youLost");
    this.puntos = document.getElementById("puntos"); 
    this.startButton = document.getElementById("startButton");   
    this.jumpLeftButton = document.getElementById("jumpLeftButton");
    this.jumpRightButton = document.getElementById("jumpRightButton");
    this.backgroundSound = document.getElementById("backgroundSound");
    this.backgroundSound.play();
    this.villain.width = this.villain.clientWidth;
    this.counter = 0;
    this.hero.addEventListener("mousedown", () => {
      const clickSound = document.getElementById("clickSound");
      clickSound.play();
    });

  }

  function startGame() {
    const game = new Game();
    game.moveVillain();
  }
  

    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
    startGame(); 
    });

    function resetGame() {
    
    let heroUp = getRandomHeroPosition();
    hero.style.top = heroTop + "px";
	let villainLeft = getRandomVillainPosition();
    villain.style.left = villainLeft + "px";
    }
     this.jumpRightButton.addEventListener("mousedown", () => {
      console.log("Jump Right button clicked");
      this.jumpRight();
      const clickSound = document.getElementById("clickSound");
      clickSound.play();
    });

    this.jumpLeftButton.addEventListener("mousedown", () => {
      console.log("Jump Left button clicked");
      this.jumpLeft();
      const clickSound = document.getElementById("clickSound");
      clickSound.play();
    });
  }
  
const hero = document.querySelector("#hero");
const villain = document.querySelector("#villain");
const gameBoard = document.querySelector("#gameBoard");

for (let i = 0; i < 5; i++) {
  const newhero = hero.cloneNode(true);
  newhero.id = `hero${i}`;
  gameBoard.appendChild(newhero);

  const newvillain = villain.cloneNode(true);
  newvillain.id = `villain${i}`;
  gameBoard.appendChild(newvillain);
}
  
  
  window.onload = addClones;

  
  if (villainLeft < -20) {
  addClones();
  }
  
  function jump(){
    if(hero.classList == "jumping"){return}
    hero.classList.add("jumping");

    
    if (counter >= 1000 && counter < 2000) {
        setTimeout(function(){
            hero.style.top = "120px";
            setTimeout(function(){
                hero.style.top = "150px";
                hero.classList.remove("jumping");
            }, 300);
        }, 0);
    }

    
    else if (counter >= 2000) {
        setTimeout(function(){
            hero.style.top = "100px";
            setTimeout(function(){
                hero.style.top = "150px";
                hero.classList.remove("jumping");
            }, 300);
        }, 0);
    }

    else {
        setTimeout(function(){
            hero.classList.remove("jumping");
        },300);
    }
}
Similarly, you can modify the villan animation to increase its speed when the player reaches level 2 and again when the player reaches level 3:
  moveVillain() {
    this.villain.x -= this.villain.speed;
    this.villain.style.left = this.villain.x + "px";
  
    if (this.villain.x < -this.villain.width) {
      this.villain.x = this.canvas.width;
      this.updateScore();
    }
  
    if (this.checkCollision()) {
      this.gameOver();
    }
    if (this.villainLeft < -20) {
      this.addClones();
    }

    window.requestAnimationFrame(() => this.moveVillain());
  }
  
  checkCollision() {
  const heroRect = this.hero.getBoundingClientRect();
  const villainRect = this.villain.getBoundingClientRect();
  return (
    heroRect.left < villainRect.right &&
    heroRect.right > villainRect.left &&
    heroRect.top < villainRect.bottom &&
    heroRect.bottom > villainRect.top
  );
}


    jumpRight() {
    if (this.hero.classList.contains("jumping")) return;
    this.hero.classList.add("jumping");
    this.hero.classList.add("jump-right");
    setTimeout(() => {
      this.hero.classList.remove("jumping");
      this.hero.classList.remove("jump-right");
      this.checkResult();
    }, 300);
  }

  jumpLeft() {
    if (this.hero.classList.contains("jumping")) return;
    this.hero.classList.add("jumping");
    this.hero.classList.add("jump-left");
    setTimeout(() => {
      this.hero.classList.remove("jumping");
      this.hero.classList.remove("jump-left");
      this.checkResult();
    }, 300);
  }

  updateScore() {
    this.counter++;
    this.puntos.innerHTML = Math.floor(this.counter/100);
  }

  gameOver() {
    this.villain.classList.remove("running");
    this.youLost.style.display = "flex";
  }

  function checkResult() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));

    if (villainLeft < 20 && villainLeft > -20 && heroTop >= 130) {
      villain.style.animation = "none";
      clearInterval(checkResult);
      alert("Game Over. score: " + Math.floor(this.counter/100));
      this.counter = 0;
      villain.style.animation = "villain 1s infinite linear";

      
      document.getElementById("youLost").style.display = "flex";
    } else {
      this.counter++;
      document.getElementById("p").innerHTML = Math.floor(this.counter/100);

      
      if (this.counter >= 3000) {
        clearInterval(checkResult);
        alert("You won!");
        this.counter = 0;
        document.getElementById("youWon").style.display = "flex";
      }
    }
  }