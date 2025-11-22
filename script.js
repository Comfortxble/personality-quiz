/*Add your JavaScript here*/

var dogScore = 0;
var catScore = 0;

var questionCount = 0;

// STORE HTML elements using the DOM
var result = document.getElementById("result");
var restart = document.getElementById("restart");
var desc = document.getElementById("desc");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//Listen for click on element buttons and call function if clicked
q1a1.addEventListener("click", cat);
q1a2.addEventListener("click", dog);
q1a3.addEventListener("click", cat);
q1a4.addEventListener("click", dog);

q2a1.addEventListener("click", dog);
q2a2.addEventListener("click", dog);
q2a3.addEventListener("click", cat);
q2a4.addEventListener("click", cat);

q3a1.addEventListener("click", dog);
q3a2.addEventListener("click", cat);
q3a3.addEventListener("click", dog);
q3a4.addEventListener("click", cat);

q4a1.addEventListener("click", cat);
q4a2.addEventListener("click", dog);
q4a3.addEventListener("click", cat);
q4a4.addEventListener("click", dog);

q5a1.addEventListener("click", dog);
q5a2.addEventListener("click", cat);
q5a3.addEventListener("click", cat);
q5a4.addEventListener("click", dog);

// Functions

 q1a1.addEventListener("click", disable1);
 q1a2.addEventListener("click", disable1);
 q1a3.addEventListener("click", disable1);
 q1a4.addEventListener("click", disable1);

function disable1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
  
  document.getElementById("q1a1").style.background='#dcc2a8';
  document.getElementById("q1a1").style.color='#FFFFFF';
  document.getElementById("q1a2").style.background='#dcc2a8';
  document.getElementById("q1a2").style.color='#FFFFFF';
  document.getElementById("q1a3").style.background='#dcc2a8';
  document.getElementById("q1a3").style.color='#FFFFFF';
  document.getElementById("q1a4").style.background='#dcc2a8';
  document.getElementById("q1a4").style.color='#FFFFFF';
}

 q2a1.addEventListener("click", disable2);
 q2a2.addEventListener("click", disable2);
 q2a3.addEventListener("click", disable2);
 q2a4.addEventListener("click", disable2);

function disable2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;

  document.getElementById("q2a1").style.background='#dcc2a8';
  document.getElementById("q2a1").style.color='#FFFFFF';
  document.getElementById("q2a2").style.background='#dcc2a8';
  document.getElementById("q2a2").style.color='#FFFFFF';
  document.getElementById("q2a3").style.background='#dcc2a8';
  document.getElementById("q2a3").style.color='#FFFFFF';
  document.getElementById("q2a4").style.background='#dcc2a8';
  document.getElementById("q2a4").style.color='#FFFFFF';
}

 q3a1.addEventListener("click", disable3);
 q3a2.addEventListener("click", disable3);
 q3a3.addEventListener("click", disable3);
 q3a4.addEventListener("click", disable3);

function disable3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;

  document.getElementById("q3a1").style.background='#dcc2a8';
  document.getElementById("q3a1").style.color='#FFFFFF';
  document.getElementById("q3a2").style.background='#dcc2a8';
  document.getElementById("q3a2").style.color='#FFFFFF';
  document.getElementById("q3a3").style.background='#dcc2a8';
  document.getElementById("q3a3").style.color='#FFFFFF';
  document.getElementById("q3a4").style.background='#dcc2a8';
  document.getElementById("q3a4").style.color='#FFFFFF';
}

 q4a1.addEventListener("click", disable4);
 q4a2.addEventListener("click", disable4);
 q4a3.addEventListener("click", disable4);
 q4a4.addEventListener("click", disable4);

function disable4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;

  document.getElementById("q4a1").style.background='#dcc2a8';
  document.getElementById("q4a1").style.color='#FFFFFF';
  document.getElementById("q4a2").style.background='#dcc2a8';
  document.getElementById("q4a2").style.color='#FFFFFF';
  document.getElementById("q4a3").style.background='#dcc2a8';
  document.getElementById("q4a3").style.color='#FFFFFF';
  document.getElementById("q4a4").style.background='#dcc2a8';
  document.getElementById("q4a4").style.color='#FFFFFF';
}

 q5a1.addEventListener("click", disable5);
 q5a2.addEventListener("click", disable5);
 q5a3.addEventListener("click", disable5);
 q5a4.addEventListener("click", disable5);

function disable5() {
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
  document.getElementById("q5a4").disabled = true;

  document.getElementById("q5a1").style.background='#dcc2a8';
  document.getElementById("q5a1").style.color='#FFFFFF';
  document.getElementById("q5a2").style.background='#dcc2a8';
  document.getElementById("q5a2").style.color='#FFFFFF';
  document.getElementById("q5a3").style.background='#dcc2a8';
  document.getElementById("q5a3").style.color='#FFFFFF';
  document.getElementById("q5a4").style.background='#dcc2a8';
  document.getElementById("q5a4").style.color='#FFFFFF';
}


