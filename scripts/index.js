// selectors
const mainSelector = document.querySelector("#main-container");
const questionSelector = document.querySelector("#questions");
const choiceSelector = document.querySelector("#choices");


const questionTextGenerator = () => {

}

const questionTextRemover = () => {

}

const answerTextGenerator = () => {

}

const answerTextRemover = () => {
    
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
    });
}

// call the StartGenerator function
startGenerator();