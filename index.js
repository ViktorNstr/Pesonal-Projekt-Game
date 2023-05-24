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

    }
	function startGame() {
      const game = new Game();
      game.moveVillain();
    }

    this.hero.addEventListener("mousedown", () => {
      const clickSound = document.getElementById("clickSound");
      clickSound.play();
    });
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
    startGame(); // Call the startGame() function directly
    });

    function resetGame() {
    // Update the position of the hero element
    var heroUp = getRandomHeroPosition();
    hero.style.top = heroTop + "px";
	var villainLeft = getRandomVillainPosition();
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
  
  // Call the addClones function when the page loads to add initial clones
  window.onload = addClones;

  // Call the addClones function when the player successfully avoids a villain
  if (villainLeft < -20) {
  addClones();
  }
  
  function jump(){
    if(hero.classList == "animate"){return}
    hero.classList.add("animate");

    // Increase jump height for level 2
    if (counter >= 1000 && counter < 2000) {
        setTimeout(function(){
            hero.style.top = "120px";
            setTimeout(function(){
                hero.style.top = "150px";
                hero.classList.remove("animate");
            }, 300);
        }, 0);
    }

    // Increase jump height for level 3
    else if (counter >= 2000) {
        setTimeout(function(){
            hero.style.top = "100px";
            setTimeout(function(){
                hero.style.top = "150px";
                hero.classList.remove("animate");
            }, 300);
        }, 0);
    }

    else {
        setTimeout(function(){
            hero.classList.remove("animate");
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
      this.checkDead();
    }, 300);
  }

  jumpLeft() {
    if (this.hero.classList.contains("jumping")) return;
    this.hero.classList.add("jumping");
    this.hero.classList.add("jump-left");
    setTimeout(() => {
      this.hero.classList.remove("jumping");
      this.hero.classList.remove("jump-left");
      this.checkDead();
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

  var checkResult = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
    if (villainLeft < 20 && villainLeft > -20 && heroTop >= 130) {
        villain.style.animation = "none";
        clearInterval(checkDead);
        alert("Game Over. score: " + Math.floor(counter/100));
        counter = 0;
        villain.style.animation = "villain 1s infinite linear";

        // Show the youLost element
        document.getElementById("youLost").style.display = "villain";
    } else {
        counter++;
        document.getElementById("p").innerHTML = Math.floor(counter/100);

        // Check if the player has won
        if (counter >= 3000) {
            clearInterval(checkDead);
            alert("You won!");
            counter = 0;
            document.getElementById("youWon").style.display = "villain";
        }
    }
}, 10);
  