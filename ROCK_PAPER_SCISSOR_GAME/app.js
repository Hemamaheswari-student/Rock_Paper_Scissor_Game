let userScore=0;
let compScore=0;
let userScorepara=document.querySelector("#user-score");
let compScorepara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const genCompChoice=()=>{
const options=["rock","paper","scissor"]
//rock,paper,scissor
const randIdx=Math.floor(Math.random()*3)
return options[randIdx]
}
const drawGame=()=>{
msg.innerText="game was draw .play again";
msg.style.backgroundColor="yellow";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorepara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore
        msg.innerText=`you loss ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>
    {
     //generate coputer choice for this we create a functions
     const compChoice=genCompChoice();
     if(userChoice===compChoice)
        {
    drawGame();
        }
        else{
            let userWin=true;
            if(userChoice==="rock"){
                //here the computer will be either paper or scissor
                userWin=compChoice==="paper"?false:true;
            }else if(userChoice==="paper")
                {
                    //rock,scissor
                    userWin=compChoice==="scissor"?false:true;
                }else{
                    userWin=compChoice==="rock"?false:true;
                }
                showWinner(userWin,userChoice,compChoice);
        }
    }
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})