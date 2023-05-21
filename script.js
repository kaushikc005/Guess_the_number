

let input=document.getElementById('gameInput');
let easeMode=document.getElementById('easy');
let hardMode=document.getElementById('hard');
let welcomeArea=document.querySelector('.welcomeArea');
let gameArea=document.querySelector('.gameArea');
let result=document.getElementById('output');
let numberOfGuess=document.getElementById('numberOfGuess');
let previousGuess=document.getElementById('previousGuess');
let easy=false;
let hard=false;
let newGame=document.getElementById('newGame');
let number=parseInt(Math.random()*100);
let attempts=0;
let totalAttempts=0;

let guessArray=[];


const areaSwitch=()=>{
    number=parseInt(Math.random()*100);
    console.log(number)
    welcomeArea.style.display="none";
    gameArea.style.display="flex";
    };


const easeFunc=()=>{
    totalAttempts=10;
    areaSwitch();
    
}

const hardFunc=()=>{
    
    totalAttempts=5;
    areaSwitch();
    
}

const guessCompute=()=>
{  
        if(attempts>=totalAttempts || guessArray.length>totalAttempts){
            result.innerHTML="Your attempts are over";
            input.value=null;
            input.setAttribute('disabled',true);
            input.placeholder= "Enter your Guess number";
        }
        else
        {
            if(guessArray.length<=totalAttempts)
            {
                guessArray=[...guessArray,input.value];
            }
             
            if(input.value>number)
            {
                
                result.innerHTML="The guess is high";
                input.value=null;
                input.placeholder= "Enter your Guess number";
            }
            else if(input.value<number)
            {
                result.innerHTML="The guess is low";
                input.value=null;
                input.placeholder= "Enter your Guess number";   
            }
            
            else
            {   
                result.innerHTML=`Your guess is correct!!<br/>  The number is ${number}`;
                input.value=null;
                input.setAttribute('disabled',true);
                input.placeholder= "Enter your Guess number"; 
            }
            
            if(attempts<totalAttempts)
            {
                attempts+=1;
            }
        
            numberOfGuess.innerHTML=attempts;
            previousGuess.innerHTML=guessArray;
            
        } 
   
}

easeMode.addEventListener('click',easeFunc);
hardMode.addEventListener('click',hardFunc);

input.addEventListener('change',guessCompute);

const makeNewGame=()=>{
   
     gameArea.style.display='none';
     welcomeArea.style.display='block';
     input.value=null;
     input.placeholder="Enter your guess";
     input.removeAttribute("disabled");
     result.innerHTML="Your Guess";
     numberOfGuess.innerHTML=0;
     previousGuess.innerHTML='-';
     attempts=0
     totalAttempts=0
     guessArray=[]
    
}

newGame.addEventListener('click',makeNewGame);