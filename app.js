// import functions and grab DOM elements

// let state
const questionSection = document.getElementById ('question-section');
const askedQuestion = document.getElementById ('asked-question');
const askButton = document.getElementById('ask-button');const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');

const answers = [
    'Yes?',
    'It is certain, Gorilla',
    'It is decidedly so, Monkey',
    'Without a doubt, my primate!',
    'You may rely on it, like bananas',
    'As I see it, yes, bananas',
    'Most Likely bananas',
    'Outlook bananas',
    'Signs point to banana',
    'Reply hazy, try again',
    'Ask again later, too sleepy..',
    'Better not tell you now',
    'Cannot predict banana questions',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is banana',
    'My sources say banana',
    'Outlook not so good',
    'Very doubtful',
];



// set event listeners 
askButton.addEventListener('click', () => {

  // copy question to display
    const question = askedQuestion.value;
  // TODO: user didn't ask question
    questionDisplay.textContent = question;

  // hide question / show answer
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');

  // generate and show answer
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
});

function copyQuestion () {
    questionSection.classList.add('hidden');
    answerDisplay.textContent = randomAnswer;

}
  // get user input
function getRandomItem(array) {
    const randomIndex = Math.floor(math.random() * answers.length);
    const item = array[randomIndex];
    return item;


}

  // use user input to update state 
  // update DOM to reflect the new state
