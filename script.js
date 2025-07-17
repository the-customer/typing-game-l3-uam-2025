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


let seconds = 10;


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
                        screen.textContent = getRandomWord();
                        //declencher le timer pour afficher le mot suivant
                        time.textContent = `${seconds}s`;
                        const remainingTimer = setInterval(function(){
                            seconds--;
                            time.textContent = `${seconds}s`;
                            if(seconds === 0){
                                clearInterval(remainingTimer);
                                
                            }
                        },1000);
                    } 
                },1000);
    } else {
        btnStartStop.textContent = "Start"
        btnStartStop.style.backgroundColor = "rgb(0, 128, 0)";
    }
});


function getRandomWord() {
    const pos = Math.floor(Math.random() * words.length);
    return words[pos];
}