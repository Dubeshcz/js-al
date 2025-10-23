 const target = document.getElementById('target');
  const scoreboard = document.getElementById('scoreboard');
  const gameOverText = document.getElementById('gameOver');

  let score = 0;
  let targetSize = 80; // počáteční velikost v px
  let timer;
  const maxWaitTime = 1500; // 1,5 sekundy

  function randomPosition() {
    const x = Math.random() * (window.innerWidth - targetSize);
    const y = Math.random() * (window.innerHeight - targetSize);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  }

  function startTimer() {
    clearTimeout(timer);
    timer = setTimeout(endGame, maxWaitTime);
  }

  function updateTarget() {
    randomPosition();
    target.style.width = `${targetSize}px`;
    target.style.height = `${targetSize}px`;
  }

  function endGame() {
    target.style.display = 'none';
    gameOverText.innerHTML = `Konec hry!<br>Tvůj výsledek: ${score}`;
    gameOverText.style.display = 'block';
    setTimeout(startGame, 3000);
  }

  function startGame() {
    score = 0;
    targetSize = 80;
    scoreboard.textContent = `Skóre: ${score}`;
    gameOverText.style.display = 'none';
    target.style.display = 'block';
    updateTarget();
    startTimer();
  }

  target.addEventListener('click', () => {
    score++;
    scoreboard.textContent = `Skóre: ${score}`;
    targetSize = Math.max(20, targetSize - 5); // zmenší se, ale ne pod 20px
    updateTarget();
    startTimer();
  });

  // Spuštění hry
  startGame();

/*
<div id="scoreboard">Skóre: 0</div>
<div id="gameOver"></div>
<div id="target"></div>
*/