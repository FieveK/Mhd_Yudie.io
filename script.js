const quizAnswers = {
    1: 'B',
    2: 'B',
    3: 'A',
    4: 'B'
};

let score = 0;

function checkAnswer(button, question, answer) {
    if (quizAnswers[question] === answer) {
        score++;
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
    button.disabled = true;
}

function runCode() {
    const code = document.getElementById('code').value;
    const output = document.getElementById('output');
    try {
        const result = eval(code);
        output.textContent = result;
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }
}
