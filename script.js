let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

const guessButton = document.getElementById('submitGuess');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const successImage = document.getElementById('successImage');
const errorImage = document.getElementById('errorImage');
const resetButton = document.getElementById('resetGame');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Por favor, digite um número válido entre 1 e 100.";
        return;
    }

    attempts--;

    if (userGuess === randomNumber) {
        feedback.textContent = "Parabéns! Você acertou!";
        successImage.style.display = "block";
        errorImage.style.display = "none";
        guessButton.disabled = true;
        resetButton.style.display = "block";  // Botão reiniciar visível
    } else {
        if (attempts > 0) {
            feedback.textContent = `Você errou! O número é ${userGuess < randomNumber ? "maior" : "menor"}.`;
            attemptsDisplay.textContent = `Tentativas restantes: ${attempts}`;
            errorImage.style.display = "block";
            successImage.style.display = "none";
        } else {
            feedback.textContent = `Você perdeu! O número era ${randomNumber}.`;
            guessButton.disabled = true;
            errorImage.style.display = "block";
            successImage.style.display = "none";
            resetButton.style.display = "block";  // Botão reiniciar visível
        }
    }
});

resetButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    guessInput.value = '';
    feedback.textContent = '';
    attemptsDisplay.textContent = `Tentativas restantes: ${attempts}`;
    successImage.style.display = "none";
    errorImage.style.display = "none";
    guessButton.disabled = false;
    resetButton.style.display = "none";  // Botão reiniciar oculto após reinício
});