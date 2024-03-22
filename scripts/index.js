// selectors
const mainSelector = document.querySelector("#main-container");
const questionSelector = document.querySelector("#questions");
const choiceSelector = document.querySelector("#choices");

let currentQuestion = 0;

const questionsObj = {
    1: "Your father tasks you with going to the market for a few items. He gives you a list and the coin to purchase the items. You head to the market and begin to look for the items on the list. Recently, the country, including your family has gone through some rough times. What do you do?",
    2: "You're walking through town, when you hear some yelling come from a nearby alley. You look down the alley and see two men attacking another man. What do you do?",
    3: "You're working for the local guild and sent to collect a rare and mysterious book. Apparently the book is hidden deep in a tower that is inhabited by bandits. After a relentless trek through the tower, you finally arrive at the library where the book is. As you approach the book, a man appears from the shadows and states the book is an old and ancient evil that should be destroyed. What do you do?",
    4: "You're walking through the forest one day and stumble upon a hurt deer. Looking down at it's legs, you notice it is caught in a bear trap and hurt pretty badly. You know this isn't hunting season and is illegal. What next?",
    5: "You're trekking through a large city and notice a man fleeing from a large mob, which are yelling, as well as chasing the man with weapons and torches. You start to follow and at some point the mob corner the man. He's pleading for his innocence, claiming he didn't do it. What do you do?",
    6: "You're part of the local city council, debating an intense issue. One of the council members is currently giving their opinion on the issue. Midway through their statement, the council leader slams down his gavel and states that the idea is preposterous and ends their turn. What's your next course of action?",
    7: "While riding through the woods, you see smoke in the distance. Upon getting closer you see a town under seige by a pack of orcs. Galloping even, closer you see little resistance from the townsfolk. They seem to be a simple farming community. What next?",
    8: "",
    9: "",
    10: "",
};

