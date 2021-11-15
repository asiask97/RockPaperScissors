// vars  
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let pickedIteam = 0;
let result = "";
let roundCount = 0;

//watching which iteam will be picked 
rock.addEventListener("click", (e) => {
    pickedIteam = 0;
    gameCalculation();
});
paper.addEventListener("click", (e) => {
    pickedIteam = 1;
    gameCalculation();

});
scissors.addEventListener("click", (e) => {
    pickedIteam = 2;
    gameCalculation();
});

function whichIteam(x){
    if(x == 0){
        return "Rock";
    }else if(x == 1){
        return "Paper";
    }else if(x == 2){
        return "Scissors";
    }else{
        return "Error"
    }
}
//getting the result
function gameCalculation(){
    let generatedNum = Math.floor(Math.random() * 3);
    if(generatedNum == pickedIteam){
                result = "DRAW";
    }
    else{
        // 		ROCK		VS			PAPER	 ||     PAPER 		VS		SCISSORS  	  ||	SCISSORS		VS			ROCK
        if((pickedIteam == 0 && generatedNum == 1) || (pickedIteam == 1 && generatedNum == 2) || (pickedIteam == 2 && generatedNum == 0)){
                result = "You Lost";
        }
        else{
                result = "You Won"; 
        }
    }
    roundCount++;
    alert("\n\n" + result + "\n\nComputer Choose: " + whichIteam(generatedNum) + "    You Choose: "+ whichIteam(pickedIteam) +"\nRound: " + roundCount + " out of 3");

    if(roundCount >= 3){
        if(confirm("Do you want to play again ?")){
        }
        else{
            alert("Thanks for playing!")
        }
        roundCount = 0;
    }
    
}

