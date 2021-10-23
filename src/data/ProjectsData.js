export const ProjectData = [
    {
        id: "punk-api",  
        title: "Punk Api",
        image: "https://github.com/alexsp92/calculator/raw/main/js-calculator.png",
        techStack: ['Html', 'Scss', 'JavaScript', 'React Js'],
        demo: "https://alessandrothedev.github.io/calculator/",
        github: "https://github.com/alessandrothedev/calculator",
        desc: "The Calculator was designed with a mobile-first approach, using a css-grid layout and styled using the Glass Morphism design trend."
        
    },
    {
        id: "js-calculator",    
        title: "JavaScript Calculator",
        image: "https://github.com/alexsp92/calculator/raw/main/js-calculator.png",
        techStack: ['Html', 'Scss', 'JavaScript'],
        demo: "https://alessandrothedev.github.io/calculator/",
        github: "https://github.com/alessandrothedev/calculator",
        desc: "The Calculator was designed with a mobile-first approach, using a css-grid layout and styled using the Glass Morphism design trend."
    },
    {
        id: "morse-code",  
        title: "Morse Code Translator",
        image: "https://raw.githubusercontent.com/alessandrothedev/morsecode/main/morsedecoder.png",
        techStack: ['Html', 'Scss', 'JavaScript'],
        demo: "https://alessandrothedev.github.io/morsecode/",
        github: "https://github.com/alessandrothedev/morsecode",
        desc: `The Morse Code translator was designed with a mobile-first approach, using a css-grid layout. Built in JavaScript. The user will type the sentence in the English language textarea and we will get the translation in morse code in the second textarea. We use an object with all the letters, numbers and symbols as the Object's keys, and their corresponding morse codes as the Object's values. To display the result, we use a function translate() that will store the inputs' values inside a variable and will then map the variable and return the Object's values for each key that matches the user input. If a character/key is invalid, it will output "?". The user can play the morse code in their browser by pressing the Play button. This was done using a library called morseSynth by netAction.`
    },
    {
        id: "js-trivia-quiz",  
        title: "Trivia Quiz",
        image: "https://github.com/alessandrothedev/quiz/raw/main/jstriviapreview.png",
        techStack: ['Html', 'Scss', 'JavaScript'],
        demo: "https://alessandrothedev.github.io/quiz/",
        github: "https://github.com/alessandrothedev/quiz",
        desc: `This JavaScript Trivia Quiz was designed with a mobile-first approach, using a css-grid & flexbox. The quiz uses an Object array where we store our data i.e. our questions. Each question is an object with keys of Question, an array of answers. Each answer array contains 4 different objects where we store our answers, and we use a key correct with a value of true for the correct answer and false for the remaining answers. The questions are shuffled using the .sort() and Math.random() methods, so that each time the user plays, the order of the questions displayed will change.`
    }
];
