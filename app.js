window.onload = function () {
    show(0)
}


var question_shift = 0;
function mine() {

    if(question_shift <= 9){
    question_shift++
    
    show(question_shift)
    }else if( question_shift > 9){
alert("youve checked all the questions");
question_shift = 0;
show(question_shift);
    }
    else{
        question_shift = 0;
    }
}
var question = [{
    id: 1,
    question: "What is the function of Array object that adds and/or removes elements from an array?",
    answer: "splice()",
    options: [
        "unshift()",
  "toSource()",
  "sort()",
  "splice()",

    ]

},
{
    id: 2,
    question: "Which of the following are capabilities of functions in Javascript?",
    answer: "Accept parameters",
    options: [
        "Return a value",
        "Accept parameters and Return a value",
        "Accept parameters",
        "None of the above"
    ]

},
{
    id: 3,
    question: "Using ___ statement is how you test for a specific condition?",
    answer: "If",
    options: [
        "Select",
        "If",
        "Switch",
        "For"
    ]

},
{
    id: 4,
    question: "The ___ method of an array object adds and/or removes elements from an array?",
    answer: "Splice",
    options: [
        "Reverse",
        "Shift",
        "Slice",
        "Splice"
    ]

},
{
    id: 5,
    question: "Which of the following attribute can hold the Javascript version?",
    answer: "VERSION",
    options: [
        "LANGUAGE",
        "SCRIPT",
        "VERSION",
        "None of the above"
    ]

},
{
    id: 6,
    question: "Which on is the first fully supported 64-bit operating system?",
    answer: "Linux",
    options: [
        "Windows Vista",
        "Mac",
        "Linux",
        "Windows XP"
    ]
},
{
    id: 7,
    question: "Which of the following is not a web browser?",
    answer: "Facebook",
    options: [
        "MOSAIC",
        "WWW",
        "Facebook",
        "Netscape navigator"
    ]

},
{
    id: 8,
    question: "Which one of the following is a programming language?",
    answer: "HTML",
    options: [
        "HTTP",
        "HTML",
        "HPML",
        "FTP"

    ]
},
{
    id: 9,
    question: "Who is the father of computer?",
    answer: "Charles Babbage",
    options: [
        "Charlie Babbage",
        "Dennis Ritchie",
        "Charles Babbage",
        "Ken Thompson"
    ]
},
{
    id: 10,
    question: "Which is not a correct type of a computer?",
    answer: "Mini Frame computer",
    options: [
        "Mini Frame computer",
        "Super computer",
        "Workstations",
        "Personal computer"
    ]
}
]


var question_shift = 0;


function show(e) {
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${question[e].question} </h1>
    <ul class="list">
                      <li class="member" onclick="active()">${question[e].options[0]}</li>
                      <li class="member" onclick="active()">${question[e].options[1]}</li>
                      <li class="member" onclick="active()">${question[e].options[2]}</li>
                      <li class="member" onclick="active()">${question[e].options[3]}</li>
                  </ul>`

   
   
}
function active() {
    let member1 = document.querySelectorAll("li.member")
    for (let i = 0; i < member1.length; i++) {
        if(question[question_shift].answer === question[question_shift].options[i]){
            member1[i].classList.add("active");
     
        }else{
            member1[i].classList.add("wrong");
         
        }

        }
    
    
}

