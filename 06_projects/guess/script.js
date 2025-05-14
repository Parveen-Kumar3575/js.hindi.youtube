let form = document.querySelector(".form");
let i = 10
let num = Math.trunc((Math.random()* 100)+1) 
let p = document.createElement('p')
p.innerText = "Click here to start new Game -->"
p.addEventListener("click",()=>{
    location.reload()
})
p.style.color = "white"
p.style.background = "black"
p.style.padding = "10px 15px"

let resultParas = document.querySelector('.resultParas')

// Generating random number 

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let guess = parseInt(document.getElementById('guessField').value)   // fetching value
    let lowOrHi = document.querySelector('.lowOrHi')
    let prevGuess = document.querySelector(".guesses")
    let remGuess = document.querySelector(".lastResult")
    let arr = [];

    

    if(i<=0)
    {
       
        lowOrHi.innerText = `Your guesses are over , Number was  ${num}`
         resultParas.appendChild(p);
        
         return;
       
    }else{
          
        if(isNaN(guess) || guess == " " || guess.length == 0){
            lowOrHi.innerText = "Enter Valid Input"
            arr.push("Invalid")
            i--
        }else if(guess > num){
            lowOrHi.innerText = "Your Guess is high"
            arr.push(guess)
            i--
        }else if(guess < num){
            lowOrHi.innerText = "Your guess is lower"
            arr.push(guess)
            i--
        }else if(guess === num){
            lowOrHi.innerText = `Congratulations ! Your guess is right , which is ${guess}`
            arr.push(guess)
            return
        }
    }

   
     arr.forEach((el)=>{
        prevGuess.appendChild(document.createTextNode(`${el},`))
    })
    remGuess.innerText = i;

    // for(i=10;i>=1;i--){
        
    // }
})