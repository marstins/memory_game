
let order = [];
let clickedOrder = [];
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue

const BLUE = document.querySelector('.blue');
const RED = document.querySelector('.red');
const YELLOW = document.querySelector('.yellow');
const GREEN = document.querySelector('.green');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Score: ${score}!\nStarting next level`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

let createColorElement = (color) => {
    if(color == 0) {
        return GREEN;
    } else if(color == 1) {
        return RED;
    } else if(color == 2) {
        return YELLOW;
    } else if(color == 3) {
        return BLUE;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Score: ${score}!\nYou Lose!\nClick to start again!`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Welcome!\nStarting New Game!`);
    score = 0;

    nextLevel();
}

GREEN.onclick = () => click(0);
RED.onclick = () => click(1);
YELLOW.onclick = () => click(2);
BLUE.onclick = () => click(3);

playGame();