const answersObj = {
    1: {
        "c1": {
            "c1": "Do as your father asks and purchase the required items on the list.",
            "wis": 1
        },
        "c2": {
            "c2": "Keep the money and steal the items when the vendors are distracted. Then return the money to your father. Surely, your father will understand?",
            "agi": 1
        },
        "c3": {
            "c3": "Pocket the money and tell your father that with the country facing hardship, none of the items were available.",
            "int": 1
        },
        "c4": {
            "c4": "Purchase some of the items on the list, but use the rest of the money to buy books on self-sustainability. Who knows if these hard times will get easier?",
            "str": 1
        }
    },
    2: {
        "c1": {
            "c1": "Ask what's going on and try to diffuse the situation.",
            "wis": 1
        },
        "c2": {
            "c2": "Yell at the attackers to distract them, letting the other man escape.",
            "agi": 1
        },
        "c3": {
            "c3": "Join the men in messing with the other man. The man must have done something to deserve it, right?",
            "int": 1
        },
        "c4": {
            "c4": "Rush to the man's aid, throwing your fist into the first attackers face. You will not stand for this injustice.",
            "str": 1
        }
    },
    3: {
        "c1": {
            "c1": "Question the shadowy figure further. Where did this book come from and who is he?",
            "wis": 1
        },
        "c2": {
            "c2": "In one swift action, grab the book and use your mysticism to render yourself invisible, then sneak out of the tower and back to the guild.",
            "agi": 1
        },
        "c3": {
            "c3": "Ignore the shadowy figures warnings and grab the book. You will not be returning this to the guild. This knowledge is for your own power.",
            "int": 1
        },
        "c4": {
            "c4": "Grab the book and throw it to the ground. Then, raising your weapon attempt to destroy the book.",
            "str": 1
        }
    },
    4: {
        "c1": {
            "c1": "Using your knowlege of herbalism, collect enough plants to create a salve that will ease the deers pain and slowly send it to a forever sleep.",
            "wis": 1
        },
        "c2": {
            "c2": "Remark on the design and structure of the trap, You've seen these before. Attempt to disarm the trap, setting the deer free.",
            "agi": 1
        },
        "c3": {
            "c3": "Using your knowlege of the arcane, cast an unlock spell on the trap and then channel a healing spell on the deer.",
            "int": 1
        },
        "c4": {
            "c4": "Using all your physical power, pull the trap apart using intense force, freeing the deer. Then in a fury of rage, track down the hunters responsible...",
            "str": 1
        }
    },
    5: {
        "c1": {
            "c1": "Knowing the potential chaos an unruly mob can descend into, calmly raise your voice and state the man deserves a fair trial, guilt cannot be determined by a groups wrath.",
            "wis": 1
        },
        "c2": {
            "c2": "Since half the city is gathered around the man, use this opportunity to pillage the stands of the various vendors. A little extra coin and items go a long way.",
            "agi": 1
        },
        "c3": {
            "c3": "Grab the man and weave a teleportation spell to the nearest safe location. The mob is simply too unruly to decide a mans fate.",
            "int": 1
        },
        "c4": {
            "c4": "Putting your faith in the man, quickly sprint in front of the man, shielding him. Knowing that your strength is unmatched and you welcome any takers.",
            "str": 1
        }
    },
    6: {
        "c1": {
            "c1": "From your past dealings with the council leader, you know he is stubborn and bullheaded. Appeal to his sense of order, stating as much as he may disagree with another members opinion, the council must maintain a sense of decorum.",
            "wis": 1
        },
        "c2": {
            "c2": "As you're familiar with the ways of the council and the leaders 'under the table' dealings with a local guild, whisper in the leader's ear and let him know that this information will be shared unless he lets the other council member continue their statement.",
            "agi": 1
        },
        "c3": {
            "c3": "From memory, recite the section of the council ordinance that every member deserves their fair turn when speaking on important issues.",
            "int": 1
        },
        "c4": {
            "c4": "Hurdle over the table, grab the leader's gavel and smash it to pieces. Every member deserves the same rights to speak on how they see the issue.",
            "str": 1
        }
    },
    7: {
        "c1": {
            "c1": "There's simply too many orcs for you to take on your own. Ride for the next nearest town and rally the militia, praying that when you return it's not too late.",
            "wis": 1
        },
        "c2": {
            "c2": "Sneak through the town, locate, and assassinate the orc leader. Knowing that once it's killed, the rest of the orcs should flee, as they are cowards.",
            "agi": 1
        },
        "c3": {
            "c3": "Gallop towrds the orcs and cast a crowd control spell on them, followed by various elemental magics. This will let the towns people flee while you continue to fight.",
            "int": 1
        },
        "c4": {
            "c4": "Hop off your horse,, pull out your greatsword,  and charge the orcs. You've been itching for a battle.",
            "str": 1
        }
    },
    8: {
        "c1": {
            "c1": "Knowing the potential chaos an unruly mob can descend into, calmly raise your voice and state the man deserves a fair trial, guilt cannot be determined by a groups wrath.",
            "wis": 1
        },
        "c2": {
            "c2": "Since half the city is gathered around the man, use this opportunity to pillage the stands of the various vendors. A little extra coin and items go a long way.",
            "agi": 1
        },
        "c3": {
            "c3": "Grab the man and weave a teleportation spell to the nearest safe location. The mob is simply too unruly to decide a mans fate.",
            "int": 1
        },
        "c4": {
            "c4": "Putting your faith in the man, quickly sprint in front of the man, shielding him. Knowing that your strength is unmatched and you welcome any takers.",
            "str": 1
        }
    },
    9: {
        "c1": {
            "c1": "Knowing the potential chaos an unruly mob can descend into, calmly raise your voice and state the man deserves a fair trial, guilt cannot be determined by a groups wrath.",
            "wis": 1
        },
        "c2": {
            "c2": "Since half the city is gathered around the man, use this opportunity to pillage the stands of the various vendors. A little extra coin and items go a long way.",
            "agi": 1
        },
        "c3": {
            "c3": "Grab the man and weave a teleportation spell to the nearest safe location. The mob is simply too unruly to decide a mans fate.",
            "int": 1
        },
        "c4": {
            "c4": "Putting your faith in the man, quickly sprint in front of the man, shielding him. Knowing that your strength is unmatched and you welcome any takers.",
            "str": 1
        }
    },
    10: {
        "c1": {
            "c1": "Knowing the potential chaos an unruly mob can descend into, calmly raise your voice and state the man deserves a fair trial, guilt cannot be determined by a groups wrath.",
            "wis": 1
        },
        "c2": {
            "c2": "Since half the city is gathered around the man, use this opportunity to pillage the stands of the various vendors. A little extra coin and items go a long way.",
            "agi": 1
        },
        "c3": {
            "c3": "Grab the man and weave a teleportation spell to the nearest safe location. The mob is simply too unruly to decide a mans fate.",
            "int": 1
        },
        "c4": {
            "c4": "Putting your faith in the man, quickly sprint in front of the man, shielding him. Knowing that your strength is unmatched and you welcome any takers.",
            "str": 1
        }
    },
};

