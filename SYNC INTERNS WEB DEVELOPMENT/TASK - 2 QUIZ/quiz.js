const quizData = [{
   question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "What does OOP's stands for?",
    a: "Object Oriented Programming",
    b: "Oriented Object Programming",
    c: "Option Oriented Programming",
    d: "Optical Object Programming",
    correct: "a",
},
{
    question:"Who invented Computer?",
    a: "Charles Cabbage",
    b: "Charles Babbage",
    c: "Charles Robert",
    d: "Charles Henry",
    correct: "b",
},
{
    question:"What is shortcut key of Copy?",
    a: "Ctrl+C",
    b: "Ctrl+V",
    c: "Ctrl+X",
    d: "Ctrl+Z",
    correct: "a",
},
{
    question:"What does PHP stands for?",
    a: "Pre Hypertext Processor",
    b: "Preprocessor Hypertext",
    c: "Hypertext Preprocessor",
    d: "Processor Hypertext Pre",
    correct: "c",
},
{
    question:"What is the shortcut key of Undo?",
    a: "Ctrl+U",
    b: "Ctrl+A",
    c: "Ctrl+V",
    d: "Ctrl+Z",
    correct: "d",
},
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

let container = document.getElementsByClassName("container")[0];
const quizEnd = () => {
container.innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`

setTimeout(() => {if(correct >= 5){
    container.innerHTML = `<img src="./success.gif"></img>`
    }
    else{
        container.innerHTML = `<img src="./better luck next time.gif"></img>`
    } 
}, 1000);

}
loadQuestion(index);