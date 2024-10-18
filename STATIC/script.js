function RandomNumber(min, max){ //Algoritmo generazione numero random
    let casualNumber = Math.random();
    casualNumber = casualNumber * (max - min) + min;
    casualNumber = parseInt(casualNumber);
    console.log("test random number: ", casualNumber);
    return casualNumber;
    
} 
let numero_generato = RandomNumber(1, 100);





//function inpututente(){
   // let num_utente = document.querySelector("#userGuess").value;
   // num_utente = parseInt(num_utente);
    //console.log("input utente: ", num_utente);
    //console.log(typeof num_utente)
//} FUNZIONE DI TEST

function inpututente(num_utente, numero_generato){
    let num_utente = document.querySelector("#userGuess").value;
    num_utente = parseInt(num_utente);
console.log("Input Utente:", num_utente);
if (num_utente === numero_generato){
    console.log("Hai vinto")
} else if  (num_utente < numero_generato){
    console.log("Il numero è troppo basso")
    } else {
        console.log("Il numero è troppo alto")
        }
        





}



