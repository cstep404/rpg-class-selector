// selectors
const mainSelector = document.querySelector("#main-container");
const questionSelector = document.querySelector("#questions");
const choiceSelector = document.querySelector("#choices");

let currentQuestion = 0;

const questionsObj = {
    1: "Your father tasks you with going to the market for a few items. He gives you a list and the coin to purchase the items. You head to the market and begin to look for the items on the list. Recently, the country, including your family has gone through some rough times. What do you do?",
    2: "Your walking through town, when you hear some yelling come from a nearby alley. You look down the alley and see two older kids bullying a younger kid. What do you do?",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
};

const answersObj = {
    1: {
        "c1": "Do as your father asks and purchase the required items on the list.",
        "c2": "Keep the money and steal the items when the vendors are distracted. Then return the money to your father. Surely, your father will understand?",
        "c3": "Pocket the money and tell your father that with the country facing hardship, none of the items were available.",
        "c4": "Purchase some of the items on the list, but use the rest of the money to buy books on self-sustainability. Who knows if these hard times will get easier?"
    },
    2: {
        "c1": "Rush to the young kids aid, throwing your fist into the first bullies face. You will not stand for this injustice.",
        "c2": "Join the bullies in messing with the young kid. The kid must have deserved it, right?",
        "c3": "Ask what's going on and try to diffuse the situation.",
        "c4": "Yell at the bullies to distract them, letting the young kid escape."
    },
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
};

const nextButtonGenerator = () => {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.style.padding = "10px";
    choiceSelector.appendChild(nextButton);
    nextButton.addEventListener("click", (e) => {
        console.log(e.target);
        questionTextRemover();
        answerTextRemover();
        currentQuestion += 1;
        console.log(`currentQuestion: ${currentQuestion}`);
        questionTextGenerator();
        answerTextGenerator();
    });
}

const questionTextGenerator = () => {
    questionSelector.textContent = questionsObj[currentQuestion];
}

const questionTextRemover = () => {
    questionSelector.textContent = "";
}

const answerTextGenerator = () => {

    // create 4 choices
    const choice1 = document.createElement("p");
    const choice2 = document.createElement("p");
    const choice3 = document.createElement("p");
    const choice4 = document.createElement("p");

    // add the text content and styling to the choices
    choice1.textContent = answersObj[currentQuestion].c1;
    choice2.textContent = answersObj[currentQuestion].c2;
    choice3.textContent = answersObj[currentQuestion].c3;
    choice4.textContent = answersObj[currentQuestion].c4;

    choice1.style.padding = "16px";
    choice2.style.padding = "16px";
    choice3.style.padding = "16px";
    choice4.style.padding = "16px";

    // append the choices
    choiceSelector.appendChild(choice1);
    choiceSelector.appendChild(choice2);
    choiceSelector.appendChild(choice3);
    choiceSelector.appendChild(choice4);

    choice1.addEventListener("click", (e) => {
        console.log(e.target);
    });

    choice2.addEventListener("click", (e) => {
        console.log(e.target);
    });

    choice3.addEventListener("click", (e) => {
        console.log(e.target);
    });

    choice4.addEventListener("click", (e) => {
        console.log(e.target);
    });

    nextButtonGenerator();
}

const answerTextRemover = () => {
    choiceSelector.textContent = "";
}

// generate the beginning text and start button

const startGenerator = () => {
    questionSelector.textContent = "Welcome to RPG Class Selector! Below will be various scenarios and you will be making a decision that you think is the best outcome. There are no right or wrong answers, simply choose the answer that you think fits best. At the end, your answers will be entered into our super secret algorithm that will select a class for you. Press start to begin, enjoy!"

    // create the start button
    const startButton = document.createElement("button");
    // give the button content and styling
    startButton.textContent = "Start!";
    startButton.style.padding = "10px";
    // append the node to the div
    questionSelector.appendChild(startButton);

    // clicking the start button removes the starter text and button
    startButton.addEventListener("click", (e) => {
        console.log(e.target);
        questionSelector.textContent = "";
        startButton.remove();
        currentQuestion += 1;
        console.log(`currentQuestion: ${currentQuestion}`);
        questionTextGenerator();
        answerTextGenerator();
    });
}

// call the StartGenerator function
startGenerator();

console.log(`currentQuestion: ${currentQuestion}`);