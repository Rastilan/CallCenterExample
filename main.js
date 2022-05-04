currentQuestion = "We see that you recently showed interest in getting out of debt but may not have qualified. Is that something you’re still interested in?";
currentA = "Yes";
currentB = "No";

function NextStep(currentQuestion, currentA, currentB) {
    const currentDiv = document.getElementById("content");
    let nextQuestion = document.createElement("div");
    let answerOne = document.createElement("button");
    let answerTwo = document.createElement("button");
    nextQuestion.textContent = currentQuestion;
    answerOne.textContent = currentA;
    answerTwo.textContent = currentB;
    answerOne.setAttribute("onclick", "Answer('A')");
    answerTwo.setAttribute("onclick", "Answer('B')");
    currentDiv.insertAdjacentElement('beforeend', nextQuestion);
    currentDiv.insertAdjacentElement('beforeend', answerOne);
    currentDiv.insertAdjacentElement('beforeend', answerTwo);
}
NextStep(currentQuestion, currentA, currentB);

function Answer(val) {
    if(val == "A"){
        currentQuestion = "Do you have at least $3,000 of debt or more?";
        currentA = "A YES";
        currentB = "A NO";
        NextStep(currentQuestion, currentA, currentB);
    }
    else if(val == "B"){
        currentQuestion = "OK, do you know if there is any damage in your credit history that you disagree with or feel is inaccurate?";
        currentA = "B YES";
        currentB = "B NO";
        NextStep(currentQuestion, currentA, currentB);
    }
    else {

    }
}

