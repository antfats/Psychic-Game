//create variables for wins/losses
//have the computer picks a letter
//take input from the user, and store that input
//compare the input the user typed, with what the computer picked
$(document).ready(); {
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var userGuess;


    //User presses a key and choses a letter. the computer randomly picks a number and then compares the two. 
    
    document.onkeypress = function (event) {
        var userGuess = event.key;
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length )];
        $("#guesses").append(userGuess);
        $("#compGuess").append(computerGuess);

    }
    //win/lose conditions

    if (userGuess === computerGuess){
        alert("YOU WIN!!!");
        wins++;




    }


}
