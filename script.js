let msconds = document.querySelector("#miliseconds");
let Second = document.querySelector("#seconds");
let Start = document.querySelector("#button-start");
let Stop = document.querySelector("#button-stop");
let Reset = document.querySelector("#button-reset");

let interval;

 let seconds = 00;
  let miliseconds = 00;






    Start.addEventListener("click",function(){
        interval = setInterval(startTimer, 10)
    
        
    })

    Stop.addEventListener("click",function(){
    
        clearInterval(interval)
        
    })
    Reset.addEventListener("click",function(){
        miliseconds = "00";
        seconds = "00";

        Second.innerHTML = seconds
         
         msconds.innerHTML = miliseconds
        
    })


    function startTimer(){
        miliseconds++
       
        if (miliseconds <= 9){
            msconds.innerHTML = "0" + miliseconds
        }
        if (miliseconds > 9){
            msconds.innerHTML =  miliseconds
        }
        if (miliseconds > 99){
            seconds++
            Second.innerHTML = "0" + seconds
            miliseconds = "0"
            msconds.innerHTML = '0' + 0
        }
        if (seconds > 9){
            msconds.innerHTML = seconds
        }
    }
    
   




// function 

// for (let i=0; i<60; i++) {
//     const element = array[index];
    
// }