'use strict';
let secretNumber= Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 18;
let highScore =0;
const displayMessage=(message)=>{
    document.querySelector('.message').textContent=message;
}
document.querySelector('.chk').addEventListener('click',()=>{
const guess = Number(document.querySelector('.guess').value);
if(!guess)
    {
        displayMessage('⛔ No Number!');
    }
    else if(guess===secretNumber){
        displayMessage('🎉🎊Correct Number!🎉🎊');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };
    const stop = () => {
      setTimeout(function() {
          confetti.stop()
      }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  }; 
  start();
  stop();
  
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
          // document.querySelector('.message').textContent =
          // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
          displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
          score-=6;
          document.querySelector('.score').textContent = score;
        } else {
          // document.querySelector('.message').textContent = '💥 You lost the game!';
          displayMessage('💥 You lost the game!');
          document.querySelector('.score').textContent = 0;
        }
      }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 18;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });