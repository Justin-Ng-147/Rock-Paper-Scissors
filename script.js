function computerPlay(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection= playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();
    let loseMessage = `You Lose!\n${playerSelection} loses to ${computerSelection}`;
    let winMessage = `You Win!\n${playerSelection} beats ${computerSelection}`;

    if(playerSelection == computerSelection){
        // console.log('test2')
        return "You Tie!\nGo Again";
    }

    if(playerSelection=='rock'){
        // console.log('test')
        // console.log('bla'+computerSelection)
        if(computerSelection=='paper'){
            return loseMessage;
        } 
        else if(computerSelection=='scissors'){
            return winMessage;
        }
    }
    else if(playerSelection=='paper'){
        if(computerSelection=='scissors'){
            return loseMessage;
        } 
        else if(computerSelection=='rock'){
            return winMessage;
        }
    }
    else if(playerSelection=='scissors'){
        if(computerSelection=='rock'){ 
            return loseMessage;
        }
        else if(computerSelection=='paper'){
            return winMessage;
        }
    }
}

console.log('start');
console.log(computerPlay());

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));