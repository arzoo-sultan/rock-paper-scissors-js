let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#msg")
let userscorePara=document.querySelector("#user-score")
let compscorePara=document.querySelector("#comp-score")


const gencompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor( Math.random()*3);
    return options[randIdx];
   

}
const DrawGame=()=>{
    console.log("Draw Game");
    msg.innerText="Draw game! Play Again"
    msg.style.backgroundColor="rgb(10, 10, 87)";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        console.log("You win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
         compscorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText="You Loose";
        msg.style.backgroundColor="red";
    }
}
 const playGame=(Userchoice)=>{
    let UserChoice=Userchoice;
    console.log("userChoice",Userchoice);
     const compChoice=gencompChoice();
     console.log("compChoice",compChoice);
     let userWin=true;
     if(UserChoice===compChoice){
     DrawGame();
     }
     else{
        
     if(UserChoice=="rock"){
        //paper,scissors
       userWin=compChoice==="paper"? false :  true;
     }else if(UserChoice=="paper"){
        userWin=compChoice==="scissors"? false : true;
     }else{
        userWin=compChoice==="rock"? false : true;
     }
      showWinner(userWin);
     }
    
    

 }
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id")
        playGame(Userchoice);
    })
})