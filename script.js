let body = document.body;
// console.log(body)
// body.style.backgroundColor= "gray";
let inpt = document.querySelector(".inpt");
let again = document.querySelector(".againbtn");
let check = document.querySelector(".checkbtn");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let message = document.querySelector(".hint");
let number = document.querySelector(".number");


score=20; 
highscore=0;

let secretNumber =Math.trunc(Math.random()*20)+1; 
check.onclick=function(){
    
    let guess = Number(inpt.value);

   if(!guess){message.textContent='No Number';} 
   
    else if(guess> secretNumber){if(score>1){
        message.textContent='it is high';
        score--;
        document.querySelector(".score").textContent=score
    }else{
        message.textContent='you lost';
        score=0;
    }
    

    }
    else if (guess< secretNumber){
        if(score>1){
            message.textContent='it is low';
            score--; 
            document.querySelector(".score").textContent=score
        }else{
            message.textContent='you lost';
            score=0;
        }
    }else if(guess=== secretNumber){
    message.textContent='correct answer';
    document.querySelector(".score").textContent=score;
    document.querySelector(".highscore").textContent=score;
        body.style.backgroundColor="green";
        number.textContent=secretNumber;
        number.style.width='150px';
    }
}

again.onclick = function(){
    document.querySelector(".highscore").textContent=score;
    body.style.backgroundColor="black";
    number.textContent="?";
    number.style.width='100px';
    inpt.value="";
    message.textContent='start guessing ...';
    document.querySelector(".score").textContent = "20"; 


}