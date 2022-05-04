let currentQuestion = 2;
let questionText = [];
let currentAnswer = "";
let currentA = "";
let currentB = "";
let endingScripts = [];

// This function prints the new DOM elements (The new question and its answers)
function NextStep() {
    //select root of document
    const currentDiv = document.getElementById("content");
    //Show previous answer
    if(currentAnswer !== ""){
        if(document.getElementById("answerA").classList.contains("selected")){
            let previousAnswer = document.createElement("div");
            previousAnswer.textContent = currentAnswer;
            previousAnswer.setAttribute("class", "previous-answer");
            document.getElementById("answerA").remove();
            currentDiv.insertAdjacentElement('beforeend', previousAnswer);
        }
        else{
            document.getElementById("answerA").remove();
        }
        
    }
    if(currentAnswer !== ""){
        if(document.getElementById("answerB").classList.contains("selected")){
            let previousAnswer = document.createElement("div");
            previousAnswer.textContent = currentAnswer;
            previousAnswer.setAttribute("class", "previous-answer");
            document.getElementById("answerB").remove();
            currentDiv.insertAdjacentElement('beforeend', previousAnswer);
        }
        else{
            document.getElementById("answerB").remove();
        }
    }

    
    let nextQuestion = document.createElement("div");
    let nextAnswerContainer = document.createElement("div");
    let answerOne = document.createElement("button");
    let answerTwo = document.createElement("button");
    nextAnswerContainer.setAttribute("class", "answer-container");
    
    answerOne.textContent = currentA;
    answerTwo.textContent = currentB;
    answerOne.setAttribute("onclick", "Answer('A')");
    answerOne.setAttribute("id", "answerA");
    answerTwo.setAttribute("onclick", "Answer('B')");
    answerTwo.setAttribute("id", "answerB");
 
    // Next Question text creation and placement
    nextQuestion.textContent = questionText;
    nextQuestion.setAttribute("class", "question");
    currentDiv.insertAdjacentElement('beforeend', nextQuestion);
    
    if(currentA !== "" || currentB !== ""){
        currentDiv.insertAdjacentElement('beforeend', nextAnswerContainer);
        nextAnswerContainer.insertAdjacentElement('beforeend', answerOne);
        nextAnswerContainer.insertAdjacentElement('beforeend', answerTwo);
    }
    if(endingScripts.length > 0){
        for(let i = 0; i <= endingScripts.length; i++) {
            let nextEndingScript = document.createElement("div");
            nextEndingScript.textContent = endingScripts[i];
            currentDiv.insertAdjacentElement('beforeend', nextEndingScript);
        }
    }

    
}
// Sets our starting question and prints it to the page
SetQuestionText(currentQuestion);
NextStep();

//reloads the page to reset the call, simply refreshes the page
function ResetAll(){
    window.location.reload();
    
}

//Detects and sets the answer value, currently only accepts two answers, but should be easily expandable
function Answer(val) {
    if(val == "A"){
        currentAnswer = currentA;
        document.getElementById("answerA").setAttribute("class", "selected");
        CurrentQuestionSelector(currentQuestion, 'A');
        NextStep();
        
    }
    else if(val == "B"){
        currentAnswer = currentB;
        document.getElementById("answerB").setAttribute("class", "selected");
        CurrentQuestionSelector(currentQuestion, 'B');
        NextStep();
    }
    else {
        console.log(val + " this incorrect value loaded into the Answer function");
    }
}

