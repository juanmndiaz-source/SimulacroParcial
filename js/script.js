let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let correctCount = 0;
let totalAnswered = 0;
let timerInterval;

const TOTAL_QUESTIONS = 40;
const EXAM_TIME = 40 * 60;

// INICIO
window.onload = init;

function init() {
    currentQuestions = questionBank.sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);

    renderNavGrid();
    loadQuestion(0);
    startTimer(EXAM_TIME);
    updateSidebarInfo();
}

function startTimer(time) {
    const display = document.querySelector('#timer');
    timerInterval = setInterval(() => {
        const m = String(Math.floor(time / 60)).padStart(2, '0');
        const s = String(time % 60).padStart(2, '0');
        display.textContent = `${m}:${s}`;

        if (time-- <= 0) {
            clearInterval(timerInterval);
            alert("¡Tiempo terminado!");
            disableAllInteraction();
        }
    }, 1000);
}

function loadQuestion(index) {
    currentIndex = index;
    const q = currentQuestions[index];

    // Ocultar feedback al cambiar de pregunta
    document.getElementById("feedback-area").style.display = "none";

    document.getElementById("question-text").innerText = q.question;
    document.getElementById("q-number-display").innerText = `Pregunta ${index + 1}`;

    const container = document.getElementById("options-list");
    container.innerHTML = "";

    const hasAnswered = userAnswers[q.id] !== undefined;

    document.getElementById("q-status-display").innerText =
        hasAnswered ? "Respondida" : "Sin responder aún";

    q.options.forEach((opt, i) => {
        const optionId = `opt_${q.id}_${i}`;

        const label = document.createElement("label");
        label.className = "option-label";
        label.setAttribute("for", optionId);

        const input = document.createElement("input");
        input.type = Array.isArray(q.correctIndex) ? "checkbox" : "radio";
        input.id = optionId;
        input.name = "currentOption";
        input.value = i;

        input.addEventListener("change", () => {
            document.getElementById("btn-check").disabled = false;
        });

        // Restaurar selección si ya fue respondida
        if (hasAnswered) {
            input.disabled = true;

            if (Array.isArray(userAnswers[q.id])) {
                if (userAnswers[q.id].includes(i)) input.checked = true;
            } else {
                if (userAnswers[q.id] === i) input.checked = true;
            }
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        container.appendChild(label);
    });

    document.getElementById("btn-prev").disabled = index === 0;
    document.getElementById("btn-next").disabled = index === currentQuestions.length - 1;

    document.getElementById("btn-check").style.display = hasAnswered ? "none" : "inline-block";
    document.getElementById("btn-check").disabled = true;

    if (hasAnswered) showFeedback(q);

    updateNavGridActive();
}

function checkAnswer() {
    const q = currentQuestions[currentIndex];

    const selected = [...document.querySelectorAll('input[name="currentOption"]:checked')]
        .map(i => parseInt(i.value));

    if (selected.length === 0) return;

    // Guardar correctamente según tipo de pregunta
    userAnswers[q.id] = Array.isArray(q.correctIndex)
        ? selected            // múltiple
        : selected[0];        // única

    // Validación
    if (isCorrect(q, userAnswers[q.id])) correctCount++;

    totalAnswered++;

    loadQuestion(currentIndex);
    renderNavGrid();
    updateSidebarInfo();
}

function isCorrect(q, selected) {
    const correct = q.correctIndex;

    // opción única
    if (!Array.isArray(correct)) {
        return selected === correct;
    }

    // selección múltiple
    if (!Array.isArray(selected)) return false;
    if (selected.length !== correct.length) return false;

    return selected.every(x => correct.includes(x));
}

function showFeedback(q) {
    const fb = document.getElementById("feedback-area");
    const correct = isCorrect(q, userAnswers[q.id]);

    fb.className = "feedback-msg " + (correct ? "success" : "error");
    fb.innerHTML = `<strong>${correct ? "¡Correcto!" : "Incorrecto"}</strong><br>${q.feedback}`;
    fb.style.display = "block";

    // Marcar opciones
    const options = document.querySelectorAll('input[name="currentOption"]');

    options.forEach((input, i) => {
        const label = input.parentElement;
        const isCorrectAnswer = Array.isArray(q.correctIndex)
            ? q.correctIndex.includes(i)
            : q.correctIndex === i;

        const isSelected = Array.isArray(userAnswers[q.id])
            ? userAnswers[q.id].includes(i)
            : userAnswers[q.id] === i;

        // Pintar correctas
        if (isCorrectAnswer) {
            label.classList.add("option-correct");
        }

        // Pintar incorrectas seleccionadas
        if (isSelected && !isCorrectAnswer) {
            label.classList.add("option-incorrect");
        }
    });
}


function prevQuestion() {
    if (currentIndex > 0) loadQuestion(currentIndex - 1);
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) loadQuestion(currentIndex + 1);
}

function updateSidebarInfo() {
    document.getElementById("realtime-score").innerText =
        `Aciertos: ${correctCount} / ${TOTAL_QUESTIONS}`;
}

function renderNavGrid() {
    const grid = document.getElementById("nav-grid");
    grid.innerHTML = "";

    currentQuestions.forEach((q, i) => {
        const btn = document.createElement("div");
        btn.className = "nav-btn";
        btn.textContent = i + 1;

        if (userAnswers[q.id] !== undefined) {
            btn.classList.add(
                isCorrect(q, userAnswers[q.id]) ? "correct" : "incorrect"
            );
        }

        btn.onclick = () => loadQuestion(i);
        grid.appendChild(btn);
    });

    updateNavGridActive();
}

function updateNavGridActive() {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach((btn, i) =>
        btn.classList.toggle("active", i === currentIndex)
    );
}

function disableAllInteraction() {
    document.querySelectorAll("input").forEach(i => i.disabled = true);
    document.getElementById("btn-check").disabled = true;
}