function cat() {
  catScore = catScore + 1;
  questionCount = questionCount + 1;

  console.log("questionCount = " + questionCount + " catScore = " + catScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
   updateResult2();
  }
}

function dog() {
  dogScore = dogScore + 1;
  questionCount = questionCount + 1;

  console.log("questionCount = " + questionCount + " dogScore = " + dogScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  updateResult2();
  }
}

// Results

function updateResult() {
  if (catScore >= 3) {
    result.innerHTML = "YOUR PERSONALITY IS MORE LIKE... A CAT'S!"
    console.log("YOUR PERSONALITY IS MORE LIKE A CAT'S!");
  } else if (dogScore >= 3) {
    result.innerHTML = "YOUR PERSONALITY IS MORE LIKE... A DOG'S!"
    console.log("YOUR PERSONALITY IS MORE LIKE A DOG'S!");
  }
}

function updateResult2() {
  if (catScore >= 3) {
    desc.innerHTML = "You may look shy and reserved on the outside, but there's a lot on the inside once someone gets to know you! Since you're on the introverted side, you love your alone time. Sometimes, you wish that the fast-moving world could take a breather and slow down just a bit."
    console.log("INSERT CAT DESCRIPTION");
  } else if (dogScore >= 3) {
    desc.innerHTML = "You're the sunshine to those around you! With you around, there's probably never a dull moment. Being on the extroverted side, you love hanging out with friends and making them laugh. Life's kinda hectic, but you sometimes love the fast pace because it's exciting and drives you forward."
    console.log("INSERT DOG DESCRIPTION");
  }
}

// RESTART

restart.addEventListener("click", refreshQuiz)

function refreshQuiz() {
  result.innerHTML = "YOUR PERSONALITY IS MORE LIKE..."
  console.log("YOUR PERSONALITY IS MORE LIKE...");
  desc.innerHTML = ""
  dogScore = 0;
  catScore = 0;
  questionCount = 0;
  refreshbutton();
}

// BACK TO NORMAL

function refreshbutton() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  
  document.getElementById("q1a1").style.background='#eee0d2';
  document.getElementById("q1a1").style.color='#593112';
  document.getElementById("q1a2").style.background='#eee0d2';
  document.getElementById("q1a2").style.color='#593112';
  document.getElementById("q1a3").style.background='#eee0d2';
  document.getElementById("q1a3").style.color='#593112';
  document.getElementById("q1a4").style.background='#eee0d2';
  document.getElementById("q1a4").style.color='#593112';

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;

  document.getElementById("q2a1").style.background='#eee0d2';
  document.getElementById("q2a1").style.color='#593112';
  document.getElementById("q2a2").style.background='#eee0d2';
  document.getElementById("q2a2").style.color='#593112';
  document.getElementById("q2a3").style.background='#eee0d2';
  document.getElementById("q2a3").style.color='#593112';
  document.getElementById("q2a4").style.background='#eee0d2';
  document.getElementById("q2a4").style.color='#593112';

  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;

  document.getElementById("q3a1").style.background='#eee0d2';
  document.getElementById("q3a1").style.color='#593112';
  document.getElementById("q3a2").style.background='#eee0d2';
  document.getElementById("q3a2").style.color='#593112';
  document.getElementById("q3a3").style.background='#eee0d2';
  document.getElementById("q3a3").style.color='#593112';
  document.getElementById("q3a4").style.background='#eee0d2';
  document.getElementById("q3a4").style.color='#593112';

  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  
  document.getElementById("q4a1").style.background='#eee0d2';
  document.getElementById("q4a1").style.color='#593112';
  document.getElementById("q4a2").style.background='#eee0d2';
  document.getElementById("q4a2").style.color='#593112';
  document.getElementById("q4a3").style.background='#eee0d2';
  document.getElementById("q4a3").style.color='#593112';
  document.getElementById("q4a4").style.background='#eee0d2';
  document.getElementById("q4a4").style.color='#593112';

  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
  
  document.getElementById("q5a1").style.background='#eee0d2';
  document.getElementById("q5a1").style.color='#593112';
  document.getElementById("q5a2").style.background='#eee0d2';
  document.getElementById("q5a2").style.color='#593112';
  document.getElementById("q5a3").style.background='#eee0d2';
  document.getElementById("q5a3").style.color='#593112';
  document.getElementById("q5a4").style.background='#eee0d2';
  document.getElementById("q5a4").style.color='#593112';
}

