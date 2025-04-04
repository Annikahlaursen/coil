/* file: js.js 
purpuse: to make a quiz to escape new york by identyfying zombies*/

let currentAnswerKey = ''; // denne opdateres i hvert spørgsmål

document.addEventListener("keydown", function(event) {
    if (["w", "a", "d"].includes(event.key) === currentAnswerKey) {
        nextQuestion(); // den funktion der går videre til næste spørgsmål
    } else if (["w", "a", "d"].includes(event.key)) {
        fail();
    }
});


// start function with the first question
function start() {
    currentAnswerKey = 'w'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 1 out of 11 <br> <br>
        Which teacher is this zombie? <br>    
    </p>

    <img src="images/jeanne.jpg" alt="Zombie"> <br>

    <label><input type="radio" name="capital">Jeanne Bødker Nissen (W)</label><br>
    <label><input type="radio" name="capital">Caroline Wosh Niacki (A)</label><br>
    <label><input type="radio" name="capital">Sanne Salemonsen (D)</label>
    `

    headerr.innerHTML += `
        <button onclick="document.location='index.html'">Start over</button>

    `

    function nextQuestion() {
        // kalder næste funktion i rækken (nr2, nr3 osv.)
        nr2();
    }

}

// function for when you get one wrong and die
function fail() {
    question.innerHTML = `
    <h1>You died!!</h1>
    
    <button onclick="document.location='index.html'">Try again</button>

    `
}

// start function with the first question
function nr2() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 2 out of 11 <br> <br>
        Which teacher is this zombie? <br>    
    </p>

    <img src="images/line.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Emma Balling</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Simone Larsen</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="nr3()">Line Skjødt</label>
    `

    function nextQuestion() {
        // kalder næste funktion i rækken (nr2, nr3 osv.)
        nr3();
    }
}


function nr3() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 3 out of 11 <br> <br>
        Which teacher is this zombie? <br>    
    </p>

    <img src="images/berber.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="nr4()">Berber Hartman</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Aniek Hauer</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Petra Cruyff</label>
    `

    function nextQuestion() {
        // kalder næste funktion i rækken (nr2, nr3 osv.)
        nr4();
    }
}

function nr4() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 4 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/johan.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Mads Emil Madsen </label>
    <label><input type="radio" name="capital" value="Frugt" onclick="nr5()">Johan Cruijff</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Noa Lang</label>
    `

    function nextQuestion() {
        // kalder næste funktion i rækken (nr2, nr3 osv.)
        nr5();
    }
}

function nr5() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 5 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/mette.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Sigrid Kaag</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="nr6()">Mette Frederiksen</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Pernille Vermund</label>
    `

    function nextQuestion() {
        // kalder næste funktion i rækken (nr2, nr3 osv.)
        nr6();
    }
}

function nr6() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 6 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/holger.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Mikael Torpegaard</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Frederik Løchte Nielsen</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="nr7()">Holger Rune</label>
    `
}

function nr7() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 7 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/max.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Daniel Ricciardo</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Kevin Magnussen</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="nr8()">Max Verstappen</label>
    `
}

function nr8() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 8 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/king.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Christian-Vincent</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="nr9()">Willem-Alexander</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Prince Claus</label>
    `
}

function nr9() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 9 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/armin.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="nr10()">Armin van Buuren</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Martin Jensen</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Jaxstyle</label>
    `
}

function nr10() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 10 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/lukas.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="fail()">Avicii</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="nr11()">Lukas Graham</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Hugo Helmig</label>
    `
}

function nr11() {
    currentAnswerKey = 'd'; // 'd' svarer til korrekt svar i spørgsmål 2

    question.innerHTML = `
    <p>
        Question 11 out of 11 <br> <br>
        Which person is this zombie? <br>    
    </p>

    <img src="images/doutzen.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="win()">Doutzen Kroes</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Carice Van Houten</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Famke Janssen</label>
    `
}

function win() {
    question.innerHTML = `
    <h2>
        Congratulations! <br> You survived the zombie apocalypse and got out of New York just in time to escape
    </h2>

    <button onclick="document.location='index.html'">Start over</button>
    
    `
}