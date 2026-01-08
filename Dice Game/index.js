function chooseNumber(diceClass, number) {
    document.querySelector(diceClass).setAttribute("src", "./images/dice" + number + ".png");
}

function displayWinner(score1, score2){
    if(score1 > score2){
        document.querySelector("h1").innerHTML = ("🚩Player 1 Wins!");
    } else if(score1 < score2){
        document.querySelector("h1").innerHTML = ("Player 2 Wins!🚩");
    } else {
        document.querySelector("h1").innerHTML = ("Draw!");
    }
}


function rollTheDice(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

chooseNumber(".img1" ,randomNumber1);
chooseNumber(".img2" ,randomNumber2);
displayWinner(randomNumber1, randomNumber2);
}


document.querySelector(".btn").addEventListener("click", rollTheDice);