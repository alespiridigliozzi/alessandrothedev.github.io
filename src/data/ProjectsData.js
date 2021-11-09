export const ProjectData = [
    {
        id: "punk-api",  
        title: "BrewDog Punk Api - React",
        image: "https://github.com/alexsp92/calculator/raw/main/js-calculator.png",
        techStack: ['Html', 'Css', 'Scss', 'JavaScript', 'React'],
        demo: "https://alessandrothedev.github.io/punk-api/",
        github: "https://github.com/alessandrothedev/punk-api",
        p1: "A React app that where users can browse the entire BrewDog beers catalogue.",
        p2: "The app was created by fetching the Punk API",
        p3: "",
        p4: ""
    },
    {
        id: "js-calculator",    
        title: "JavaScript Calculator",
        image: "https://github.com/alexsp92/calculator/raw/main/js-calculator.png",
        techStack: ['Html', 'Css', 'Scss', 'JavaScript'],
        demo: "https://alessandrothedev.github.io/calculator/",
        github: "https://github.com/alessandrothedev/calculator",
        p1: `This JavaScript Calculator was designed with a mobile-first approach, using a css-grid layout and styled using the Glass Morphism design trend.`,
        p2: `The calculator consists of a display section where the user will be able to see the operations and their result. The values of the user's input will be stored in two variables with empty arrays as defaults. A 3rd variable will store the value for the operator and a 4th variable will determine if the 1st array has been filled.`,
        p3: `An EventListener, followed by an if statement function was set up, so that the values of the buttons will be pushed into the first variable array, using array.push() until the user selects one of the 7 operators. Once a user has selected an operator, the variable isFirstOperandFilled will be set to false, causing every other value from the following buttons' inputs to be pushed into our second array variable.`,
        p4: `A Switch statement will evaluate different case scenarios and based on that, different mathematical operations will be performed.`
    },
    {
        id: "morse-code",  
        title: "JavaScript Morse Decoder",
        image: "https://raw.githubusercontent.com/alessandrothedev/morsecode/main/morsedecoder1.png",
        techStack: ['Html', 'Css', 'Scss', 'JavaScript'],
        demo: "https://alessandrothedev.github.io/morsecode/",
        github: "https://github.com/alessandrothedev/morsecode",
        p1: "The Morse Code translator was designed with a mobile-first approach, using a css-grid layout.",
        p2: "Built in JavaScript. The user will type the sentence in the English language textarea and we will get the translation in morse code in the second textarea. We will use an object with all the letters, numbers and symbols as the Object's keys, and their corresponding morse codes as the Object's values.",
        p3: `To display the result, we use a function translate() that will store the inputs' values inside a variable and will then map the variable and return the Object's values for each key that matches the user input. If a character/key is invalid, it will output "?".`,
        p4: `The user can play the morse code in their browser by pressing the Play button. This was done using a library called morseSynth by netAction.`
    },
    {
        id: "js-trivia-quiz",  
        title: "JavaScript Trivia Quiz",
        image: "https://github.com/alessandrothedev/quiz/raw/main/jstriviapreview.png",
        techStack: ['Html', 'Css', 'Scss', 'JavaScript'],
        demo: "https://alessandrothedev.github.io/quiz/",
        github: "https://github.com/alessandrothedev/quiz",
        p1: "This JavaScript Trivia Quiz was designed with a mobile-first approach, using a css-grid & flexbox.",
        p2: `The quiz uses an Object array where we store our data i.e. our questions. Each question is an object with keys of Question, an array of answers. Each answer array contains 4 different objects where we store our answers, and we use a key correct with a value of true for the correct answer and false for the remaining answers.`,
        p3: `The questions are shuffled using the .sort() and Math.random() methods, so that each time the user plays, the order of the questions displayed will change.`,
        p4: ""
    }
];
