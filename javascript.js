// Quiz
const answers = {};

let currentStep = 1;

const steps = document.querySelectorAll(".quiz-step");


// Næste buttons

const nextButtons = document.querySelectorAll("[class^='nextButton']");

nextButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        steps[index].style.display = "none";
        steps[index + 1].style.display = "block";

    });

});


// Tilbage buttons

const backButtons = document.querySelectorAll("[class^='backButton']");

backButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        steps[index + 1].style.display = "none";
        steps[index].style.display = "block";

    });

});


// Spørgsmål 1


const step1 = document.getElementById("step1");

const OplevelseButtons = step1.querySelectorAll("button");

OplevelseButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton1")) {
            return;
        }

        const answer = button.innerText;

        answers.experience = answer;

        console.log(answers);

    });

});


// Spørgsmål 2

const step2 = document.getElementById("step2");

const transportButtons = step2.querySelectorAll("button");

transportButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton2")) {
            return;
        }

        if (button.classList.contains("backButton1")) {
            return;
        }

        const answer = button.innerText;

        answers.transport = answer;

        console.log(answers);

    });

});


// Spørgsmål 3

const step3 = document.getElementById("step3");

const travelerButtons = step3.querySelectorAll("button");

travelerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton3")) {
            return;
        }

        if (button.classList.contains("backButton2")) {
            return;
        }

        const answer = button.innerText;

        answers.traveler = answer;

        console.log(answers);

    });

});


// Spørgsmål 4

const step4 = document.getElementById("step4");

const startButtons = step4.querySelectorAll("button");

startButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton4")) {
            return;
        }

        if (button.classList.contains("backButton3")) {
            return;
        }

        const answer = button.innerText;

        answers.start = answer;

        console.log(answers);

    });

});


const startInput = step4.querySelector("input");

startInput.addEventListener("input", function() {

    answers.start = startInput.value;

    console.log(answers);

});


// Spørgsmål 5

const step5 = document.getElementById("step5");

const budgetButtons = step5.querySelectorAll("button");

budgetButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton5")) {
            return;
        }

        if (button.classList.contains("backButton4")) {
            return;
        }

        const answer = button.innerText;

        answers.budget = answer;

        console.log(answers);

    });

});


// Spørgsmål 6

const step6 = document.getElementById("step6");

const durationButtons = step6.querySelectorAll("button");

durationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton6")) {
            return;
        }

        if (button.classList.contains("backButton5")) {
            return;
        }

        const answer = button.innerText;

        answers.duration = answer;

        console.log(answers);

    });

});


const durationInput = step6.querySelector("input");

durationInput.addEventListener("input", function() {

    answers.days = durationInput.value;

    console.log(answers);

});


// Spørgsmål 7

const step7 = document.getElementById("step7");

const traveltempoButtons = step7.querySelectorAll("button");

traveltempoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton7")) {
            return;
        }

        if (button.classList.contains("backButton6")) {
            return;
        }

        const answer = button.innerText;

        answers.traveltempo = answer;

        console.log(answers);

    });

});


// Spørgsmål 8

const step8 = document.getElementById("step8");

const radiusButtons = step8.querySelectorAll("button");

radiusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("nextButton8")) {
            return;
        }

        if (button.classList.contains("backButton7")) {
            return;
        }

        const answer = button.innerText;

        answers.radius = answer;

        console.log(answers);

    });

});


// Spørgsmål 9

const step9 = document.getElementById("step9");

const OvernatningButtons = step9.querySelectorAll("button");

OvernatningButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.classList.contains("Build-button")) {
            return;
        }

        if (button.classList.contains("backButton8")) {
            return;
        }

        const answer = button.innerText;

        answers.overnatning = answer;

        console.log(answers);

    });

});


// Byg knap

const buildButton = document.querySelector(".Build-button");

buildButton.addEventListener("click", function() {

    console.log(answers);

});


// Skjul alle steps undtaget spørgsmål 1

steps.forEach(function(step, index) {

    if (index !== 0) {
        step.style.display = "none";
    }

});


// Gør det muligt at vælge flere svar i spørgsmålene

const answerButtons = document.querySelectorAll(
    ".quiz-step button:not([class^='nextButton']):not([class^='backButton']):not(.Build-button)"
);

answerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("selected");

        const step = button.closest(".quiz-step");

        const nextButton = step.querySelector("[class^='nextButton']");

        const selectedButtons = step.querySelectorAll(".selected");

        if (nextButton) {

            if (selectedButtons.length > 0) {
                nextButton.classList.add("active");
            } else {
                nextButton.classList.remove("active");
            }

        }

    });

});
