const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else {
     console.log('error, please type: rock, paper or scissors'); 
    }
   };
   
   const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
   switch(randomNumber){
     case 0:
     return 'rock';
     case 1:
     return 'paper';
     case 2: 
     return 'scissors';
     }
   };
   
   const determineWinner = (userChoice, computerChoice) => {
   if (userChoice === computerChoice) {
     return 'The game is a tie!';
   }
     if (userChoice === 'rock'){
       if(computerChoice === 'paper'){
       return "The computer won!"
     } else {
   return " congratulations, you won!";
   }
   }
   if (userChoice === 'paper'){
       if(computerChoice === 'scissors'){
       return "The computer won!"
     } else {
   return " congratulations, you won!";
   }
   }
   if (userchoice === 'scissors'){
       if(computerChoice === 'rock'){
       return "The computer won!"
     } else {
   return " congratulations, you won!";
   }
   }
   if (userchoice === 'bomb') {
     return 'congratulations, you won!';
   }
   }
   
   const playGame = () => {
     const userChoice = getUserChoice('paper');
     const computerChioce = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChioce);
   
     console.log(determineWinner(userChoice, computerChioce));
   }
   
   playGame()
   
   
   
   