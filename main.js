currentQuestion = "";
currentA = "Yes";
currentB = "No";

questionSet = "";

function NextStep(currentQuestion, currentA, currentB) {
    const currentDiv = document.getElementById("content");
    let nextQuestion = document.createElement("div");
    let nextAnswerContainer = document.createElement("div");
    let answerOne = document.createElement("button");
    let answerTwo = document.createElement("button");
    nextAnswerContainer.setAttribute("class", "answer-container");
    nextQuestion.textContent = currentQuestion;
    answerOne.textContent = currentA;
    answerTwo.textContent = currentB;
    answerOne.setAttribute("onclick", "Answer('A')");
    answerTwo.setAttribute("onclick", "Answer('B')");
    currentDiv.insertAdjacentElement('beforeend', nextQuestion);
    currentDiv.insertAdjacentElement('beforeend', nextAnswerContainer)
    nextAnswerContainer.insertAdjacentElement('beforeend', answerOne);
    nextAnswerContainer.insertAdjacentElement('beforeend', answerTwo);
}
currentQuestionSelector(currentQuestion);
NextStep(currentQuestion, currentA, currentB);

function Answer(val) {
    if(val == "A"){
        currentQuestion = currentQuestionSelector(currentQuestion, 'A');
        currentA = "A YES";
        currentB = "A NO";
        NextStep(currentQuestion, currentA, currentB);
    }
    else if(val == "B"){
        currentQuestion = currentQuestionSelector(currentQuestion, 'B');
        currentA = "B YES";
        currentB = "B NO";
        NextStep(currentQuestion, currentA, currentB);
    }
    else {

    }
}
function currentQuestionSelector(question, answer) {
    switch (question) {
        case "":
            currentQuestion = "We see that you recently showed interest in getting out of debt but may not have qualified. Is that something you’re still interested in?"
            break;
        case "We see that you recently showed interest in getting out of debt but may not have qualified. Is that something you’re still interested in?":
            return currentQuestion = "Do you have at least $3,000 of debt or more?";
            break;
        default: ""

    }
}