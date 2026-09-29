const answers = {};

let currentStep = 1;

const steps = document.querySelectorAll(".quiz-step");


// ========================================
// NÆSTE-KNAPPER
// ========================================

const nextButtons = document.querySelectorAll("[class^='nextButton']");

nextButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        steps[index].style.display = "none";
        steps[index + 1].style.display = "block";

    });

});


// ========================================
// TILBAGE-KNAPPER
// ========================================

const backButtons = document.querySelectorAll("[class^='backButton']");

backButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        steps[index + 1].style.display = "none";
        steps[index].style.display = "block";

    });

});


// ========================================
// BYG MIN RUTE
// ========================================

const buildButton = document.querySelector(".Build-button");

buildButton.addEventListener("click", function() {

    console.log(answers);

});


// ========================================
// STEP 1 - OPLEVELSER
// ========================================

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


// ========================================
// STEP 2 - TRANSPORT
// ========================================

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


// ========================================
// STEP 3 - HVEM REJSER DU MED
// ========================================

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


// ========================================
// STEP 4 - STARTSTED
// ========================================

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


// ========================================
// STEP 5 - BUDGET
// ========================================

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


// ========================================
// STEP 6 - VARIGHED
// ========================================

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


// ========================================
// STEP 7 - TEMPO
// ========================================

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


// ========================================
// STEP 8 - OMRÅDE
// ========================================

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


// ========================================
// STEP 9 - OVERNATNING
// ========================================

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


// ========================================
// SKJUL ALLE STEPS UNDTAGEN STEP 1
// ========================================

steps.forEach(function(step, index) {

    if (index !== 0) {
        step.style.display = "none";
    }

});


// ========================================
// SELECTED KNAPPER
// + GØR NÆSTE-KNAPPEN MØRKEGRØN
// ========================================

const answerButtons = document.querySelectorAll(
    ".quiz-step button:not([class^='nextButton']):not([class^='backButton']):not(.Build-button)"
);

answerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Gør valget selected / ikke selected
        button.classList.toggle("selected");


        // Find det step, som valget ligger i
        const step = button.closest(".quiz-step");


        // Find Næste-knappen i det samme step
        const nextButton = step.querySelector("[class^='nextButton']");


        // Find alle selected valg i dette step
        const selectedButtons = step.querySelectorAll(".selected");


        // Hvis dette step har en Næste-knap
        if (nextButton) {

            // Hvis mindst ét valg er selected
            if (selectedButtons.length > 0) {

                nextButton.classList.add("active");

            } else {

                nextButton.classList.remove("active");

            }

        }

    });

});