const words = [
    "Hello",
    "JavaScript",
    "Web Development",
    "Coding",
    "Programming",
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "GraphQL",
    "RESTful API",
    "JSON",
    "AJAX",
];





const btnStartStop = document.querySelector("#start");
const screen = document.querySelector(".screen");
const time = document.querySelector("#time");
const gameOverScreen = document.querySelector(".game-over-screen");
const btnRestart = document.querySelector("#restart");
const inputField = document.querySelector("#input");
const spanScore = document.querySelector("#score");
const spanLevel = document.querySelector("#level");
const ol = document.querySelector(".history");



let level = 1;
let seconds = 10;
let score = 0;
let currentWord = '';
const pointPerLetter = 0.5;
const history = [];


btnStartStop.addEventListener("click", function() {

    if(btnStartStop.textContent === "Start") {
        btnStartStop.style.backgroundColor = "#777";
            let i = 0;
                const timer = setInterval(function(){
                    i++;
                    btnStartStop.textContent = i
                    if(i === 3){
                        clearInterval(timer);
                        btnStartStop.textContent = 'Stop'
                        btnStartStop.style.backgroundColor = "rgb(170, 5, 5)";
                        //afficher le premier mot:
                        currentWord = getRandomWord();
                        screen.textContent = currentWord;
                        //Mettre le focus sur le champ de saisie
                        inputField.focus();
                        //desactiver le champ de selection de niveau
                        spanLevel.disabled = true;
                        //declencher le timer pour afficher le mot suivant
                        time.textContent = `${seconds}s`;
                        const remainingTimer = setInterval(function(){
                            seconds--;
                            time.textContent = `${seconds}s`;
                            if(seconds < 0){
                                clearInterval(remainingTimer);
                                //Gamer over
                                gameOver();
                            }
                        },1000);
                    } 
                },1000);
    } else {
        btnStartStop.textContent = "Start"
        btnStartStop.style.backgroundColor = "rgb(0, 128, 0)";
    }
});

btnRestart.addEventListener("click",function(){
    location.reload();
});

inputField.addEventListener("input",function(){
    if(inputField.value.toLowerCase() === currentWord.toLowerCase()){
        let point = currentWord.length * pointPerLetter;
        score+= point;
        spanScore.textContent = score;
        //ajouter le mot trouve dans l'historique
        history.push(currentWord);
        // Generer un nouveau mot
        currentWord = getRandomWord();
        screen.textContent = currentWord;
        //effacer le champ de saisie
        inputField.value = "";
        //Augmenter le temps
        if(level === 1){
            seconds += 5;
        }else if(level === 2){
            seconds += 3;
        }else if(level === 3){
            seconds += 2;
        }
        
    }
});

spanLevel.addEventListener("change",function(){
    level = spanLevel.value;
})


function getRandomWord() {
    const pos = Math.floor(Math.random() * words.length);
    return words[pos];
}

function gameOver(){
    const finalScore = document.querySelector("#finalScore");
    finalScore.textContent = score;
    gameOverScreen.style.display = "flex";
    //Afficher l'historique
    // history.forEach(function(word){
    //     const li = document.createElement("li");
    //     li.textContent = word;
    //     ol.appendChild(li);
    // });
    let i = 0;
    const interval = setInterval(function(){
        const li = document.createElement("li");
        li.textContent = history[i];
        ol.appendChild(li);
        i++;
        if(i === history.length){
            clearInterval(interval);
        }
    },300);
}