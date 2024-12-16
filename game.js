
let div = document.querySelector(".con")

let array = ["snake" , "gun" , "water"]

function check(funk){
    div.innerHTML = ""
    let num = array[Math.floor(Math.random()* array.length)]

    if(funk === num){
   console.log("match drow");
   div.innerHTML += "match drow please try again🤥"
   
    }

   else if (funk === "snake" && num === "water" || funk === "water" && num === "gun" || funk === "gun" && num === "snake") {
        console.log("you win the toss");
         div.innerHTML += "you win the toss🥳"
      }

      
        
    
    else{
        console.log("you loss");
         div.innerHTML += "your loss please try again😭"
        
    }
}