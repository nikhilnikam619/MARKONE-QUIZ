var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + ' welcome to this quiz how well u know me');
let score = 0;
function quiz(qn, answer) {
    let useranser = readlineSync.question(qn)

    if (useranser === answer) {

        console.log("right");
        score = score + 1;


    }
    else {

        console.log("wrong");


    }
}
let questions = [{
    question: "what is Nikhil's favourite food ?",
    anser: "amba ras puran poli"
}, {
    question: "whats Nikhil's fvrt film",
    anser: "swadesh"
}, {
    question: "what is Nikhil's favourite game? ",
    anser: "cricket"
}, {
    question: "whats Nikhil's fvrt icecream?  ",
    anser: "chocklet"
}, {
    question: "who is Nikhil's favourite player? ",
    anser: "rohit sharma"
}, {
    question: "whats Nikhil's fvrt color? ",
    anser: "safron"
}];

let yesno = readlineSync.keyInYN("you want to play quiz");
while (yesno) {

    for (let i = 0; i < questions.length; i++) {

        let currentqn = questions[i];

        quiz(currentqn.question, currentqn.anser)
        console.log(score)


    }

    let thyknme = [{
        name: "pankaj",
        score: 6
    }, {
        name: "ganesh",
        score: 6
    }]

    if (score < thyknme[0].score) {
        console.log("u know me but not like pankaj and ganesh ")
    }
    else if (score == thyknme[0].score) {

        console.log("u know me very well, u r my brother like pankaj and ganesh")
    }
    else if (score == 0) {

        console.log("really, u know me ? ")
    }

    console.log("your final score is ", score)


    console.log("check out the people who know me well", thyknme[0], thyknme[1]);


    return !yesno;
}