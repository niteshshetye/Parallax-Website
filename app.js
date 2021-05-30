questionData = [
    {
        question: 'National Income estimates in India are prepared by',
        a: ' Planning Commission',
        b: 'Reserve Bank of India',
        c: 'Central statistical organisation',
        d: 'Indian statistical Institute',
        answer: 'c'
    },{
        question: 
        `while (a != 0)
        {
           if (a == 1) 
               continue;
           else 
               a++;
        }`,
        a: 'The continue keyword restarts the loop',
        b: 'The continue keyword skips the next iteration',
        c: 'The continue keyword skips the rest of the statements in that iteration',
        d: 'The continue keyword breaks out of the loop',
        answer: 'c'
    },{
        question: 'What are the three important manipulations done in a for loop on a loop variable?',
        a: 'Updation, Incrementation, Initialization',
        b: 'Initialization,Testing, Updation',
        c: 'Testing, Updation, Testing',
        d: 'Initialization,Testing, Incrementation',
        answer: 'b'
    },{
        question: 'One of the special features of an interpreter in reference with the for loop is that ___________',
        a: 'Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property',
        b: 'The iterations can be infinite when an interpreter is used',
        c: 'The body of the loop is executed only once',
        d: 'The iteration is finite when an interpreter is used',
        answer: 'a'
    },{
        question: 'What will happen if the body of a for/in loop deletes a property that has not yet been enumerated ?',
        a: 'The property will be stored in a cache',
        b: 'The loop will not run',
        c: 'That property will not be enumerated',
        d: 'The property will be enumerated',
        answer: 'c'
    }
]

// SOME BESIC ELEMENT INITIALIZE
let currentQuestion = 0;
let answer = undefined;
let score = 0;

// GRAB THE ELEMENTS HERE
const answersEls = document.querySelectorAll('.answer');
const quizContainer = document.querySelector('.quiz-container');
const quizQuestion = document.querySelector('.quiz-question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text') 
const d_text = document.getElementById('d_text')   
const quizSubmitBtn = document.querySelector('.quiz-submit');

// To load the first question when screen load
loadQuestion();

// Event listner
quizSubmitBtn.addEventListener('click', submitEvent);


// FUNCTIONS
function loadQuestion(){
    deSelectans();
    quizQuestion.innerText = questionData[currentQuestion].question;
    a_text.innerText = questionData[currentQuestion].a
    b_text.innerText = questionData[currentQuestion].b
    c_text.innerText = questionData[currentQuestion].c
    d_text.innerText = questionData[currentQuestion].d
}

function getSelected(){
    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer
}

function deSelectans(){
    answersEls.forEach((answerEl) =>{
        answer = undefined
        answerEl.checked = false;
    })
}

function submitEvent(){
    const answer = getSelected();
    if(answer){
        if(answer === questionData[currentQuestion].answer){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < questionData.length){
            loadQuestion();
        }else{
            quizContainer.innerHTML = `<h2>Your Got: ${score}/${questionData.length}</h2><button onclick='location.reload()'>Reload</button>`
        }
    }
}