// these counters are linked to the choices and increment based on the players decisions. they ultimate decide the class. ex. 10 strength = barbarian
let wisCounter = 0;
let agiCounter = 0;
let intCounter = 0;
let strCounter = 0;

const questionTextGenerator = () => {
    questionSelector.textContent = questionsObj[currentQuestion];
}

const questionTextRemover = () => {
    questionSelector.textContent = "";
}

const nextQuestion = () => {
    questionTextRemover();
    answerTextRemover();
    currentQuestion += 1;
    console.log(`currentQuestion: ${currentQuestion}`);
    questionTextGenerator();
    answerTextGenerator();

    console.log(`wisCounter: ${wisCounter}`);
    console.log(`agiCounter: ${agiCounter}`);
    console.log(`intCounter: ${intCounter}`);
    console.log(`strCounter: ${strCounter}`);
}

const answerTextGenerator = () => {

    // create 4 choices
    const choice1 = document.createElement("p");
    const choice2 = document.createElement("p");
    const choice3 = document.createElement("p");
    const choice4 = document.createElement("p");

    // add the text content and styling to the choices
    choice1.textContent = answersObj[currentQuestion].c1.c1;
    choice2.textContent = answersObj[currentQuestion].c2.c2;
    choice3.textContent = answersObj[currentQuestion].c3.c3;
    choice4.textContent = answersObj[currentQuestion].c4.c4;

    choice1.style.padding = "16px";
    choice2.style.padding = "16px";
    choice3.style.padding = "16px";
    choice4.style.padding = "16px";

    // append the choices
    choiceSelector.appendChild(choice1);
    choiceSelector.appendChild(choice2);
    choiceSelector.appendChild(choice3);
    choiceSelector.appendChild(choice4);

    // when a choice is clicked, it should go to  the next question
    // when a choice is selected it should add to one of the core attributes. ie str
    
    // wis choice
    choice1.addEventListener("click", (e) => {
        console.log(e.target);
        wisCounter += answersObj[currentQuestion].c1.wis;
        nextQuestion();
    });
    // agi choice
    choice2.addEventListener("click", (e) => {
        console.log(e.target);
        agiCounter += answersObj[currentQuestion].c2.agi;
        nextQuestion();
    });
    // int choice
    choice3.addEventListener("click", (e) => {
        console.log(e.target);
        intCounter += answersObj[currentQuestion].c3.int;
        nextQuestion();
    });
    // str choice
    choice4.addEventListener("click", (e) => {
        console.log(e.target);
        strCounter += answersObj[currentQuestion].c4.str;
        nextQuestion();
    });
}

const answerTextRemover = () => {
    choiceSelector.textContent = "";
}

// generate the beginning text and start button

const startGenerator = () => {
    questionSelector.textContent = "Welcome to RPG Class Selector! Below will be various scenarios and you will be making a decision that you think is the best outcome. There are no right or wrong answers, simply choose the answer that you think fits best. At the end, your answers will be entered into our super secret algorithm that will select a class for you. Press start to begin! Enjoy!"

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