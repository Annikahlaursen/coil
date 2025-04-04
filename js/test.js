let currentQuestion = 0; // Holder styr på hvor vi er i quizzen
const correctAnswers = ['w', 'd', 'w', 'a', 'd', 'd', 'd', 'a', 'w', 'd', 'w']; // Liste over rigtige svar

document.addEventListener("keydown", function(event) {
    if (event.key === correctAnswers[currentQuestion]) {
        nextQuestion(); // Gå videre, hvis korrekt tast blev trykket
    } else if (["w", "a", "d"].includes(event.key)) {
        fail(); // Hvis forkert tast trykkes, taber spilleren
    }
});

function nextQuestion() {
    currentQuestion++; // Gå til næste spørgsmål

    if (currentQuestion >= correctAnswers.length) {
        win(); // Hvis vi har svaret rigtigt på det sidste spørgsmål, vinder vi
    } else {
        loadQuestion(currentQuestion);
    }
}

function loadQuestion(index) {
    const questions = [
        {
            text: "Which teacher is this zombie?",
            image: "images/jeanne.jpg",
            options: ["Jeanne Bødker Nissen (W)", "Caroline Wosh Niacki (A)", "Sanne Salemonsen (D)"]
        },
        {
            text: "Which teacher is this zombie?",
            image: "images/line.jpg",
            options: ["Emma Balling (W)", "Simone Larsen (A)", "Line Skjødt (D)"]
        },
        {
            text: "Which teacher is this zombie?",
            image: "images/berber.jpg",
            options: ["Berber Hartman (W)", "Aniek Hauer (A)", "Petra Cruyff (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/johan.jpg",
            options: ["Mads Emil Madsen (W)", "Johan Cruijff (A)", "Noa Lang (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/mette.jpg",
            options: ["Sigrid Kaag (W)", "Mette Frederiksen (A)", "Pernille Vermund (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/holger.jpg",
            options: ["Mikael Torpegaard (W)", "Frederik Løchte Nielsen (A)", "Holger Rune (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/max.jpg",
            options: ["Daniel Ricciardo (W)", "Kevin Magnussen (A)", "Max Verstappen (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/king.jpg",
            options: ["Christian-Vincent (W)", "Willem-Alexander (A)", "Prince Claus (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/armin.jpg",
            options: ["Armin van Buuren (W)", "Martin Jensen (A)", "Jaxstyle (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/lukas.jpg",
            options: ["Avicii (W)", "Lukas Graham (A)", "Hugo Helmig (D)"]
        },
        {
            text: "Which person is this zombie?",
            image: "images/doutzen.jpg",
            options: ["Doutzen Kroes (W)", "Carice Van Houten (A)", "Famke Janssen (D)"]
        }
    ];

    const q = questions[index];

    question.innerHTML = `
        <p>
            Question ${index + 1} out of 11 <br><br>
            ${q.text} <br>
        </p>

        <img src="${q.image}" alt="Zombie"> <br> 

        <label>${q.options[0]}</label><br>
        <label>${q.options[1]}</label><br>
        <label>${q.options[2]}</label>
    `;
}

function start() {
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    headerr.innerHTML = `<button onclick="document.location='index.html'">Start over</button>`;
}

function fail() {
    question.innerHTML = `<h1>You died!!</h1> <button onclick="document.location='index.html'">Try again</button>`;
}

function win() {
    question.innerHTML = `<h2>Congratulations! <br> You survived the zombie apocalypse!</h2> <button onclick="document.location='index.html'">Start over</button>`;
}