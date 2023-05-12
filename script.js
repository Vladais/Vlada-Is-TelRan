function start_game() {
    object.classList.toggle("start");
    document.title = 'Score: 0';
}

function miss(event) {
    if (event.target.id == "area") {
        console.log("miss")
    }
}

function hit() {
   score++;
   document.title = `Score: ${score}`;
}

let score = 0; 
let object = document.querySelector('#object');



