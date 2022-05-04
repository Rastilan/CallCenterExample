let currentQuestion = 2;
let questionText = [];
let currentAnswer = "";
let currentA = "";
let currentB = "";


// This function prints the new DOM elements (The new question and its answers)
function NextStep() {
    //select root of document
    const currentDiv = document.getElementById("content");
    //Show previous answer
    if(currentAnswer !== ""){
        //create previous answer element
            let previousAnswer = document.createElement("div");
            previousAnswer.textContent = currentAnswer;
            previousAnswer.setAttribute("class", "previous-answer");
            //remove old buttons
            document.getElementById("answerA").remove();
            document.getElementById("answerB").remove();
            //add previous answer to page
            currentDiv.insertAdjacentElement('beforeend', previousAnswer);

    }

    
    
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
    if(questionText.length > 0){
        for(let i = 0; i < questionText.length; i++) {
            let nextQuestion = document.createElement("div");
            nextQuestion.textContent = questionText[i];
            nextQuestion.setAttribute("class", "question");
            currentDiv.insertAdjacentElement('beforeend', nextQuestion);
        }
    }
    
    
    if(currentA !== "" || currentB !== ""){
        currentDiv.insertAdjacentElement('beforeend', nextAnswerContainer);
        nextAnswerContainer.insertAdjacentElement('beforeend', answerOne);
        nextAnswerContainer.insertAdjacentElement('beforeend', answerTwo);
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
                    return currentQuestion, questionText;

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
                    return currentQuestion, questionText;

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
                    return currentQuestion, questionText;
                case "B":
                    currentQuestion = 8;
                    SetQuestionText(currentQuestion);
                    return currentQuestion, questionText;
            }
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

        default: ""

    }
}

//sets question and answers. This is done in a seperate module to hopefully allow easy updating
function SetQuestionText(currentQuestionVal) {
    switch (currentQuestionVal) {
        case 0:
            return questionText[0] ="Case 0";
        case 1:
            currentA = "DQ";
            currentB = "<10k";
            return questionText[0] ="Determine Lead Type (DQ / <10K)";
        case 2:
            currentA = "Yes";
            currentB = "No";
            questionText[0] ="We see that you recently showed interest in getting out of debt but may not have qualified. Is that something you’re still interested in?";
            break;
        case 3: 
            currentA = "More than 10k";
            currentB = "Less than 10k";
            return questionText[0] ="Do you know approximately how much debt you have?";
        case 4: 
            currentA = "Yes";
            currentB = "No";
            questionText[0] ="Are you currently paying your bills on-time right now?";
            break;
        case 5: 
            currentA = "Yes";
            currentB = "No";
            return questionText[0] ="Are you looking to potentially lower your monthly payments or need some help in paying the debt off?";   
        case 6: 
            currentA = "Yes";
            currentB = "No";
            return questionText[0] ="Do you have at least $3,000 of debt or more?";
        case 7: 
            currentA = "";
            currentB = "";
            return questionText[0] ="Good news! It looks like we may be able to help you. Bare with me one moment while I get you transferred over to a specialist that can assist ";
        case 8: 
            currentA = "Yes";
            currentB = "No";
            return questionText[0] ="Is this credit card or medical debt?";
        case 9: 
            currentA = "";
            currentB = "";
            questionText[0] ="Great, it sounds like you could be an ideal candidate for our non-profit Debt Management Program.";
            questionText[1] = "Now, this option would combine your credit cards and other unsecured debt into one low affordable monthly payment at a much lower interest rate you have now.";
            questionText[2] = "On this program you may have to close out some of your cards but most of our clients don't have a problem with that since all they want to do is pay them off anyways.";
            questionText[3] = "What I am going to do is get you connected with a partner who specializes in this so they can give you a payment and quote, okay?";
            questionText[4] = "Just one sec while I get my associate on the line with us.Transfer Number = TBD";
            break;
        case 10: 
            currentA = "";
            currentB = "";
            return questionText[0] ="End Call [NQ Wrong Debt] – Sorry we couldn’t help you out today. I do appreciate you taking the time with me today! Have a great day!";
        case 11: 
            currentA = "Yes";
            currentB = "No";
            return questionText[0] ="OK, do you know if there is any damage in your credit history that you disagree with or feel is inaccurate?";
        case 12: 
            currentA = "Yes";
            currentB = "No";
            return questionText[0] ="Are you currently employed?";
        case 13: 
            currentA = "";
            currentB = "";
            return questionText[0] ="End Call [NQ No Damage Credit History]– Sorry we couldn’t help you out today. I do appreciate you taking the time with me today! Have a great day!";
        case 14: 
            currentA = "";
            currentB = "";
            questionText[0] =" Since your credit is holding you back from achieving your financial goals, I think a credit restoration company might be able to help. Give me a second while I get them on the line for you.";
            questionText[1] = "Hi, I have a customer on the line who’s interested in credit repair and pre-qualified for your program.";
            questionText[2] = "I’ll let you take over the call from here and they will take excellent care of you. Thanks";







        }
}