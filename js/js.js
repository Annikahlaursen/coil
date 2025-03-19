/* file: js.js 
purpuse: to make a quiz to escape new york by identyfying zombies*/



// start function with the first question
function start() {
    question.innerHTML = `
    <p>
        Question 1 out of 10 <br> <br>
        Witch teacher is this zombie? <br>    
    </p>

    <img src="images/newYork.png" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="nr2()">Answer 1</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Answer 2</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Answer 3</label>
    `

    headerr.innerHTML += `
        <button onclick="document.location='index.html'">Start over</button>

    `

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
    question.innerHTML = `
    <p>
        Question 2 out of 10 <br> <br>
        Witch teacher is this zombie? <br>    
    </p>

    <img src="images/unnamed.jpg" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="nr3()">Answer 1</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Answer 2</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Answer 3</label>
    `

    headerr.innerHTML += `
        <button onclick="document.location='index.html'">Start over</button>

    `

}


function nr3() {
    question.innerHTML = `
    <p>
        Question 3 out of 10 <br> <br>
        Witch teacher is this zombie? <br>    
    </p>

    <img src="images/newYork.png" alt="Zombie"> <br> 

    <label><input type="radio" name="capital" value="Able" onclick="nr4()">Answer 1</label>
    <label><input type="radio" name="capital" value="Frugt" onclick="fail()">Answer 2</label>
    <label><input type="radio" name="capital" value="Frisk" onclick="fail()">Answer 3</label>
    `

    headerr.innerHTML += `
        <button onclick="document.location='index.html'">Start over</button>

    `

}