//sets next question based on answer
function CurrentQuestionSelector(question, answer) {
    switch (question) {
        case 1:
            switch (answer) {
                case "A":
                    currentQuestion = 2;
                    SetQuestionText(currentQuestion);
                    return currentQuestion;

                case "B":
                    currentQuestion = 3;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
        case 2:
            switch (answer) {
                case "A":
                    currentQuestion = 6;
                    SetQuestionText(currentQuestion);
                    return currentQuestion;

                case "B":
                    currentQuestion = 11;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
        case 3:
            switch(answer){
                case "A":
                    currentQuestion = 4;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
                case "B":
                    currentQuestion = 5;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
        case 4:
            switch(answer){
                case "A":
                    currentQuestion = 7;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
                case "B":
                    currentQuestion = 5;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
                    
            }
        case 5:
            switch(answer){
                case "A":
                    currentQuestion = 8;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
                case "B":
                    currentQuestion = 11;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;  
            }
        case 6:
            switch(answer){
                case "A":
                    currentQuestion = 5;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, SetQuestionText(currentQuestion);
                case "B":
                    currentQuestion = 8;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
        case 7:
            break;
        case 8:
        switch(answer){
            case "A":
                currentQuestion = 9;
                SetQuestionText(currentQuestion);
                return currentQuestion, questionText;
            case "B":
                currentQuestion = 10;
                SetQuestionText(currentQuestion);
                return currentQuestion, questionText;     
        }
        case 9:
        switch(answer){
            case "A":

            case "B":
                
        }
        case 10:
        switch(answer){
            case "A":

            case "B":
                
        }
        case 11:
            switch(answer){
                case "A":
                    currentQuestion = 12;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
                case "B":
                    currentQuestion = 13;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
        case 12:
            switch(answer){
                case "A":
                    currentQuestion = 14;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
                case "B":
                    currentQuestion = 13;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
        case 13:
            switch(answer){
                case "A":
    
                case "B":
                    
            }
        case 14:
            switch(answer){
                case "A":
    
                case "B":
                    
            }
        case 10:
            switch(answer){
                case "A":
    
                case "B":
                    
            }
                    
        default: ""

    }
}

//sets question and answers. This is done in a seperate module to hopefully allow easy updating
function SetQuestionText(currentQuestionVal) {
    switch (currentQuestionVal) {
        case 0:
            return questionText = "Case 0";
        case 1:
            currentA = "DQ";
            currentB = "<10k";
            return questionText = "Determine Lead Type (DQ / <10K)";
        case 2:
            currentA = "Yes";
            currentB = "No";
            questionText = "We see that you recently showed interest in getting out of debt but may not have qualified. Is that something you’re still interested in?";
            break;
        case 3: 
            currentA = "More than 10k";
            currentB = "Less than 10k";
            return questionText = "Do you know approximately how much debt you have?";
        case 4: 
            currentA = "Yes";
            currentB = "No";
            questionText = "Are you currently paying your bills on-time right now?";
            break;
        case 5: 
            currentA = "Yes";
            currentB = "No";
            return questionText = "Are you looking to potentially lower your monthly payments or need some help in paying the debt off?";   
        case 6: 
            currentA = "Yes";
            currentB = "No";
            return questionText = "Do you have at least $3,000 of debt or more?";
        case 7: 
            currentA = "";
            currentB = "";
            return questionText = "Good news! It looks like we may be able to help you. Bare with me one moment while I get you transferred over to a specialist that can assist ";
        case 8: 
            currentA = "Yes";
            currentB = "No";
            return questionText = "Is this credit card or medical debt?";
        case 9: 
            currentA = "";
            currentB = "";
            questionText = "Great, it sounds like you could be an ideal candidate for our non-profit Debt Management Program.";
            endingScripts[0] = "Now, this option would combine your credit cards and other unsecured debt into one low affordable monthly payment at a much lower interest rate you have now.";
            endingScripts[1] = "On this program you may have to close out some of your cards but most of our clients don't have a problem with that since all they want to do is pay them off anyways.";
            endingScripts[2] = "What I am going to do is get you connected with a partner who specializes in this so they can give you a payment and quote, okay?";
            endingScripts[3] = "Just one sec while I get my associate on the line with us.Transfer Number = TBD";
            break;
        case 10: 
            currentA = "";
            currentB = "";
            return questionText = "End Call [NQ Wrong Debt] – Sorry we couldn’t help you out today. I do appreciate you taking the time with me today! Have a great day!";
        case 11: 
            currentA = "Yes";
            currentB = "No";
            return questionText = "OK, do you know if there is any damage in your credit history that you disagree with or feel is inaccurate?";
        case 12: 
            currentA = "Yes";
            currentB = "No";
            return questionText = "Are you currently employed?";
        case 13: 
            currentA = "";
            currentB = "";
            return questionText = "End Call [NQ No Damage Credit History]– Sorry we couldn’t help you out today. I do appreciate you taking the time with me today! Have a great day!";
        case 14: 
            currentA = "";
            currentB = "";
            questionText = " Since your credit is holding you back from achieving your financial goals, I think a credit restoration company might be able to help.Give me a second while I get them on the line for you.";
            endingScripts[0] = "Hi, I have a customer on the line who’s interested in credit repair and pre-qualified for your program.";
            endingScripts[1] = "I’ll let you take over the call from here and they will take excellent care of you. Thanks";







        }
}