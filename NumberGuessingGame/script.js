document.addEventListener("DOMContentLoaded", () => {
    let randomNumber = Math.floor(Math.random * 100) + 1;

    let attempt = 0;
    const input = document.getElementById('input');
    const inputButton = document.getElementById('inputButton');
    const gameReply = document.getElementById('gameReply');
    const attemptCount = document.getElementById('attemptCount');
    const restartButton = document.getElementById('restart');

    // Adding input
    inputButton.addEventListener('click', () => {
        const userGuess = parseInt(input.value);
        attempt++;
        if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
            gameReply.textContent = 'Invalid input! Please enter a number between 1 and 100.';
            return;
        }
        if(userGuess > randomNumber){
            gameReply.textContent = 'Your number is high.';
        }else if(userGuess < randomNumber){
            gameReply.textContent = "Your number is low, Try angin."
        }else{
            gameReply.textContent = `Well Done! You guessed the number in ${attempt} attempts.`;
            restartButton.disabled = false;
        }

        attemptCount.textContent = `Attempts: ${attempt}`;
            input.value = '';
    });

    restartButton.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempt = 0;
        gameReply.textContent = '';
        attemptCount.textContent = 'Attempts: 0';
        input.value = '';
    });
});

